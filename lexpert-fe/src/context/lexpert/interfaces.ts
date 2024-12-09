export interface LexpertState {
  step: number;
  typeId: number | null;
  categoryId: number | null;
  setStep: (step: number) => void;
  setTypeId: (typeId: number | null) => void;
  setCategoryId: (categoryId: number | null) => void;
}
