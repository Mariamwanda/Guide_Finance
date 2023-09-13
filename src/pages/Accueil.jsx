import './script.js'

import Footer from "../Components/footer";

function Accueil() {
  return (
    <>
      <header class="masthead">
        <nav class="navbar navbar-expand-lg navbar-light  shadow">
          <div class="container navbare">
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
            <div class=" navbar-collapse" id="navbarResponsive">
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
                  <a class="nav-link" href="#">
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

        <div class="container h-100">
          <div class="row h-100 align-items-center">
            <div class="flotant">
              <h1 class="fw-light">
                <span>G</span>_<span>F</span>inance,
              </h1>

              <p class="lead">
                vous accompage <br />
                pour tout votre <br />
                existence.
              </p>
            </div>
          </div>
        </div>
      </header>
      <div id="Apropos">
        <div className="container-fluid  bar-progess">
          <div className="container">
            <p>A PROPOS DE NOUS...</p>
          </div>
        </div>
        <section class="py-5 apropos">
          <div class="container">
            <div className="img-fluid">
              <img src="./../../src/Images/apropos.webp" alt="" />
            </div>
            <div className="text-fluid">
              <h1>Tout sur Nous</h1>
              <p>
                Le lorem ipsum est, en imprimerie, une suite de mots sans <br />
                signification utilisée à titre provisoire pour calibrer une mise
                <br />
                en page, le texte définitif ve nant remplacer le faux-texte dès{" "}
                <br />
                qu'il est prêt ou que la mise en page est ach evée.
              </p>
              <p>
                Le lorem ipsum est, en imprimerie, une suite de mots sans <br />
                signification utilisée à titre provisoire pour calibrer une mise
                <br />
                en page, le texte définitif ve nant remplacer le faux-texte dès{" "}
                <br />
                qu'il est prêt ou que la mise en page est ach evée.
              </p>
              <button>En Savoir plus...</button>
            </div>
          </div>
        </section>
        <h2>Fonctionnement</h2>
        <div class="blocks">
          <div class="block">
            <div class="grid-col">
              <img src="./../../src/Images/finance2.jpeg" alt="" />
              <h1>
                <span>Soutient</span>
                <br />
              </h1>
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci maiores ipsum, error explicabo beatae cupiditate
                delectus incidunt quisquam. Quod pariatur reiciendis ullam
              </p>
            </div>
          </div>
          <div class="block">
            <div class="grid-col">
              <img src="./../../src/Images/fiance.jpeg" alt="" />
              <h1>
                <span>Accompagnement</span> <br />
              </h1>
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci maiores ipsum, error explicabo beatae cupiditate
                delectus incidunt quisquam. Quod pariatur reiciendis ullam
              </p>
            </div>
          </div>
          <div class="block">
            <div class="grid-col">
              <img src="./../../src/Images/finances1.webp" alt="" />
              <h1>Motivation</h1>
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci maiores ipsum, error explicabo beatae cupiditate
                delectus incidunt quisquam. Quod pariatur reiciendis ullam
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="container partenaire">
        <div className="container progessPater">
          <p>PARTENAIRES</p>
        </div>
        <div className="imgPart">
          <div>
            <img src="./../../src/Images/unif.png" alt="" />
            <p>UNICEF</p>
          </div>
          <div>
            <img src="./../../src/Images/atlaOK.png" alt="" />
            <p>ATLANTA</p>
          </div>
          <div>
            <img src="./../../src/Images/unif.png" alt="" />
            <p>dddede</p>
          </div>
          <div>
            <img src="./../../src/Images/unif.png" alt="" />
            <p>dddede</p>
          </div>
        </div>
      </section>
      <div
        id="carouselExampleCaptions"
        class="container carousel slide"
        data-bs-ride="carousel"
      >
        <h2>Nos Avis..</h2>
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="cards">
              <div class="card">
                <div class="grid-col">
                  <h1>
                    <img src="./../../src/Images/utilisateur3.jpeg" alt="" />
                    <span>Mr.Belem</span>
                    <br />
                  </h1>

                  <p>
                    {" "}
                    Tenetur, incidunt quidem. Tenetur, incidunt quidem. Tenetur,
                    incidunt quidem. Tenetur, incidunt quidem. Tenetur, incidunt
                    quidem.
                  </p>
                  <div className="social">
                    <a href="">
                      <i class="fa-solid fa-star-half-stroke"></i>
                    </a>
                    <a href="">
                      <i class="fa-solid fa-star"></i>
                    </a>
                    <a href="">
                      <i class="fa-solid fa-star"></i>
                    </a>
                    <a href="">
                      <i class="fa-solid fa-star"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="grid-col">
                  <h1>
                    <img src="./../../src/Images/utilisateur2.jpeg" alt="" />
                    <span>Mr.Belem</span>
                    <br />
                  </h1>

                  <p>
                    {" "}
                    Tenetur, incidunt quidem. Tenetur, incidunt quidem. Tenetur,
                    incidunt quidem. Tenetur, incidunt quidem. Tenetur, incidunt
                    quidem.
                  </p>
                  <div className="social">
                    <a href="">
                      <i class="fa-solid fa-star-half-stroke"></i>
                    </a>
                    <a href="">
                      <i class="fa-solid fa-star"></i>
                    </a>
                    <a href="">
                      <i class="fa-solid fa-star"></i>
                    </a>
                    <a href="">
                      <i class="fa-solid fa-star"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="grid-col">
                  <h1>
                    <img src="./../../src/Images/utilisateur1.jpeg" alt="" />
                    <span>Mr.Belem</span>
                    <br />
                  </h1>

                  <p>
                    {" "}
                    Tenetur, incidunt quidem. Tenetur, incidunt quidem. Tenetur,
                    incidunt quidem. Tenetur, incidunt quidem. Tenetur, incidunt
                    quidem.
                  </p>
                  <div className="social">
                    <a href="">
                      <i class="fa-solid fa-star-half-stroke"></i>
                    </a>
                    <a href="">
                      <i class="fa-solid fa-star"></i>
                    </a>
                    <a href="">
                      <i class="fa-solid fa-star"></i>
                    </a>
                    <a href="">
                      <i class="fa-solid fa-star"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item active">
            <div class="cards">
              <div class="card">
                <div class="grid-col">
                  <h1>
                    <img src="./../../src/Images/utilisateur3.jpeg" alt="" />
                    <span>Mr.Belem</span>
                    <br />
                  </h1>

                  <p>
                    {" "}
                    Tenetur, incidunt quidem. Tenetur, incidunt quidem. Tenetur,
                    incidunt quidem. Tenetur, incidunt quidem. Tenetur, incidunt
                    quidem.
                  </p>
                  <div className="social">
                    <a href="">
                      <i class="fa-solid fa-star-half-stroke"></i>
                    </a>
                    <a href="">
                      <i class="fa-solid fa-star"></i>
                    </a>
                    <a href="">
                      <i class="fa-solid fa-star"></i>
                    </a>
                    <a href="">
                      <i class="fa-solid fa-star"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="grid-col">
                  <h1>
                    <img src="./../../src/Images/utilisateur2.jpeg" alt="" />
                    <span>Mr.Belem</span>
                    <br />
                  </h1>

                  <p>
                    {" "}
                    Tenetur, incidunt quidem. Tenetur, incidunt quidem. Tenetur,
                    incidunt quidem. Tenetur, incidunt quidem. Tenetur, incidunt
                    quidem.
                  </p>
                  <div className="social">
                    <a href="">
                      <i class="fa-solid fa-star-half-stroke"></i>
                    </a>
                    <a href="">
                      <i class="fa-solid fa-star"></i>
                    </a>
                    <a href="">
                      <i class="fa-solid fa-star"></i>
                    </a>
                    <a href="">
                      <i class="fa-solid fa-star"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="grid-col">
                  <h1>
                    <img src="./../../src/Images/utilisateur1.jpeg" alt="" />
                    <span>Mr.Belem</span>
                    <br />
                  </h1>

                  <p>
                    {" "}
                    Tenetur, incidunt quidem. Tenetur, incidunt quidem. Tenetur,
                    incidunt quidem. Tenetur, incidunt quidem. Tenetur, incidunt
                    quidem.
                  </p>
                  <div className="social">
                    <a href="">
                      <i class="fa-solid fa-star-half-stroke"></i>
                    </a>
                    <a href="">
                      <i class="fa-solid fa-star"></i>
                    </a>
                    <a href="">
                      <i class="fa-solid fa-star"></i>
                    </a>
                    <a href="">
                      <i class="fa-solid fa-star"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item active">
            <div class="cards">
              <div class="card">
                <div class="grid-col">
                  <h1>
                    <img src="./../../src/Images/utilisateur3.jpeg" alt="" />
                    <span>Mr.Belem</span>
                    <br />
                  </h1>

                  <p>
                    {" "}
                    Tenetur, incidunt quidem. Tenetur, incidunt quidem. Tenetur,
                    incidunt quidem. Tenetur, incidunt quidem. Tenetur, incidunt
                    quidem.
                  </p>
                  <div className="social">
                    <a href="">
                      <i class="fa-solid fa-star-half-stroke"></i>
                    </a>
                    <a href="">
                      <i class="fa-solid fa-star"></i>
                    </a>
                    <a href="">
                      <i class="fa-solid fa-star"></i>
                    </a>
                    <a href="">
                      <i class="fa-solid fa-star"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="grid-col">
                  <h1>
                    <img src="./../../src/Images/utilisateur2.jpeg" alt="" />
                    <span>Mr.Belem</span>
                    <br />
                  </h1>

                  <p>
                    {" "}
                    Tenetur, incidunt quidem. Tenetur, incidunt quidem. Tenetur,
                    incidunt quidem. Tenetur, incidunt quidem. Tenetur, incidunt
                    quidem.
                  </p>
                  <div className="social">
                    <a href="">
                      <i class="fa-solid fa-star-half-stroke"></i>
                    </a>
                    <a href="">
                      <i class="fa-solid fa-star"></i>
                    </a>
                    <a href="">
                      <i class="fa-solid fa-star"></i>
                    </a>
                    <a href="">
                      <i class="fa-solid fa-star"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="grid-col">
                  <h1>
                    <img src="./../../src/Images/utilisateur1.jpeg" alt="" />
                    <span>Mr.Belem</span>
                    <br />
                  </h1>

                  <p>
                    {" "}
                    Tenetur, incidunt quidem. Tenetur, incidunt quidem. Tenetur,
                    incidunt quidem. Tenetur, incidunt quidem. Tenetur, incidunt
                    quidem.
                  </p>
                  <div className="social">
                    <a href="">
                      <i class="fa-solid fa-star-half-stroke"></i>
                    </a>
                    <a href="">
                      <i class="fa-solid fa-star"></i>
                    </a>
                    <a href="">
                      <i class="fa-solid fa-star"></i>
                    </a>
                    <a href="">
                      <i class="fa-solid fa-star"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <Footer />
    </>
  );
}

export default Accueil;
