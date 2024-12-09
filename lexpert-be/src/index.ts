import { Hono } from "hono";
import { Bindings, GeneratedResponse } from "./types";
import { cors } from "hono/cors";
import OpenAI from "openai";
import knowledgeBase from "./data";
import { legalAdviceSchema } from "./schemas";
import { legalAdvisePrompt } from "./prompt";
import { zodResponseFormat } from "openai/helpers/zod";

const app = new Hono<{ Bindings: Bindings }>();
app.use("*", cors());

app.post("/generate", async (c) => {
  const openai = new OpenAI({
    apiKey: c.env.OPENAI_API_KEY,
  });

  const { typeId, categoryId } = await c.req.json();

  const type = knowledgeBase.types.find((t) => t.id === typeId)!;
  const category = type.categories.find((c) => c.id === categoryId)!;
  const mandatoryClauses = category.clauses.mandatory.join(", ");
  const optionalClauses = category.clauses.optional.join(", ");
  const rules = category.rules
    .map(
      (r) =>
        `Si ${r.condition}, entonces ${r.requirement}. Razón de esta regla: ${r.reason}`
    )
    .join(" ");

  const generatedResponse: GeneratedResponse = {
    type: type.value,
    category: category.value,
    mandatoryClauses,
    optionalClauses,
    rules,
  };

  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "user", content: legalAdvisePrompt({ generatedResponse }) },
    ],
    response_format: zodResponseFormat(legalAdviceSchema, "LegalAdvice"),
  });

  return c.json({ response: JSON.parse(response.choices[0].message.content!) });
});

app.get("/knowledge", async (c) => {
  const contracts = knowledgeBase.types.map((type) => ({
    id: type.id,
    type: type.value,
    categories: type.categories.map((category) => ({
      id: category.id,
      category: category.value,
    })),
  }));

  return c.json({ contracts });
});

export default app;
