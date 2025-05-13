import { NextResponse } from "next/server";
import mysql from "mysql2/promise";
import type { RowDataPacket } from "mysql2";

export async function POST(req: Request) {
  try {
    const cookie = req.headers.get("cookie") || "";
    const match = cookie.match(/session_id=([^;]+)/);
    const sessionId = match ? match[1] : null;
    if (!sessionId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const { username, first_name, last_name, email } = await req.json();
    // Basic validation (add more as needed)
    if (!username || !first_name || !last_name || !email) {
      return NextResponse.json(
        { error: "All fields are required." },
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
    const userId = (rows[0] as RowDataPacket).id;
    // Update user profile
    await connection.execute(
      `UPDATE users SET username = ?, first_name = ?, last_name = ?, email = ? WHERE id = ?`,
      [username, first_name, last_name, email, userId]
    );
    await connection.end();
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update profile." },
      { status: 500 }
    );
  }
}
