import React from "react";
import { Button } from "@/components/ui/button";
import { Volume2 } from "lucide-react";
import { useLexpert } from "@/context/lexpert";
import { useMutation } from "@tanstack/react-query";
import { generateLegalAdvice } from "@/data/api";
import { Skeleton } from "./ui/skeleton";

export const GeneratedResponse: React.FC = () => {
  const { typeId, categoryId, setStep } = useLexpert();

  const { data, mutate, isPending, isError } = useMutation({
    mutationFn: () => {
      return generateLegalAdvice(typeId!, categoryId!);
    },
  });

  React.useEffect(() => {
    if (typeId && categoryId) {
      mutate();
    }
  }, [typeId, categoryId, mutate]);

  const speakResponse = () => {
    if (!data) return;

    const { message, clauses, recommendations } = data.response;
    const text = `
      ${message}
      Cláusulas obligatorias: ${clauses.mandatory.join(", ")}.
      Cláusulas opcionales: ${clauses.optional.join(", ")}.
      Reglas: ${clauses.rules.join(", ")}.
      Recomendaciones: ${recommendations}.
    `;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "es-ES";
    window.speechSynthesis.speak(utterance);
  };

  if (isPending) {
    return (
      <div className="bg-white rounded-lg p-6 shadow-inner">
        <Skeleton className="h-6 w-3/4 mb-4" />
        <div className="space-y-4">
          {[...Array(3)].map((_, index) => (
            <div key={index}>
              <Skeleton className="h-5 w-1/2 mb-2" />
              <div className="space-y-2">
                {[...Array(3)].map((_, subIndex) => (
                  <Skeleton key={subIndex} className="h-4 w-full" />
                ))}
              </div>
            </div>
          ))}
        </div>
        <Skeleton className="h-5 w-1/2 mt-4 mb-2" />
        <Skeleton className="h-4 w-full" />
      </div>
    );
  }

  if (isError) {
    return <div>Error al generar la respuesta. Inténtelo de nuevo.</div>;
  }

  if (!data) {
    return <div>No se pudo generar la respuesta.</div>;
  }

  const { message, clauses, recommendations } = data.response;

  return (
    <div>
      <div className="bg-white rounded-lg p-6 shadow-inner overflow-y-auto">
        <h3 className="text-lg font-semibold mb-2">{message}</h3>
        <div className="mb-4">
          <h4 className="font-medium text-purple-700">
            Cláusulas Obligatorias:
          </h4>
          <ul className="list-disc pl-5 mt-2">
            {clauses.mandatory.map((clause, index) => (
              <li key={index}>{clause}</li>
            ))}
          </ul>
        </div>
        <div className="mb-4">
          <h4 className="font-medium text-purple-700">Cláusulas Opcionales:</h4>
          <ul className="list-disc pl-5 mt-2">
            {clauses.optional.map((clause, index) => (
              <li key={index}>{clause}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-medium text-purple-700">Reglas:</h4>
          <ul className="list-disc pl-5 mt-2">
            {clauses.rules.map((rule, index) => (
              <li key={index}>{rule}</li>
            ))}
          </ul>
        </div>
        <div className="mt-4">
          <h4 className="font-medium text-purple-700">Recomendaciones:</h4>
          <p className="text-sm mt-2">{recommendations}</p>
        </div>
      </div>
      <div className="mt-4 flex justify-between">
        <Button
          onClick={() => {
            setStep(1);
          }}
          variant="outline"
        >
          Nueva Consulta
        </Button>
        <Button onClick={speakResponse} variant="outline">
          <Volume2 className="mr-2 h-4 w-4" />
          Reproducir respuesta
        </Button>
      </div>
    </div>
  );
};
