import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import mysql from "mysql2/promise";
import { v4 as uuidv4 } from "uuid";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();
    if (!email || !password) {
      return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 400 }
      );
    }

    // Connect to DB
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
    });

    // Find user by email
    const [users] = await connection.execute(
      "SELECT id, password FROM users WHERE email = ? LIMIT 1",
      [email]
    );
    if (!Array.isArray(users) || users.length === 0) {
      await connection.end();
      return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 401 }
      );
    }
    const user = users[0] as any;

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      await connection.end();
      return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 401 }
      );
    }

    // Get user agent and IP address
    const userAgent = req.headers.get("user-agent") || null;
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0] ||
      req.headers.get("x-real-ip") ||
      null;

    // Create session
    const sessionId = uuidv4();
    const now = new Date();
    const expiresAt = new Date(now.getTime() + 1000 * 60 * 60 * 24 * 7); // 7 days
    await connection.execute(
      "INSERT INTO sessions (id, user_id, created_at, expires_at, is_active, user_agent, ip_address) VALUES (?, ?, NOW(), ?, 1, ?, ?)",
      [sessionId, user.id, expiresAt, userAgent, ip]
    );
    await connection.end();

    // Set cookie
    const response = NextResponse.json({ success: true });
    response.headers.append(
      "Set-Cookie",
      `session_id=${sessionId}; Path=/; HttpOnly; Secure; SameSite=Strict; Expires=${expiresAt.toUTCString()}`
    );
    return response;
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { message: "Couldn't Sign In..." },
      { status: 500 }
    );
  }
}
