import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/utilities.css";

import Calculator from "./pages/calculator";
import Weather from "./pages/weather";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/weather" element={<Weather />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
