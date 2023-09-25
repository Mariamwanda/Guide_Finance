import React from "react";
import Footer from "./Components/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Enregistrement from "./pages/enregistrement";
import "./App.css";
import "./pages/script.js";
import Connexion from "./pages/connexion";
import DashAdmin from "./pages/DashAdmin";

import Home from "./pages/Home.jsx";
import Product from "./pages/Product.jsx";
import Sidebar from "./Components/Sidebar.jsx";
import WidgetLg from "./Components/WidgetLg";
import Topbar from "./components/Topbar.jsx";
import UserList from "./pages/UserList.jsx";
import NewUser from "./pages/NewUser.jsx";
import NewProduct from "./pages/NewProduct.jsx";
import User from "./pages/User.jsx";
import ProductList from "./pages/ProductList.jsx";

import { BrowserRouter } from "react-router-dom";

// import EntrepriseDash from "./pages/entrepriseDash";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/WidgetLg" element={<WidgetLg />} />

          <Route path="/NewUser" element={<NewUser />} />
          <Route path="/Sidebar" element={<Sidebar />} />
          <Route path="/Topbar" element={<Topbar />} />
          <Route path="/Footer" element={<Footer />} />
          <Route path="/Enregistrement" element={<Enregistrement />} />
          <Route path="/Connexion" element={<Connexion />} />
          <Route path="/DashAdmin" element={<DashAdmin />} />
        
          <Route path="/Home" element={<Home />} />
          <Route path="/UserList" element={<UserList />} />
          <Route path="/User" element={<User />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/ProductList" element={<ProductList />} />
          <Route path="/Newproduct" element={<NewProduct />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
