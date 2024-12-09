import { Button } from "@/components/ui/button";
import { useLexpert } from "@/context/lexpert";
import { motion } from "framer-motion";

type Props = {
  types: {
    id: number;
    type: string;
    categories: {
      id: number;
      category: string;
    }[];
  }[];
};

export const CategorySelection = ({ types }: Props) => {
  const { setStep, setCategoryId, typeId } = useLexpert();

  const handleCategorySelect = (id: number) => {
    setCategoryId(id);
    setStep(3);
  };

  const categoriesFiltered = typeId
    ? types.find((type) => type.id === typeId)!.categories
    : [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        Seleccione la categoría
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {categoriesFiltered.map((category) => (
          <Button
            key={category.id}
            onClick={() => handleCategorySelect(category.id)}
            className="h-16 text-lg justify-start px-6"
            variant="outline"
          >
            {category.category}
          </Button>
        ))}
      </div>
    </motion.div>
  );
};
