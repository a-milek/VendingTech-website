import { Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Homepage from "./Homepage";
import Faq from "./pages/Faq";

import Produkty from "./pages/Produkty";
import Uslugi from "./pages/Uslugi";
import Kontakt from "./pages/Kontakt";

import pl from "./data/locales/pl.json";
import en from "./data/locales/en.json";
import { useState } from "react";
import { IntlProvider } from "react-intl";

function App() {
  const messages = {
    pl,
    en,
  };

  const LOCALES = {
    ENGLISH: "en" as const,
    POLISH: "pl" as const,
  };

  type Locale = (typeof LOCALES)[keyof typeof LOCALES];

  const [locale, setLocale] = useState<Locale>(LOCALES.POLISH);

  return (
    <>
      <IntlProvider locale={locale} messages={messages[locale]}>
        <Navbar
          currentLocale={locale}
          setLocale={(locale: string) => setLocale(locale as Locale)}
        />

        <main>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/produkty" element={<Produkty />} />
            <Route path="/uslugi" element={<Uslugi />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="/faq" element={<Faq />} />
          </Routes>
        </main>

        <Footer />
      </IntlProvider>
    </>
  );
}

export default App;
