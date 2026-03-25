import { createRoot } from "react-dom/client";
import Root from "./Root";
import "./reset.css";

const container = document.getElementById("root");

if (!container) {
  throw new Error("Root container missing in index.html");
}

createRoot(container).render(
  <Root />
);
