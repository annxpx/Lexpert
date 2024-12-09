import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { useLexpert } from "@/context/lexpert";

export const NavigationButtons: React.FC = () => {
  const { step, setStep, selectedType, selectedCategory } = useLexpert();

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleNext = () => {
    if (step === 1 && selectedType) {
      setStep(2);
    } else if (step === 2 && selectedCategory) {
      setStep(3);
    }
  };

  return (
    <div className="mt-6 flex justify-between items-center">
      <Button variant="outline" onClick={handleBack} disabled={step === 1}>
        Atrás
      </Button>
      <div className="text-sm text-gray-500">Paso {step} de 3</div>
      <Button
        variant="outline"
        onClick={handleNext}
        disabled={
          (step === 1 && !selectedType) ||
          (step === 2 && !selectedCategory) ||
          step === 3
        }
      >
        Siguiente
        <ChevronRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
};
