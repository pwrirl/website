import { NextResponse } from "next/server";
import mysql from "mysql2/promise";
import type { RowDataPacket } from "mysql2";

export async function GET(req: Request) {
  try {
    const cookie = req.headers.get("cookie") || "";
    const match = cookie.match(/session_id=([^;]+)/);
    const sessionId = match ? match[1] : null;
    if (!sessionId) {
      return NextResponse.json({ user: null });
    }
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
    });
    const [rows] = await connection.execute<RowDataPacket[]>(
      `SELECT u.id, u.first_name, u.last_name, u.email, u.password, u.verified, u.create_date, u.avatar, u.twitch, u.kick, u.youtube, u.rumble, u.x, u.noice, u.trovo, u.parti, u.discord, u.instagram, u.tiktok
       FROM sessions s
       JOIN users u ON s.user_id = u.id
       WHERE s.id = ? AND s.is_active = 1 AND s.expires_at > NOW()
       LIMIT 1`,
      [sessionId]
    );
    await connection.end();
    if (Array.isArray(rows) && rows.length > 0) {
      const user = rows[0] as RowDataPacket;
      if (user.avatar) {
        // Try to detect image type (default to png)
        let mimeType = "image/png";
        const buf = Buffer.from(user.avatar);
        // JPEG magic number: ff d8 ff
        if (buf[0] === 0xff && buf[1] === 0xd8 && buf[2] === 0xff) {
          mimeType = "image/jpeg";
        }
        // PNG magic number: 89 50 4e 47
        if (
          buf[0] === 0x89 &&
          buf[1] === 0x50 &&
          buf[2] === 0x4e &&
          buf[3] === 0x47
        ) {
          mimeType = "image/png";
        }
        user.avatar = `data:${mimeType};base64,${buf.toString("base64")}`;
      }
      return NextResponse.json({ user });
    }
    return NextResponse.json({ user: null });
  } catch (error) {
    return NextResponse.json({ user: null });
  }
}
