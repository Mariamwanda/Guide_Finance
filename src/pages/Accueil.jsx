import "./script.js";
import Navbar from "./Navbar.jsx";

import Footer from "../Components/footer";

function Accueil() {
  return (
    <>
      <Navbar />
      <div className="banniere">
        <div class="container">
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
      </div>

      <div id="Apropos">
        <div className="container-fluid  bar-progess">
          <div className="container">
            <p>A PROPOS DE NOUS...</p>
          </div>
        </div>

        <section class="py-5 apropos">
          <div className="img-fluid">
            <img src="./../../src/Images/apropos.webp" alt="" />
          </div>
          <div className="text-fluid">
            <h1>Tout sur Nous</h1>
            <p>
              « Lorsqu'on parle d'indices qui baissent de plus de 10% <br />
              par rapport à leur sommet, c'est une situation assez importante.{" "}
              <br />
              C'est quelque chose qu'on prend au sérieux et non pas seulement
              <br /> un phénomène passager »
            </p>
            <p>
              La finance est l'art de faire passer l'argent de mains en mains
              jusqu'à ce qu'il ait disparu.” “La finance, c'est la mort de
              l'économie.” “Les champions de la finance sont comme les perles
              d'un collier - quand l'une d'elles tombe, les autres suivent.” “La
              finance est une arme.
            </p>
            <p>
              <button>En Savoir plus...</button>
            </p>
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
                La finance est l'art de faire passer l'argent de mains en mains
              jusqu'à ce qu'il ait disparu.
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
                La finance est l'art de faire passer l'argent de mains en mains
              jusqu'à ce qu'il ait disparu.
              </p>
            </div>
          </div>
          <div class="block">
            <div class="grid-col">
              <img src="./../../src/Images/finances1.webp" alt="" />
              <h1>Motivation</h1>
              <p>
                {" "}
                La finance est l'art de faire passer l'argent de mains en mains
              jusqu'à ce qu'il ait disparu.
              </p>
            </div>
          </div>
          <div class="block">
            <div class="grid-col">
              <img src="./../../src/Images/img2.jpeg" alt="" />
              <h1>Financement</h1>
              <p>
                {" "}
                La finance est l'art de faire passer l'argent de mains en mains
              jusqu'à ce qu'il ait disparu.
              </p>
            </div>
          </div>
          <div class="block">
            <div class="grid-col">
              <img src="./../../src/Images/img1.jpeg" alt="" />
              <h1>Conseil</h1>
              <p>
                {" "}
                La finance est l'art de faire passer l'argent de mains en mains
              jusqu'à ce qu'il ait disparu.
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
                    « Promouvoir une Afrique climato-intelligente,
                    résiliente, inclusive, et intégrée »
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
                    <span>Mme.Noelle</span>
                    <br />
                  </h1>

                  <p>
                    {" "}
                    Notre rencontre annuelle intervient dans un contexte marqué par
                    l’expansion de l’économie mondiale.
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
                    <span>Mr.Konan</span>
                    <br />
                  </h1>

                  <p>
                    {" "}
                    Ces réalisations et la côte de confiance dont jouit notre Banque auprès
                    des institutions de financement du développement.
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
                    « Promouvoir une Afrique climato-intelligente,
                    résiliente, inclusive, et intégrée »
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
                    <span>Mme.Noelle</span>
                    <br />
                  </h1>

                  <p>
                    {" "}
                    Notre rencontre annuelle intervient dans un contexte marqué par
                    l’expansion de l’économie mondiale.
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
                    <span>Mr.Konan</span>
                    <br />
                  </h1>

                  <p>
                    {" "}
                    Ces réalisations et la côte de confiance dont jouit notre Banque auprès
                    des institutions de financement du développement.
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
                    « Promouvoir une Afrique climato-intelligente,
                    résiliente, inclusive, et intégrée »
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
                    <span>Mme.Noelle</span>
                    <br />
                  </h1>

                  <p>
                    {" "}
                    Notre rencontre annuelle intervient dans un contexte marqué par
                    l’expansion de l’économie mondiale.
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
                    <span>Mr.Konan</span>
                    <br />
                  </h1>

                  <p>
                    {" "}
                    Ces réalisations et la côte de confiance dont jouit notre Banque auprès
                    des institutions de financement du développement.
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
          <span class="visually-hidden">Precédent</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Suivant</span>
        </button>
      </div>
      <div class="contact container">
        <section id="joindre">
          <h2 class="h1-responsive font-weight-bold text-center my-4">
            Contactez-Nous.
          </h2>
          <div class="row">
            <div class="col-md-9 mb-md-0 mb-5">
              <form
                id="contact-form"
                name="contact-form"
                action="mail.php"
                method="POST"
              >
                <div class="row">
                  <div class="col-md-12">
                    <div class="md-form mb-0">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        class="form-control"
                      />
                      <label for="subject" class="">
                        Email
                      </label>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <div class="md-form mb-0">
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        class="form-control"
                      />
                      <label for="subject" class="">
                        Object
                      </label>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <div class="md-form">
                      <textarea
                        type="text"
                        id="message"
                        name="message"
                        rows="2"
                        class="form-control md-textarea"
                      ></textarea>
                      <label for="message">Votre message</label>
                    </div>
                  </div>
                </div>
              </form>
              <div class="text-center text-md-left">
                <a
                  class="btn"
                  onclick="document.getElementById('contact-form').submit();"
                >
                  Envoyer
                </a>
              </div>
              <div class="status"></div>
            </div>

            <div class="col-md-3 text-center">
              <ul class="list-unstyled mb-0">
                <li>
                  <i class="fas fa-map-marker-alt fa-2x"></i>
                  <p>Abidjan,Cote d'Ivoire</p>
                </li>

                <li>
                  <i class="fas fa-phone mt-4 fa-2x"></i>
                  <p>05 75530518</p>
                </li>

                <li>
                  <i class="fas fa-envelope mt-4 fa-2x"></i>
                  <p>mariamwandaogo7@gmail.com</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default Accueil;
