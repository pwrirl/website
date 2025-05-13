import { NextResponse } from "next/server";
import mysql from "mysql2/promise";
import type { RowDataPacket } from "mysql2";

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req: Request) {
  try {
    const cookie = req.headers.get("cookie") || "";
    const match = cookie.match(/session_id=([^;]+)/);
    const sessionId = match ? match[1] : null;
    if (!sessionId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    // Parse multipart form data
    const formData = await req.formData();
    const file = formData.get("avatar");
    if (!file || typeof file === "string") {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }
    // Validate file type
    const allowedTypes = ["image/png", "image/jpeg", "image/jpg"];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json({ error: "Invalid file type" }, { status: 400 });
    }
    // Read file as buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
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
    // Update avatar in DB
    await connection.execute(`UPDATE users SET avatar = ? WHERE id = ?`, [
      buffer,
      userId,
    ]);
    await connection.end();
    // Return base64 data URL for immediate display
    const base64 = buffer.toString("base64");
    const dataUrl = `data:${file.type};base64,${base64}`;
    return NextResponse.json({ avatar: dataUrl });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to upload avatar" },
      { status: 500 }
    );
  }
}
