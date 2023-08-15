import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer"
import { Box } from "@chakra-ui/react";


function App() {

  return (
    <Box
      bg='0o1'
    >
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
