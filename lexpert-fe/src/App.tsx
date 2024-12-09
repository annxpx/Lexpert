import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./routes/Home";
import { LexpertProvider } from "./context/lexpert";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LexpertProvider>
        <Home />
      </LexpertProvider>
    </QueryClientProvider>
  );
}

export default App;
