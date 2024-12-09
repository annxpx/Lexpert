import { GeneratedResponse } from "./types";

export const legalAdvisePrompt = ({
  generatedResponse,
}: {
  generatedResponse: GeneratedResponse;
}) => {
  return `
  Tengo la siguiente información generada para un contrato legal:
  - Tipo de contrato: ${generatedResponse.type}
  - Categoría del contrato: ${generatedResponse.category}
  - Cláusulas obligatorias: ${generatedResponse.mandatoryClauses}
  - Cláusulas opcionales: ${generatedResponse.optionalClauses}
  - Reglas: ${generatedResponse.rules}

  Por favor, devuelve una respuesta en el siguiente formato JSON:

  {
    "message": "Texto inicial humanizado sobre el contrato, con información adicional si es relevante.",
    "clauses": {
      "mandatory": ["Lista de cláusulas obligatorias que deben incluirse en el contrato y agrega información adicional si es relevante y en lenguaje humano."],
      "optional": ["Lista de cláusulas opcionales que pueden incluirse en el contrato y agrega información adicional si es relevante y en lenguaje humano."]
      "rules": [
        "Texto descriptivo para cada regla, humanizado y con información adicional."
      ]
    },
    "recommendations": "Texto como conclusion y con recomendaciones adicionales para el contrato, si es necesario y en lenguaje humano."
  }

  Asegúrate de que sea un JSON bien formateado, claro y válido, y que las reglas estén descritas de manera humanizada, añadiendo información adicional si es relevante.
`;
};
