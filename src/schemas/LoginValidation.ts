import { z } from "zod";

export const loginValidationSchema = z.object({
  email: z.string().email("O campo deve ser preenchido com um email válido."),
  password: z.string(),
});
