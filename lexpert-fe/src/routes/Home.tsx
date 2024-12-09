import { CategorySelection } from "@/components/CategorySelection";
import { GeneratedResponse } from "@/components/GeneratedResponse";
import { NavigationButtons } from "@/components/NavigationButtons";
import { useLexpert } from "@/context/lexpert";
import { useQuery } from "@tanstack/react-query";
import { knowledgeQueryOptions } from "@/data/queries";
import { TypeSelection } from "@/components/ TypeSelection";
import { StepIndicator } from "@/components/ StepIndicator";

function Home() {
  const { step } = useLexpert();
  const { data, isLoading, isError } = useQuery(knowledgeQueryOptions);

  if (isLoading) return <div>Cargando...</div>;
  if (isError) return <div>Error al cargar los datos.</div>;

  return (
    <div className="w-full max-w-4xl py-8">
      {data && (
        <>
          <StepIndicator currentStep={step} totalSteps={3} />
          <div>
            {step === 1 && (
              <TypeSelection
                types={data.contracts.map((contracts) => {
                  return { id: contracts.id, type: contracts.type };
                })}
              />
            )}
            {step === 2 && (
              <CategorySelection
                types={data.contracts.map((contract) => {
                  return {
                    id: contract.id,
                    type: contract.type,
                    categories: contract.categories,
                  };
                })}
              />
            )}
            {step === 3 && <GeneratedResponse />}
          </div>
          <NavigationButtons />
        </>
      )}
    </div>
  );
}

export default Home;
