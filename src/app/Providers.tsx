import { QueryClientProvider } from "react-query";
import { queryClient } from "../api/config";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "antd-style";
import GlobalStyles from "./GlobalStyles";

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <GlobalStyles />
        <BrowserRouter>{children}</BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default Providers;
