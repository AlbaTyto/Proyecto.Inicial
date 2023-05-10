import {BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar.tsx";
import Home from "./components/Home.tsx";

function App() {

  return (
    <>
      <div>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<><NavBar /><Home /></>}/>
        </Routes>
        </BrowserRouter>
        
      </div>
    </>
  );
}

export default App;
