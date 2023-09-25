import "../pages/navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <header className="masthead">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src="./../../src/Images/logo.png" alt="" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item ">
                  <a className="nav-link" href="#">
                    Accueil
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#Apropos">
                    Apropos
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#joindre">
                    Contact
                  </a>
                </li>
                <Link to="/enregistrement">
                  <a className="nav-link" href="#">
                    <button>Connexion</button>
                  </a>
                </Link>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
export default Navbar;
