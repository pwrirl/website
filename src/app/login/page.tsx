"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import PrimaryHeader from "@/components/layout/PrimaryHeader";
import PrimaryFooter from "@/components/layout/PrimaryFooter";
import { Icon } from "@iconify/react";

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<{ submit?: string; email?: string; password?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as "email" | "password"]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});
    // Basic validation
    if (!formData.email) {
      setErrors((prev) => ({ ...prev, email: "Email is required" }));
      setIsSubmitting(false);
      return;
    }
    if (!formData.password) {
      setErrors((prev) => ({ ...prev, password: "Password is required" }));
      setIsSubmitting(false);
      return;
    }
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error("Couldn't Sign In...");
      }
      // On success, redirect to dashboard
      router.push("/dashboard");
    } catch (error: any) {
      setErrors({ submit: "Couldn't Sign In..." });
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    fetch("/api/session/active")
      .then(res => res.json())
      .then(data => {
        if (data.active) {
          router.replace("/dashboard");
        }
      });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#18181b] text-white">
      <PrimaryHeader />
      <main className="flex-1 flex flex-col">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-[#1a1a1a] rounded-xl shadow-xl overflow-hidden max-w-xl mx-auto w-full">
            <div className="p-8">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-6 transition-colors"
              >
                <Icon icon="mdi:chevron-left" className="w-5 h-5" />
                <span>Back to Home</span>
              </Link>
              <h2 className="text-2xl font-bold text-center mb-8">
                Sign in to your account
              </h2>
              <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                {errors.submit && (
                  <div className="mb-6 rounded-lg bg-red-500/10 p-4 border border-red-500/20">
                    <div className="flex">
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-red-400">
                          {errors.submit}
                        </h3>
                      </div>
                    </div>
                  </div>
                )}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/80">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`mt-1 block w-full rounded-lg bg-[#2a2a2a] border border-[#353535] focus:ring-0 focus:outline-none px-4 py-2 ${
                      errors.email ? "border-red-500" : ""
                    }`}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : ""}
                  />
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-500" id="email-error">
                      {errors.email}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-white/80">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    required
                    value={formData.password}
                    onChange={handleInputChange}
                    className={`mt-1 block w-full rounded-lg bg-[#2a2a2a] border border-[#353535] focus:ring-0 focus:outline-none px-4 py-2 ${
                      errors.password ? "border-red-500" : ""
                    }`}
                    aria-invalid={!!errors.password}
                    aria-describedby={errors.password ? "password-error" : ""}
                    autoComplete="current-password"
                  />
                  {errors.password && (
                    <p className="mt-2 text-sm text-red-500" id="password-error">
                      {errors.password}
                    </p>
                  )}
                  <div className="flex justify-end mt-2">
                    <Link href="/forgot-password" className="text-sm text-[#e20074] hover:underline">
                      Forgot password?
                    </Link>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg text-sm font-medium text-white bg-gradient-to-r from-[#e20074] to-[#ff00a0] hover:from-[#d1006a] hover:to-[#e6009c] focus:outline-none focus:ring-0 focus:border-transparent focus-visible:outline-none disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer transition-all"
                  >
                    {isSubmitting ? "Signing in..." : "Sign In"}
                  </button>
                </div>
              </form>
              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-white/10" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-[#1a1a1a] text-white/60">
                      Don&apos;t have an account?
                    </span>
                  </div>
                </div>
                <div className="mt-6">
                  <Link
                    href="/register"
                    className="w-full flex justify-center py-3 px-4 border border-white/10 rounded-lg text-sm font-medium text-white hover:bg-white/5 focus:outline-none transition-all"
                  >
                    Create account
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <PrimaryFooter />
    </div>
  );
} 