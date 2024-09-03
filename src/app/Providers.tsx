import { QueryClientProvider } from "react-query";
import { queryClient } from "../api/config";
import { BrowserRouter } from "react-router-dom";

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>{children}</BrowserRouter>
    </QueryClientProvider>
  );
};

export default Providers;
