import { z } from "zod";

export const registrationSchema = z.object({
  first_name: z
    .string()
    .min(2, "First name must be at least 2 characters")
    .max(255, "First name must be less than 255 characters")
    .regex(
      /^[a-zA-Z\s-']+$/,
      "First name can only contain letters, spaces, hyphens, and apostrophes"
    ),
  last_name: z
    .string()
    .min(2, "Last name must be at least 2 characters")
    .max(255, "Last name must be less than 255 characters")
    .regex(
      /^[a-zA-Z\s-']+$/,
      "Last name can only contain letters, spaces, hyphens, and apostrophes"
    ),
  email: z
    .string()
    .email("Invalid email address")
    .max(255, "Email must be less than 255 characters"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(255, "Password must be less than 255 characters"),
});

export type RegistrationFormData = z.infer<typeof registrationSchema>;

export const sanitizeInput = (input: string): string => {
  return input
    .trim()
    .replace(/[<>]/g, "")
    .replace(/javascript:/gi, "")
    .replace(/on\w+=/gi, "")
    .replace(/\\/g, "")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
};
