import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import About from "./components/subcomponents/About/About";
import Projects from "./components/subcomponents/Projects/Projects";
import Contact from "./components/subcomponents/Contact/Contact";
import Footer from "./components/Footer/Footer"
import { Box } from "@chakra-ui/react";

function App() {

  return (
    <Box>
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
          <div>
            <Footer />
          </div>
        </BrowserRouter>
    </Box>
  );
}

export default App;
