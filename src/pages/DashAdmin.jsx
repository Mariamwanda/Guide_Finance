import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";
import Chart from "../components/Chart";
import { userData } from "../dummyData.js";
import WidgetLg from "../Components/WidgetLg";
import FeaturedInfo from "../components/FeaturedInfo";
import WidgetSm from "../Components/WidgetSm";
import "./dash.css";

function DashAdmin() {
  const [isComponentVisible, setComponentVisible] = useState(true);
  const toggleComponent = () => {
    setComponentVisible(!isComponentVisible);
  };

  return (
    <>
    <Sidebar/>
  <div class="topbar">
    <h1>Tableau de Bord</h1>
  </div>
  <div class="sidebar">
    <ul>
      <li><a href="#">Accueil</a></li>
      <li><a href="#">Ventes</a></li>
      <li><a href="#">Clients</a></li>
      <li><a href="#">Rapports</a></li>
    </ul>
  </div>
  <div class="content">

  </div>

    </>
  );
}

export default DashAdmin;
