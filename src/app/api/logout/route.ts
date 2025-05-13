import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

export async function POST(req: Request) {
  try {
    const cookie = req.headers.get("cookie") || "";
    const match = cookie.match(/session_id=([^;]+)/);
    const sessionId = match ? match[1] : null;
    if (!sessionId) {
      // No session, just clear cookie
      const response = NextResponse.json({ success: true });
      response.headers.append(
        "Set-Cookie",
        `session_id=; Path=/; HttpOnly; Secure; SameSite=Strict; Expires=Thu, 01 Jan 1970 00:00:00 GMT`
      );
      return response;
    }
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
    });
    await connection.execute("UPDATE sessions SET is_active = 0 WHERE id = ?", [
      sessionId,
    ]);
    await connection.end();
    // Clear cookie
    const response = NextResponse.json({ success: true });
    response.headers.append(
      "Set-Cookie",
      `session_id=; Path=/; HttpOnly; Secure; SameSite=Strict; Expires=Thu, 01 Jan 1970 00:00:00 GMT`
    );
    return response;
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
