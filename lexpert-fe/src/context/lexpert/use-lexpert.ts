import { LexpertContext } from "@/context/lexpert/LexpertContext";
import { useContext } from "react";
import { LexpertState } from "./interfaces";

export const useLexpert = (): LexpertState => {
  const context = useContext(LexpertContext);
  if (!context) {
    throw new Error("useLexpert must be used within a LexpertProvider");
  }
  return context;
};
