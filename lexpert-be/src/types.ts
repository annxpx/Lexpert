export type Bindings = {
  OPENAI_API_KEY: string;
};

export interface GeneratedResponse {
  type: string;
  category: string;
  mandatoryClauses: string;
  optionalClauses: string;
  rules: string;
}
