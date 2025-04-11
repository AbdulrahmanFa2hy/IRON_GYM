import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Classes from "./pages/Classes";
import Membership from "./pages/Membership";
import Contact from "./pages/Contact";
import Calculator from "./pages/Calculator";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#111827] text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/calculator" element={<Calculator />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
