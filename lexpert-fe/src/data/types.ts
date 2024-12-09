export interface KnowledgeCategory {
  id: number;
  category: string;
}

export interface KnowledgeType {
  id: number;
  type: string;
  categories: KnowledgeCategory[];
}

export interface KnowledgeResponse {
  contracts: KnowledgeType[];
}

export interface LegalClauses {
  mandatory: string[];
  optional: string[];
  rules: string[];
}

export interface LegalAdviceResponse {
  message: string;
  clauses: LegalClauses;
  recommendations: string;
}

export interface GenerateResponse {
  response: LegalAdviceResponse;
}
