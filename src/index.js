import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App
      token01={["Blue 100", "#dbeafe", "Base Blue plalette"]}
      token02={["Blue 200", "#bfdbfe", "Base Blue plalette"]}
      token03={["Blue 300", "#93c5fd", "Base Blue plalette"]}
      token04={["Blue 400", "#60a5fa", "Base Blue plalette"]}
      token05={["Blue 500", "#3b82f6", "Base Blue plalette"]}
      token06={["Blue 600", "#2563eb", "Base Blue plalette"]}
      token07={["Blue 700", "#1d4ed8", "Base Blue plalette"]}
      token08={["Blue 800", "#1e40af", "Base Blue plalette"]}
      token09={["Primary — test for a long name", "#2563eb", "Primary color — test for too long description"]}
      token10={["Success", "#16a34a", "Success color"]}
      token11={["Critical", "#dc2626", "Critical color"]}
      token12={["Warning", "#ea580c", "Warning color"]}
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
