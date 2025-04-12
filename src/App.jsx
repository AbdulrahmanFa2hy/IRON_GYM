import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Calculator from "./pages/Calculator";
import Products from "./pages/Products";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#111827] text-white">
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
