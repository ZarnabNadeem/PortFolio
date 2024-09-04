import MainPage from "./routes/MainPage";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Projects from "./routes/Projects";
import "./index.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
