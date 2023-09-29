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
import Utilisateur from "./Components/Utilisateur";
import { BrowserRouter } from "react-router-dom";
import Entreprise from "./pages/Entreprise.jsx"
import Depense from "./pages/Depense";


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
          <Route path="/Sidebar" element={<Sidebar />} />
          <Route path="/Topbar" element={<Topbar />} />
          <Route path="/Entreprise" element={<Entreprise />} />
          <Route path="/Utilisateur" element={<Utilisateur />} />
          <Route path="/Depense" element={<Depense />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
