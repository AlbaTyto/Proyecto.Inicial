import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar.tsx";
import Home from "./components/Home.tsx";

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
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
