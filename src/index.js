import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App
      token01={["Test", "#0F62FE", "Primary color"]}
      token02={["Test 2", "#0F62FE", "Primary color"]}
      token03={["Test 3", "#0F62FE", "Primary color"]}
      token04={["Test 3", "#0F62FE", "Primary color"]}
      token05={["Test 3", "#0F62FE", "Primary color"]}
      token06={["Test 3", "#0F62FE", "Primary color"]}
      token07={["Test 3", "#0F62FE", "Primary color"]}
      token08={["Test 3", "#0F62FE", "Primary color"]}
      token09={["Test 3", "#0F62FE", "Primary color"]}
      token10={["Test 3", "#0F62FE", "Primary color"]}
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
