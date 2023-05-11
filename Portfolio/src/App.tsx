import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home";
import About from "./components/subcomponents/About";
import Projects from "./components/subcomponents/Projects";
import Contact from "./components/subcomponents/Contact";

function App() {

  return (
    <>

      <div>
        <BrowserRouter>
          <nav>
            <NavBar />
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
