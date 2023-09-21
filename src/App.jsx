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
import DashAdmin from "./pages/DashAdmin.jsx";
import Home from "./pages/Home.jsx";
import Users from "./pages/Users.jsx";
import Home from "./pages/Home.jsx";
import Home from "./pages/Home.jsx";
import Home from "./pages/Home.jsx";
import Home from "./pages/Home.jsx";
import productId from "./pages/Product";


// import EntrepriseDash from "./pages/entrepriseDash";



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Accueil/>} />
          <Route path="/Footer" element={<Footer/>} />
          <Route path="/Enregistrement" element={<Enregistrement/>} />
          <Route path="/Connexion" element={<Connexion/>} />
          <Route path="/DashAdmin" element={<DashAdmin/>} />
          <Route path="/EntrepriseDash" element={<EntrepriseDash/>} />

          <Route path="/Home" element={<Home />} />
          <Route path="/Users" element={<UserList />} />
          <Route path="/User/:userId" element={<User />} />
          <Route path="/NewUser" element={<NewUser />} />
          <Route path="/Products" element={<ProductList />} />
          <Route path="/Product/:productId" element={<Product />} />
          <Route path="/Newproduct" element={<NewProduct />} />
        
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
