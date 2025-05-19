import { NextResponse } from "next/server";
import mysql from "mysql2/promise";
import type { RowDataPacket } from "mysql2";
import { Resend } from "resend";
import { v4 as uuidv4 } from "uuid";
import VerificationEmail from "@/emails/verification-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const cookie = req.headers.get("cookie") || "";
    const match = cookie.match(/session_id=([^;]+)/);
    const sessionId = match ? match[1] : null;
    if (!sessionId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const { first_name, last_name, email } = await req.json();
    // Basic validation (add more as needed)
    if (!first_name || !last_name || !email) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }
    // Connect to DB and get user id and current email
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
    });
    const [rows] = await connection.execute<RowDataPacket[]>(
      `SELECT u.id, u.email, u.first_name, u.verified FROM sessions s JOIN users u ON s.user_id = u.id WHERE s.id = ? AND s.is_active = 1 AND s.expires_at > NOW() LIMIT 1`,
      [sessionId]
    );
    if (!Array.isArray(rows) || rows.length === 0) {
      await connection.end();
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const user = rows[0] as RowDataPacket;
    let emailChanged = false;
    if (user.email !== email) {
      emailChanged = true;
    }
    // Update user profile (set verified to 'no' if email changed)
    await connection.execute(
      `UPDATE users SET first_name = ?, last_name = ?, email = ?, verified = ? WHERE id = ?`,
      [
        first_name,
        last_name,
        email,
        emailChanged ? "no" : user.verified,
        user.id,
      ]
    );
    // If email changed, generate token and send verification email
    if (emailChanged) {
      const token = uuidv4();
      const expiresAt = new Date();
      expiresAt.setHours(expiresAt.getHours() + 24);
      await connection.execute(
        `INSERT INTO verification_tokens (user_id, token, expires_at) VALUES (?, ?, ?)`,
        [user.id, token, expiresAt]
      );
      const verificationUrl = `${process.env.NEXT_PUBLIC_APP_URL}/verify-email?token=${token}`;
      await resend.emails.send({
        from: "support@pwrirl.com",
        to: email,
        subject: "Verify your PowerIRL email address",
        react: VerificationEmail({
          verificationUrl,
          firstName: first_name,
        }),
      });
    }
    await connection.end();
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update profile." },
      { status: 500 }
    );
  }
}
