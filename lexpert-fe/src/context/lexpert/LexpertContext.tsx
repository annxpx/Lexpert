import { createContext } from "react";
import { LexpertState } from "./interfaces";

export const LexpertContext = createContext<LexpertState | null>(null);
