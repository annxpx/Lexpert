import { Button } from "@/components/ui/button";
import { useLexpert } from "@/context/lexpert";
import { motion } from "framer-motion";

type Props = {
  types: {
    id: number;
    type: string;
  }[];
};

export const TypeSelection = ({ types }: Props) => {
  const { setStep, setTypeId } = useLexpert();

  const handleTypeSelect = (id: number) => {
    setTypeId(id);
    setStep(2);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-xl font-semibold mb-4">
        Seleccione el tipo de consulta
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {types.map((type) => (
          <Button
            key={type.id}
            onClick={() => handleTypeSelect(type.id)}
            className="h-24 text-lg justify-start px-6"
            variant="outline"
          >
            {type.type}
          </Button>
        ))}
      </div>
    </motion.div>
  );
};
