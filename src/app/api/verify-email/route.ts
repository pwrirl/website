import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const token = searchParams.get("token");

    if (!token) {
      return NextResponse.json(
        { error: "Verification token is required" },
        { status: 400 }
      );
    }

    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
    });

    // Find valid token
    const [tokens] = await connection.execute(
      `SELECT user_id FROM verification_tokens 
       WHERE token = ? AND expires_at > NOW() AND used = 0
       LIMIT 1`,
      [token]
    );

    if (!Array.isArray(tokens) || tokens.length === 0) {
      await connection.end();
      return NextResponse.json(
        { error: "Invalid or expired verification token" },
        { status: 400 }
      );
    }

    const tokenData = tokens[0] as any;

    // Update user as verified
    await connection.execute(`UPDATE users SET verified = 'yes' WHERE id = ?`, [
      tokenData.user_id,
    ]);

    // Mark token as used
    await connection.execute(
      `UPDATE verification_tokens SET used = 1 WHERE token = ?`,
      [token]
    );

    await connection.end();
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email verification error:", error);
    return NextResponse.json(
      { error: "Failed to verify email" },
      { status: 500 }
    );
  }
}
