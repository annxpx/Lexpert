import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { useLexpert } from "@/context/lexpert";

export const NavigationButtons: React.FC = () => {
  const { step, setStep} = useLexpert();

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };



  return (
    <div className="mt-6 flex justify-between items-center">
      <Button variant="outline" onClick={handleBack} disabled={step === 1}>
        Atrás
      </Button>
      <div className="text-sm text-gray-500">Paso {step} de 3</div>
    </div>
  );
};
