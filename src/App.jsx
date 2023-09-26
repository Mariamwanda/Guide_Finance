import React from "react";
import Footer from "./Components/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Enregistrement from "./pages/enregistrement";
import "./App.css";
import Connexion from "./pages/connexion";
import Dashboard from "./pages/Dashbord";
import Sidebar from "./Components/Sidebar.jsx";
import Topbar from "./Components/Topbar";


import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/Footer" element={<Footer />} />
          <Route path="/Enregistrement" element={<Enregistrement />} />
          <Route path="/Connexion" element={<Connexion />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Sidebar" element={<Sidebar/>} />
          <Route path="/Topbar" element={<Topbar/>} />

         
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
