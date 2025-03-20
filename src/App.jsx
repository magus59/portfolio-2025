import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NavbarComponent from "./components/NavbarComponent";
import Diag from "./pages/Diag";
import FooterComponent from "./components/FooterComponent";
import Technos from "./pages/Technos";

function App() {
  return (
    <>
      <NavbarComponent />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/diagnostic" element={<Diag />} />
          <Route path="/technos" element={<Technos />} />
        </Routes>
      <FooterComponent />
    </>
  );
}

export default App;
