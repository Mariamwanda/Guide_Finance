import "./topbar.css";
import { Link } from "react-router-dom";

function Topbar() {
  return (
    <>
      <div class="top-container">
        <div action="#" class="search">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input type="text" class="search__input" placeholder="recherche..." />
        </div>
        <div class="user-nav">
          <button class="notification">
            <i class="fa-solid fa-bell"></i>
          </button>
          <div class="user-info">
            <i class="fa-solid fa-user-plus"></i>
            <span class="user-name">Wandaogo</span>
          </div>
          <Link to="/Utilisateur">
            <button className="">
              {" "}
              <i class="fa-solid fa-plus"></i> Ajouter
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Topbar;
