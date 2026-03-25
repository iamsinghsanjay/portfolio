import { StrictMode } from "react";
import App from "./App";
import "./global.css";

const Root: React.FC = () => {
  return (
    <StrictMode>
      <App />
    </StrictMode>
  );
};

export default Root;
