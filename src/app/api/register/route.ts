import { NextResponse } from "next/server";
import { registrationSchema } from "@/lib/validation";
import bcrypt from "bcryptjs";
import mysql from "mysql2/promise";
import { Resend } from "resend";
import { v4 as uuidv4 } from "uuid";
import VerificationEmail from "@/emails/verification-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    // Validate input
    const data = registrationSchema.parse(body);

    // Hash password
    const hashedPassword = await bcrypt.hash(data.password, 12);

    // Connect to MySQL/MariaDB
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
    });

    // Check for existing email
    const [existing] = await connection.execute(
      "SELECT id FROM users WHERE email = ? LIMIT 1",
      [data.email]
    );
    if (Array.isArray(existing) && existing.length > 0) {
      await connection.end();
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      );
    }

    // Insert user (no address fields)
    const [result] = await connection.execute(
      `INSERT INTO users (first_name, last_name, email, password, verified, create_date)
       VALUES (?, ?, ?, ?, 'no', CURDATE())`,
      [data.first_name, data.last_name, data.email, hashedPassword]
    );

    // Get the new user's ID
    const userId = (result as any).insertId;

    // Generate verification token
    const token = uuidv4();
    const expiresAt = new Date();
    expiresAt.setHours(expiresAt.getHours() + 24); // Token expires in 24 hours

    // Store token in database
    await connection.execute(
      `INSERT INTO verification_tokens (user_id, token, expires_at) VALUES (?, ?, ?)`,
      [userId, token, expiresAt]
    );

    // Generate verification URL
    const verificationUrl = `${process.env.NEXT_PUBLIC_APP_URL}/verify-email?token=${token}`;

    // Send verification email
    try {
      await resend.emails.send({
        from: "support@pwrirl.com",
        to: data.email,
        subject: "Verify your PowerIRL email address",
        react: VerificationEmail({
          verificationUrl,
          firstName: data.first_name,
        }),
      });
    } catch (emailError) {
      console.error("Resend email error:", emailError);
      await connection.end();
      return NextResponse.json(
        { message: "Failed to send verification email." },
        { status: 500 }
      );
    }

    await connection.end();
    return NextResponse.json({ success: true });
  } catch (error: any) {
    if (error.errors && Array.isArray(error.errors)) {
      // Zod validation errors
      return NextResponse.json(
        { message: error.errors[0].message },
        { status: 400 }
      );
    }
    console.error("Registration error:", error);
    return NextResponse.json(
      { message: "Registration failed" },
      { status: 500 }
    );
  }
}
