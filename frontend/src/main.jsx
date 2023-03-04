import { ThirdwebProvider } from "@thirdweb-dev/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import InsuraApp from "./InsuraApp";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThirdwebProvider activeChain="ethereum">
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="insuraApp" element={<InsuraApp />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </ThirdwebProvider>
);
