import { GenerateResponse, KnowledgeResponse } from "./types";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const fetchKnowledge = async (): Promise<KnowledgeResponse> => {
  const response = await fetch(`${API_BASE_URL}/knowledge`);
  if (!response.ok) {
    throw new Error("Error al obtener tipos y categorías");
  }

  return response.json();
};

export const generateLegalAdvice = async (
  typeId: number,
  categoryId: number
): Promise<GenerateResponse> => {
  const response = await fetch(`${API_BASE_URL}/generate`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ typeId, categoryId }),
  });
  if (!response.ok) {
    throw new Error("Error al generar la respuesta");
  }
  return response.json();
};
