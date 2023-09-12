import Footer from "../Components/footer";

function Accueil() {
  return (
    <>
      <header class="masthead">
        <nav class="navbar navbar-expand-lg navbar-light  shadow">
          <div class="container">
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
            <div class="collapse navbar-collapse" id="navbarResponsive">
              <ul class="navbar-nav ms-auto">
                <li class="nav-item ">
                  <a class="nav-link" href="#">
                    Accueil
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Apropos
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Contact vari
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

        <div class="container h-100">
          <div class="row h-100 align-items-center">
            <div class="flotant">
              <h1 class="fw-light">
                <span>G</span>_<span>F</span>inance,
              </h1>
              {
                <p class="lead">
                  vous accompage <br />
                  pour tout votre <br />
                  existence.
                </p>
              }
            </div>
          </div>
        </div>
      </header>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
          nulla, asperiores magnam iusto ducimus, similique quaerat, autem culpa
          suscipit quam repellendus corporis dolorum quod vel modi nam. Quos,
          earum iusto.
        </p>
      </div>
      <section class="py-5">
        <div class="container">
          <h2 class="fw-light">Page Content</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repellendus ab nulla dolorum autem nisi officiis blanditiis
            voluptatem hic, assumenda aspernatur facere ipsam nemo ratione
            cumque magnam enim fugiat reprehenderit expedita.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Accueil;
