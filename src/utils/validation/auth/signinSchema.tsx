import { FormUserData } from "@/src/types";
import { ZodType, z } from "zod";

export const signinSchema: ZodType<Pick<FormUserData, "email">> = z.object({
  email: z.string().email(),
});
