import { FormUserData } from "@/src/types";
import { ZodType, z } from "zod";

export const signupSchema: ZodType<FormUserData> = z
  .object({
    username: z
      .string()
      .min(2, { message: "Username is too short" })
      .max(20, "Username is too long")
      .regex(/^[A-Za-z]+$/i, "Only letters are allowed"),
    email: z.string().email(),
    password: z
      .string()
      .min(8, { message: "Password is too short" })
      .max(20, { message: "Password is too long" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

