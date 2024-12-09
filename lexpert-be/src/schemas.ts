import { z } from "zod";

export const legalAdviceSchema = z.object({
  message: z.string(),
  clauses: z.object({
    mandatory: z.array(z.string()),
    optional: z.array(z.string()),
    rules: z.array(z.string()),
  }),
  recommendations: z.string(),
});
