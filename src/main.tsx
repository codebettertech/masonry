import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.tsx";
import { Provider } from "./provider.tsx";
import { Spinner } from "@heroui/react";
import { NetworkProvider } from "./hook/useNetwork.tsx";
import "@/styles/globals.css";
import '@/styles/base.scss';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
        <NetworkProvider>
          <Provider>
            <Suspense fallback={<Spinner className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" size="lg" />}>
              <App />
            </Suspense>
          </Provider>
        </NetworkProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
