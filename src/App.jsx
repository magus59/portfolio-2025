import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NavbarComponent from "./components/NavbarComponent";
import Diag from "./pages/Diag";

function App() {
  return (
    <>
      <NavbarComponent />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/diagnostic" element={<Diag />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
