import { useState } from "react";
import React from "react";
import Footer from "./Components/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Accueil from "./pages/Accueil";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Accueil/>} />
          <Route path="/Footer" element={<Footer/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
