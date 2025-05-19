"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function VerifyEmailPage() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const verify = async () => {
      const token = searchParams.get("token");
      if (!token) {
        setStatus("error");
        setMessage("Invalid verification link.");
        return;
      }
      try {
        const res = await fetch(`/api/verify-email?token=${token}`);
        const data = await res.json();
        if (res.ok && data.success) {
          setStatus("success");
          setMessage("Your email has been verified! You can now log in.");
        } else {
          setStatus("error");
          setMessage(data.error || "Verification failed.");
        }
      } catch {
        setStatus("error");
        setMessage("An error occurred while verifying your email.");
      }
    };
    verify();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white rounded-xl shadow-xl p-8 max-w-md w-full text-center">
        {status === "loading" && (
          <>
            <h1 className="text-2xl font-bold mb-4 text-gray-800">Verifying your email...</h1>
            <p className="text-gray-600">Please wait while we verify your email address.</p>
          </>
        )}
        {status === "success" && (
          <>
            <h1 className="text-2xl font-bold mb-4 text-green-600">Email Verified!</h1>
            <p className="text-gray-700">{message}</p>
            <a
              href="/login"
              className="mt-6 inline-block px-6 py-2 bg-gradient-to-r from-[#e20074] to-[#ff00a0] text-white rounded-lg font-semibold shadow hover:from-[#d1006a] hover:to-[#e6009c] transition"
            >
              Go to Login
            </a>
          </>
        )}
        {status === "error" && (
          <>
            <h1 className="text-2xl font-bold mb-4 text-red-600">Verification Failed</h1>
            <p className="text-gray-700">{message}</p>
          </>
        )}
      </div>
    </div>
  );
} 