import { FormSignUpData } from "@/src/types";
import { ZodType, z } from "zod";

export const UserSchema: ZodType<FormSignUpData> = z
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
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "Password doesn't match",
    path: ["confirm_password"],
  });

