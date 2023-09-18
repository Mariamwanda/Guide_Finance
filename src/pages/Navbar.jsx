import "../pages/navbar.css";

function Navbar() {
  return (
    <>
      <header class="masthead">
        <nav class="navbar navbar-expand-lg navbar-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <img src="./../../src/Images/logo.png" alt="" />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="navbar-collapse" id="navbarResponsive">
              <ul class="navbar-nav ms-auto">
                <li class="nav-item ">
                  <a class="nav-link" href="#">
                    Accueil
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#Apropos">
                    Apropos
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#joindre">
                    Contact
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <button>Connexion</button>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
export default Navbar;
