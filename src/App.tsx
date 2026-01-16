import { Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Homepage from "./Homepage";
import Faq from "./pages/Faq";

import Produkty from "./pages/Produkty";
import Uslugi from "./pages/Uslugi";
import Kontakt from "./pages/Kontakt";

function App() {
  return (
    <>
      <Navbar />

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
    </>
  );
}

export default App;
