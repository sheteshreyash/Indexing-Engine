import { AuthProvider } from "@descope/react-sdk";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <AuthProvider projectId={import.meta.env.VITE_APP_PROJECT_ID}>
      <App />
    </AuthProvider>
);
