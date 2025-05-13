import { NextResponse } from "next/server";
import { registrationSchema } from "@/lib/validation";
import bcrypt from "bcryptjs";
import mysql from "mysql2/promise";

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
    await connection.execute(
      `INSERT INTO users (first_name, last_name, email, password, status, verified, create_date)
       VALUES (?, ?, ?, ?, 'pending', 'no', CURDATE())`,
      [data.first_name, data.last_name, data.email, hashedPassword]
    );
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
