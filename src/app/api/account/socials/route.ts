import { NextResponse } from "next/server";
import mysql from "mysql2/promise";
import type { RowDataPacket } from "mysql2";

const SOCIAL_FIELDS = [
  "twitch",
  "kick",
  "youtube",
  "rumble",
  "x",
  "noice",
  "trovo",
  "parti",
  "discord",
  "instagram",
  "tiktok",
];

export async function POST(req: Request) {
  try {
    const cookie = req.headers.get("cookie") || "";
    const match = cookie.match(/session_id=([^;]+)/);
    const sessionId = match ? match[1] : null;
    if (!sessionId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const data = await req.json();
    // Only keep valid social fields
    const updates = Object.fromEntries(
      Object.entries(data).filter(([key]) => SOCIAL_FIELDS.includes(key))
    );
    if (Object.keys(updates).length === 0) {
      return NextResponse.json(
        { error: "No valid socials provided." },
        { status: 400 }
      );
    }
    // Connect to DB and get user id
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
    });
    const [rows] = await connection.execute<RowDataPacket[]>(
      `SELECT u.id FROM sessions s JOIN users u ON s.user_id = u.id WHERE s.id = ? AND s.is_active = 1 AND s.expires_at > NOW() LIMIT 1`,
      [sessionId]
    );
    if (!Array.isArray(rows) || rows.length === 0) {
      await connection.end();
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const user = rows[0] as RowDataPacket;
    // Build update query
    const setClause = Object.keys(updates)
      .map((key) => `${key} = ?`)
      .join(", ");
    const values = Object.values(updates);
    values.push(user.id);
    await connection.execute(
      `UPDATE users SET ${setClause} WHERE id = ?`,
      values
    );
    await connection.end();
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update socials." },
      { status: 500 }
    );
  }
}
