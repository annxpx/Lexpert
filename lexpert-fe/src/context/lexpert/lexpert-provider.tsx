import React, { useState } from "react";
import { LexpertContext } from "./LexpertContext";

export const LexpertProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [step, setStep] = useState(1);
  const [typeId, setTypeId] = useState<number | null>(null);
  const [categoryId, setCategoryId] = useState<number | null>(null);

  return (
    <LexpertContext.Provider
      value={{
        step,
        typeId,
        categoryId,
        setStep,
        setTypeId,
        setCategoryId,
      }}
    >
      {children}
    </LexpertContext.Provider>
  );
};
