import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

export async function GET(req: Request) {
  try {
    const cookie = req.headers.get("cookie") || "";
    const match = cookie.match(/session_id=([^;]+)/);
    const sessionId = match ? match[1] : null;
    if (!sessionId) {
      return NextResponse.json({ active: false });
    }

    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
    });
    const [sessions] = await connection.execute(
      "SELECT id FROM sessions WHERE id = ? AND is_active = 1 AND expires_at > NOW() LIMIT 1",
      [sessionId]
    );
    await connection.end();
    if (Array.isArray(sessions) && sessions.length > 0) {
      return NextResponse.json({ active: true });
    }
    return NextResponse.json({ active: false });
  } catch (error) {
    return NextResponse.json({ active: false });
  }
}
