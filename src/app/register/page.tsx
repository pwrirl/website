"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { registrationSchema, type RegistrationFormData, sanitizeInput } from "@/lib/validation";
import { useRouter } from "next/navigation";
import PrimaryHeader from "@/components/layout/PrimaryHeader";
import PrimaryFooter from "@/components/layout/PrimaryFooter";
import { Icon } from "@iconify/react";

// Password strength regex and helper
const passwordStrengthRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;
const passwordStrengthMessage =
  "Password must be at least 8 characters and include uppercase, lowercase, number, and special character.";

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState<RegistrationFormData>({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof RegistrationFormData | "submit", string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const updated = { ...prev, [name]: value };
      // Password strength check
      if (name === "password") {
        if (value && !passwordStrengthRegex.test(value)) {
          setErrors((prevErrs) => ({ ...prevErrs, password: passwordStrengthMessage }));
        } else {
          setErrors((prevErrs) => {
            const { password, ...rest } = prevErrs;
            return rest;
          });
        }
      }
      return updated;
    });
    if (errors[name as keyof RegistrationFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});
    // Sanitize all fields before validation
    const sanitizedData: any = {};
    Object.keys(formData).forEach((key) => {
      sanitizedData[key] = sanitizeInput((formData[key as keyof typeof formData] ?? "") as string);
    });
    // Password strength validation
    if (!passwordStrengthRegex.test(sanitizedData.password)) {
      setErrors((prev) => ({ ...prev, password: passwordStrengthMessage }));
      setIsSubmitting(false);
      return;
    }
    try {
      const validatedData = registrationSchema.parse(sanitizedData);
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validatedData),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Registration failed");
      }
      router.push("/payment");
    } catch (error: any) {
      if (error.errors && Array.isArray(error.errors)) {
        // Zod validation errors
        const fieldErrors: any = {};
        error.errors.forEach((err: any) => {
          if (err.path && err.path[0]) {
            fieldErrors[err.path[0]] = err.message;
          }
        });
        setErrors(fieldErrors);
      } else {
        setErrors({ submit: error.message || "An unexpected error occurred" });
      }
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
                Create your account
              </h2>
              <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                {errors.submit && (
                  <div className="mb-6 rounded-lg bg-red-500/10 p-4 border border-red-500/20">
                    <div className="flex">
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-red-400">
                          {"Couldn't Register User..."}
                        </h3>
                      </div>
                    </div>
                  </div>
                )}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="first_name" className="block text-sm font-medium text-white/80">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      name="first_name"
                      required
                      value={formData.first_name}
                      onChange={handleInputChange}
                      className={`mt-1 block w-full rounded-lg bg-[#2a2a2a] border border-[#353535] focus:ring-0 focus:outline-none px-4 py-2 ${
                        errors.first_name ? "border-red-500" : ""
                      }`}
                      aria-invalid={!!errors.first_name}
                      aria-describedby={errors.first_name ? "first_name-error" : ""}
                    />
                    {errors.first_name && (
                      <p className="mt-2 text-sm text-red-500" id="first_name-error">
                        {errors.first_name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="last_name" className="block text-sm font-medium text-white/80">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="last_name"
                      name="last_name"
                      required
                      value={formData.last_name}
                      onChange={handleInputChange}
                      className={`mt-1 block w-full rounded-lg bg-[#2a2a2a] border border-[#353535] focus:ring-0 focus:outline-none px-4 py-2 ${
                        errors.last_name ? "border-red-500" : ""
                      }`}
                      aria-invalid={!!errors.last_name}
                      aria-describedby={errors.last_name ? "last_name-error" : ""}
                    />
                    {errors.last_name && (
                      <p className="mt-2 text-sm text-red-500" id="last_name-error">
                        {errors.last_name}
                      </p>
                    )}
                  </div>
                </div>
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
                    autoComplete="new-password"
                  />
                  {errors.password && (
                    <p className="mt-2 text-sm text-red-500" id="password-error">
                      {errors.password}
                    </p>
                  )}
                </div>
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg text-sm font-medium text-white bg-gradient-to-r from-[#e20074] to-[#ff00a0] hover:from-[#d1006a] hover:to-[#e6009c] focus:outline-none focus:ring-0 focus:border-transparent focus-visible:outline-none disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer transition-all"
                  >
                    {isSubmitting ? "Processing..." : "Continue to Payment"}
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
                      Already have an account?
                    </span>
                  </div>
                </div>
                <div className="mt-6">
                  <Link
                    href="/login"
                    className="w-full flex justify-center py-3 px-4 border border-white/10 rounded-lg text-sm font-medium text-white hover:bg-white/5 focus:outline-none transition-all"
                  >
                    Sign in
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