import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar.tsx";
import Home from "./components/Home.tsx";
import About from "./components/subcomponents/About.tsx";
import Projects from "./components/subcomponents/Projects.tsx";
import Contact from "./components/subcomponents/Contact.tsx";

function App() {

  return (
    <>
      <nav>
        <NavBar />
      </nav>
      <div>
        <BrowserRouter>
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
