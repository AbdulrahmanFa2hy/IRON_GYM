import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Calculator from "./pages/Calculator";
import Products from "./pages/Products";

// ScrollToTop component to reset scroll position on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Set the dir attribute on the html element based on the current language
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
    // Add the appropriate font class based on the language
    document.documentElement.classList.toggle(
      "font-arabic",
      i18n.language === "ar"
    );
    document.documentElement.classList.toggle(
      "font-serif",
      i18n.language !== "ar"
    );
  }, [i18n.language]);

  return (
    <Router>
      <div className="min-h-screen bg-[#111827] text-white">
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/products" element={<Products />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
