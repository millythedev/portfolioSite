import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Failed to find root element");
}

const isDev = import.meta.env.DEV;
const basename = isDev ? '/' : '/portfolioSite';

console.log('Environment:', isDev ? 'development' : 'production');
console.log('Base path:', basename);

createRoot(rootElement).render(
  <BrowserRouter basename={basename}>
    <App />
  </BrowserRouter>
);