import { ThirdwebProvider } from "@thirdweb-dev/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import InsuraApp from "./InsuraApp";
import ErrorPage from "./ErrorPage";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThirdwebProvider activeChain="goerli">
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact={true} element={<App />} />
          <Route path="insuraApp" element={<InsuraApp />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </ThirdwebProvider>
);
