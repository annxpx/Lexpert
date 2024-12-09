import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="min-h-screen w-full bg-gradient-to-br from-purple-100 to-indigo-200 flex items-center justify-center">
      <App />
    </div>
  </StrictMode>
);
