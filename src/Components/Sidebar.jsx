import "./sidebar.css";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <>
      <nav class="sidebar">
        <div>
          <div class="sidebar__logo">
            <img src="./Images/logo.png" alt="" />
            <h2 class="sidebar__logo-header">Admin</h2>
          </div>
          <ul class="side-nav">
            <li class="side-nav__item side-nav__item-active">
              <i class="fa-solid fa-house"></i>
              <span>Tableau</span>
            </li>
            <li class="side-nav__item">
              <i class="fa-solid fa-chart-simple"></i>
              <span>Statistique</span>
            </li>
            <Link to="/Entreprise" style={{ textDecoration: "none" }}>
              <li class="side-nav__item">
                <i class="fa-solid fa-users"></i>
                <span>Entreprises</span>
              </li>
            </Link>
            <Link to="/Depense" style={{ textDecoration: "none" }}>
              <li class="side-nav__item">
                <i class="fa-solid fa-money-bill"></i>
                <span>Depenses</span>
              </li>
            </Link>
            <Link to="/Dashboard" style={{ textDecoration: "none" }}>
              <li class="side-nav__item">
                <i class="fa-solid fa-gear"></i>
                <span>Parametres</span>
              </li>
            </Link>
          </ul>
        </div>

        <ul class="side-nav">
          <Link to="/connexion" style={{ textDecoration: "none" }}>
            <li class="side-nav__item last-item">
              <i class="fa-solid fa-right-to-bracket"></i>
              <span>Deconnexion</span>
            </li>
          </Link>
        </ul>
      </nav>
    </>
  );
}

export default Sidebar;
