import { StrictMode } from "react";
import App from "./App";
import "./global.css";
import { ThemeProvider } from "./ThemeProvider";

const Root: React.FC = () => {
  return (
    <StrictMode>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </StrictMode>
  );
};

export default Root;
