import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";

declare global {
  interface Window {
    __EDEN_BOOTSTRAP__?: Record<string, unknown>;
  }
}

ReactDOM.createRoot(document.getElementById("observatory-root") as HTMLElement).render(
  <React.StrictMode>
    <App bootstrap={window.__EDEN_BOOTSTRAP__ ?? {}} />
  </React.StrictMode>,
);
