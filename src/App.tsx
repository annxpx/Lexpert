import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  FileText,
  MessageSquare,
  ChevronRight,
  Volume2,
} from "lucide-react";

export const knowledgeBase = {
  types: [
    {
      id: 1,
      type: "Contratos Laborales",
      categories: [
        {
          id: 1,
          category: "Contrato Indefinido",
          clauses: {
            mandatory: [
              "El contrato debe establecer el nombre del trabajador y el empleador.",
              "Debe incluir la naturaleza del trabajo y el lugar donde se prestarán los servicios.",
              "Indicar el salario pactado y la forma de pago.",
            ],
            optional: [
              "Cláusulas sobre beneficios adicionales.",
              "Condiciones de exclusividad del trabajador.",
            ],
          },
          rules: [
            {
              condition: "Si el contrato no tiene un límite de tiempo definido",
              requirement: "Se considera como un contrato laboral indefinido.",
              reason:
                "El contrato por tiempo indefinido es la norma general salvo disposición expresa en contrario.",
            },
          ],
        },
        {
          id: 2,
          category: "Contrato por Tiempo Limitado",
          clauses: {
            mandatory: [
              "Debe especificar la duración del contrato.",
              "Incluir la naturaleza del trabajo y el lugar donde se prestarán los servicios.",
              "Indicar el salario pactado y la forma de pago.",
            ],
            optional: [
              "Estipular beneficios adicionales por cumplimiento anticipado.",
              "Condiciones para la renovación del contrato.",
            ],
          },
          rules: [
            {
              condition: "Duración máxima permitida",
              requirement:
                "No debe exceder los límites establecidos por la ley.",
              reason:
                "Contratos excesivamente largos se consideran como contratos indefinidos.",
            },
          ],
        },
        {
          id: 3,
          category: "Contrato por Obra o Servicio Determinado",
          clauses: {
            mandatory: [
              "El contrato debe especificar la obra o servicio a realizar.",
              "Debe incluir el tiempo estimado para la conclusión de la obra o servicio.",
              "Indicar el salario acordado y los plazos de pago.",
            ],
            optional: [
              "Cláusulas sobre bonificaciones por cumplimiento antes del plazo.",
              "Condiciones para extender el contrato si la obra no ha terminado.",
            ],
          },
          rules: [
            {
              condition: "Cuando la obra o servicio finaliza",
              requirement: "El contrato termina automáticamente.",
              reason:
                "La duración del contrato está limitada a la conclusión de la obra o servicio.",
            },
          ],
        },
        {
          id: 4,
          category: "Periodo de Prueba",
          clauses: {
            mandatory: [
              "Debe especificar la duración del período de prueba, que no puede exceder los 60 días.",
              "El empleador está obligado a remunerar al trabajador durante este período.",
              "El contrato debe incluir las condiciones bajo las cuales se evalúa el desempeño del trabajador.",
            ],
            optional: [
              "Condiciones para la capacitación del trabajador durante el período de prueba.",
            ],
          },
          rules: [
            {
              condition: "Finalización del período de prueba",
              requirement:
                "Debe decidirse si el trabajador continuará bajo contrato laboral regular.",
              reason:
                "El período de prueba es para evaluar la aptitud del trabajador para el puesto.",
            },
          ],
        },
      ],
    },
    {
      id: 2,
      type: "Contratos de Arrendamiento",
      categories: [
        {
          id: 1,
          category: "Arrendamiento de Bienes Inmuebles",
          clauses: {
            mandatory: [
              "Duración del arrendamiento.",
              "Obligaciones del arrendador y arrendatario.",
              "Monto de la renta mensual.",
            ],
            optional: [
              "Opciones de renovación automática.",
              "Cláusula penal por incumplimiento.",
            ],
          },
          rules: [
            {
              condition: "Duración mayor a 1 año",
              requirement: "Registrar ante la autoridad correspondiente.",
              reason:
                "Los contratos mayores a 1 año deben registrarse según la normativa local.",
            },
            {
              condition: "Incluir penalización por incumplimiento",
              requirement: "Debe especificar el monto o porcentaje aplicable.",
              reason:
                "Es necesario detallar la penalización para proteger los derechos del arrendador.",
            },
          ],
        },
        {
          id: 2,
          category: "Arrendamiento de Bienes Muebles",
          clauses: {
            mandatory: [
              "Identificación del bien mueble objeto del arrendamiento.",
              "Duración del arrendamiento.",
              "Monto del arrendamiento y plazos de pago.",
            ],
            optional: [
              "Condiciones de mantenimiento del bien mueble.",
              "Cláusulas para renovación automática.",
            ],
          },
          rules: [
            {
              condition: "Uso indebido del bien mueble",
              requirement: "El arrendador puede rescindir el contrato.",
              reason: "El contrato protege el correcto uso del bien arrendado.",
            },
            {
              condition: "Falta de pago del monto acordado",
              requirement:
                "El arrendador puede reclamar la restitución del bien.",
              reason:
                "La puntualidad en el pago asegura la vigencia del contrato.",
            },
          ],
        },
        {
          id: 3,
          category: "Subarrendamiento",
          clauses: {
            mandatory: [
              "Consentimiento del arrendador principal.",
              "Identificación del subarrendatario y condiciones del subarrendamiento.",
              "Duración del subarrendamiento.",
            ],
            optional: [
              "Cláusulas para la cesión de derechos y obligaciones.",
              "Condiciones para la renovación del subarrendamiento.",
            ],
          },
          rules: [
            {
              condition:
                "El subarrendamiento excede la duración del contrato principal",
              requirement: "El subarrendamiento no podrá ser válido.",
              reason:
                "El subarrendamiento no puede exceder el contrato original del arrendatario.",
            },
            {
              condition: "Daños ocasionados por el subarrendatario",
              requirement:
                "El arrendatario original es responsable ante el arrendador.",
              reason:
                "El arrendatario principal mantiene la relación directa con el arrendador.",
            },
          ],
        },
        {
          id: 4,
          category: "Leasing",
          clauses: {
            mandatory: [
              "Descripción del bien objeto del contrato de leasing.",
              "Duración del contrato de leasing.",
              "Monto de las cuotas y términos de pago.",
            ],
            optional: [
              "Cláusulas para opción de compra al término del leasing.",
              "Condiciones para la renovación del contrato.",
            ],
          },
          rules: [
            {
              condition: "Uso indebido del bien arrendado",
              requirement: "El arrendador puede rescindir el contrato.",
              reason:
                "El contrato protege los intereses del arrendador y el uso correcto del bien.",
            },
            {
              condition: "Opción de compra al finalizar el leasing",
              requirement:
                "El arrendatario debe cumplir con todas las cuotas pactadas.",
              reason:
                "La opción de compra está sujeta al cumplimiento del contrato.",
            },
          ],
        },
      ],
    },
  ],
};
function App() {
  const [step, setStep] = useState(1);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [response, setResponse] = useState<any | null>(null);

  const handleTypeSelect = (value: string) => {
    setSelectedType(value);
    setSelectedCategory(null);
    setResponse(null);
    setStep(2);
  };

  const handleCategorySelect = (value: string) => {
    setSelectedCategory(value);
    setStep(3);
    generateResponse();
  };

  useEffect(() => {
    if (step === 3) {
      generateResponse();
    }
  }, [step, selectedType, selectedCategory]);

  const generateResponse = () => {
    if (!selectedType || !selectedCategory) return;

    const type = knowledgeBase.types.find((t) => t.type === selectedType);
    if (!type) return;

    const category = type.categories.find(
      (c) => c.category === selectedCategory
    );
    if (!category) return;

    const mandatoryClauses = category.clauses.mandatory.join(", ");
    const optionalClauses = category.clauses.optional.join(", ");
    const rules = category.rules
      .map(
        (r) =>
          `Si ${r.condition}, entonces ${r.requirement}. Razón: ${r.reason}`
      )
      .join(" ");

    setResponse({
      type: selectedType,
      category: selectedCategory,
      mandatoryClauses,
      optionalClauses,
      rules,
    });
  };

  const speakResponse = () => {
    if (!response) return;

    const text = `
      Para ${response.category} de ${response.type}:
      Cláusulas obligatorias: ${response.mandatoryClauses}.
      Cláusulas opcionales: ${response.optionalClauses}.
      Reglas: ${response.rules}
    `;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "es-ES";
    window.speechSynthesis.speak(utterance);
  };

  const StepIndicator = ({
    currentStep,
    totalSteps,
  }: {
    currentStep: number;
    totalSteps: number;
  }) => (
    <div className="flex justify-center items-center mb-6">
      {Array.from({ length: totalSteps }, (_, i) => (
        <div key={i} className="flex items-center">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center ${
              i + 1 <= currentStep
                ? "bg-purple-600 text-white"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            {i + 1}
          </div>
          {i < totalSteps - 1 && (
            <div
              className={`h-1 w-12 ${
                i + 1 < currentStep ? "bg-purple-600" : "bg-gray-200"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
  return (
    <>
      <div className="min-h-screen w-full bg-gradient-to-br from-purple-100 to-indigo-200 p-4 md:p-8 flex items-center justify-center">
        <Card className="w-full max-w-4xl">
          <CardContent className="p-6">
            <h1 className="text-3xl font-bold text-center text-purple-800 mb-6">
              LEXPERT
            </h1>
            <StepIndicator currentStep={step} totalSteps={3} />
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-xl font-semibold mb-4 flex items-center">
                    <BookOpen className="mr-2" />
                    Seleccione el tipo de consulta
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {knowledgeBase.types.map((type) => (
                      <Button
                        key={type.id}
                        onClick={() => handleTypeSelect(type.type)}
                        className="h-24 text-lg justify-start px-6"
                        variant="outline"
                      >
                        {type.type}
                      </Button>
                    ))}
                  </div>
                </motion.div>
              )}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-xl font-semibold mb-4 flex items-center">
                    <FileText className="mr-2" />
                    Seleccione la categoría
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {knowledgeBase.types
                      .find((t) => t.type === selectedType)
                      ?.categories.map((category) => (
                        <Button
                          key={category.id}
                          onClick={() =>
                            handleCategorySelect(category.category)
                          }
                          className="h-16 text-lg justify-start px-6"
                          variant="outline"
                        >
                          {category.category}
                        </Button>
                      ))}
                  </div>
                </motion.div>
              )}
              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-xl font-semibold mb-4 flex items-center">
                    <MessageSquare className="mr-2" />
                    Respuesta Generada
                  </h2>
                  {response && (
                    <div className="bg-white rounded-lg p-6 shadow-inner max-h-96 overflow-y-auto">
                      <h3 className="text-lg font-semibold mb-2">
                        {response.category} de {response.type}
                      </h3>
                      <div className="mb-4">
                        <h4 className="font-medium text-purple-700">
                          Cláusulas Obligatorias:
                        </h4>
                        <ul className="list-disc pl-5 mt-2">
                          {response.mandatoryClauses
                            .split(", ")
                            .map((clause: string, index: number) => (
                              <li key={index} className="text-sm text-gray-700">
                                {clause}
                              </li>
                            ))}
                        </ul>
                      </div>
                      <div className="mb-4">
                        <h4 className="font-medium text-purple-700">
                          Cláusulas Opcionales:
                        </h4>
                        <ul className="list-disc pl-5 mt-2">
                          {response.optionalClauses
                            .split(", ")
                            .map((clause: string, index: number) => (
                              <li key={index} className="text-sm text-gray-700">
                                {clause}
                              </li>
                            ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-purple-700">Reglas:</h4>
                        <ul className="list-disc pl-5 mt-2">
                          {response.rules
                            .split(". ")
                            .map((rule: string, index: number) => (
                              <li
                                key={index}
                                className="text-sm text-gray-700 mb-2"
                              >
                                {rule}
                              </li>
                            ))}
                        </ul>
                      </div>
                    </div>
                  )}
                  <div className="mt-4 flex justify-between">
                    <Button
                      onClick={() => {
                        setStep(1);
                        setSelectedType(null);
                        setSelectedCategory(null);
                        setResponse(null);
                      }}
                      variant="outline"
                    >
                      Nueva Consulta
                    </Button>
                    <Button
                      onClick={speakResponse}
                      className="flex items-center"
                      variant="outline"
                    >
                      <Volume2 className="mr-2 h-4 w-4" />
                      Reproducir respuesta
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            {step < 3 && (
              <div className="mt-6 flex justify-between items-center">
                <Button
                  variant="outline"
                  onClick={() => setStep(step > 1 ? step - 1 : 1)}
                  disabled={step === 1}
                >
                  Atrás
                </Button>
                <div className="text-sm text-gray-500">Paso {step} de 3</div>
                <Button
                  variant="outline"
                  onClick={() => setStep(step < 3 ? step + 1 : 3)}
                  disabled={
                    step === 3 ||
                    (step === 1 && !selectedType) ||
                    (step === 2 && !selectedCategory)
                  }
                >
                  Siguiente
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default App;
