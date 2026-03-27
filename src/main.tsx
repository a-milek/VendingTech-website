import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { IntlProvider } from "react-intl";

import pl from "./data/locales/pl.json";
import en from "./data/locales/en.json";

const messages = {
  pl,
  en,
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <IntlProvider locale="en" defaultLocale="en" messages={messages.pl}>
          <App />
        </IntlProvider>
      </BrowserRouter>
    </ChakraProvider>
  </StrictMode>,
);
