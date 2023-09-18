import { useState } from "react";
import React from "react";
import Footer from "./Components/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Accueil from "./pages/Accueil";
import { Link, animateScroll as scroll } from "react-scroll";
import Enregistrement from "./pages/enregistrement";
import "./App.css";
import './pages/script.js'
import Connexion from "./pages/connexion";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Accueil/>} />
          <Route path="/Footer" element={<Footer/>} />
          <Route path="/Enregistrement" element={<Enregistrement/>} />
          <Route path="/Connexion" element={<Connexion/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
