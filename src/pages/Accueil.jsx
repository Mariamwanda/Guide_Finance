import Navbar from "../pages/Navbar.jsx";
import "../App.css";

import Footer from "../Components/footer";
import apropos from "../Images/apropos.webp";
import finance2 from "../Images/finance2.jpeg";
import fiance from "../Images/fiance.jpeg";
import finances1 from "../Images/finances1.webp";
import img2 from "../Images/img2.jpeg";
import img1 from "../Images/img1.jpeg";
import unif from "../Images/unif.png";
import atlaOK from "../Images/atlaOK.png";
import utilisateur1 from "../Images/utilisateur1.jpeg";
import utilisateur3 from "../Images/utilisateur3.jpeg";
import utilisateur2 from "../Images/utilisateur2.jpeg";

function Accueil() {
  return (
    <>
      <Navbar />
      <div className="banniere">
        <div className="container">
          <div className="row h-100 align-items-center">
            <div className="flotant">
              <h1 className="fw-light">
                <span>G</span>_<span>F</span>inance,
              </h1>

              <p className="lead">
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
        <section className="py-5 apropos">
          <div className="img-fluid">
            <img src={apropos} alt="" />
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
        <div className="blocks">
          <div className="block">
            <div className="grid-col">
              <img src={finance2} alt="" />
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
          <div className="block">
            <div className="grid-col">
              <img src={fiance} alt="" />
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
          <div className="block">
            <div className="grid-col">
              <img src={finances1} alt="" />
              <h1>Motivation</h1>
              <p>
                {" "}
                La finance est l'art de faire passer l'argent de mains en mains
                jusqu'à ce qu'il ait disparu.
              </p>
            </div>
          </div>
          <div className="block">
            <div className="grid-col">
              <img src={img2} alt="" />
              <h1>Financement</h1>
              <p>
                {" "}
                La finance est l'art de faire passer l'argent de mains en mains
                jusqu'à ce qu'il ait disparu.
              </p>
            </div>
          </div>
          <div className="block">
            <div className="grid-col">
              <img src={img1} alt="" />
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
            <img src={unif} alt="" />
            <p>UNICEF</p>
          </div>
          <div>
            <img src={atlaOK} alt="" />
            <p>ATLANTA</p>
          </div>
          <div>
            <img src={unif} alt="" />
            <p>dddede</p>
          </div>
          <div>
            <img src={unif} alt="" />
            <p>dddede</p>
          </div>
        </div>
      </section>
      <div
        id="carouselExampleCaptions"
        className="container carousel slide"
        data-bs-ride="carousel"
      >
        <h2>Nos Avis..</h2>
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
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
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="cards">
              <div className="card">
                <div className="grid-col">
                  <h1>
                    <img src={utilisateur3} alt="" />
                    <span>Mr.Belem</span>
                    <br />
                  </h1>

                  <p>
                    {" "}
                    « Promouvoir une Afrique climato-intelligente, résiliente,
                    inclusive, et intégrée »
                  </p>
                  <div className="social">
                    <a href="">
                      <i className="fa-solid fa-star-half-stroke"></i>
                    </a>
                    <a href="">
                      <i className="fa-solid fa-star"></i>
                    </a>
                    <a href="">
                      <i className="fa-solid fa-star"></i>
                    </a>
                    <a href="">
                      <i className="fa-solid fa-star"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="grid-col">
                  <h1>
                    <img src={utilisateur2} alt="" />
                    <span>Mme.Noelle</span>
                    <br />
                  </h1>

                  <p>
                    {" "}
                    Notre rencontre annuelle intervient dans un contexte marqué
                    par l’expansion de l’économie mondiale.
                  </p>
                  <div className="social">
                    <a href="">
                      <i className="fa-solid fa-star-half-stroke"></i>
                    </a>
                    <a href="">
                      <i className="fa-solid fa-star"></i>
                    </a>
                    <a href="">
                      <i className="fa-solid fa-star"></i>
                    </a>
                    <a href="">
                      <i className="fa-solid fa-star"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="grid-col">
                  <h1>
                    <img src={utilisateur1} alt="" />
                    <span>Mr.Konan</span>
                    <br />
                  </h1>

                  <p>
                    {" "}
                    Ces réalisations et la côte de confiance dont jouit notre
                    Banque auprès des institutions de financement du
                    développement.
                  </p>
                  <div className="social">
                    <a href="">
                      <i className="fa-solid fa-star-half-stroke"></i>
                    </a>
                    <a href="">
                      <i className="fa-solid fa-star"></i>
                    </a>
                    <a href="">
                      <i className="fa-solid fa-star"></i>
                    </a>
                    <a href="">
                      <i className="fa-solid fa-star"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item active">
            <div className="cards">
              <div className="card">
                <div className="grid-col">
                  <h1>
                    <img src={utilisateur3} alt="" />
                    <span>Mr.Belem</span>
                    <br />
                  </h1>

                  <p>
                    {" "}
                    « Promouvoir une Afrique climato-intelligente, résiliente,
                    inclusive, et intégrée »
                  </p>
                  <div className="social">
                    <a href="">
                      <i className="fa-solid fa-star-half-stroke"></i>
                    </a>
                    <a href="">
                      <i className="fa-solid fa-star"></i>
                    </a>
                    <a href="">
                      <i className="fa-solid fa-star"></i>
                    </a>
                    <a href="">
                      <i className="fa-solid fa-star"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="grid-col">
                  <h1>
                    <img src={utilisateur2} alt="" />
                    <span>Mme.Noelle</span>
                    <br />
                  </h1>

                  <p>
                    {" "}
                    Notre rencontre annuelle intervient dans un contexte marqué
                    par l’expansion de l’économie mondiale.
                  </p>
                  <div className="social">
                    <a href="">
                      <i className="fa-solid fa-star-half-stroke"></i>
                    </a>
                    <a href="">
                      <i className="fa-solid fa-star"></i>
                    </a>
                    <a href="">
                      <i className="fa-solid fa-star"></i>
                    </a>
                    <a href="">
                      <i className="fa-solid fa-star"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="grid-col">
                  <h1>
                    <img src={utilisateur1} alt="" />
                    <span>Mr.Konan</span>
                    <br />
                  </h1>

                  <p>
                    {" "}
                    Ces réalisations et la côte de confiance dont jouit notre
                    Banque auprès des institutions de financement du
                    développement.
                  </p>
                  <div className="social">
                    <a href="">
                      <i className="fa-solid fa-star-half-stroke"></i>
                    </a>
                    <a href="">
                      <i className="fa-solid fa-star"></i>
                    </a>
                    <a href="">
                      <i className="fa-solid fa-star"></i>
                    </a>
                    <a href="">
                      <i className="fa-solid fa-star"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item active">
            <div className="cards">
              <div className="card">
                <div className="grid-col">
                  <h1>
                    <img src={utilisateur3} alt="" />
                    <span>Mr.Belem</span>
                    <br />
                  </h1>

                  <p>
                    {" "}
                    « Promouvoir une Afrique climato-intelligente, résiliente,
                    inclusive, et intégrée »
                  </p>
                  <div className="social">
                    <a href="">
                      <i className="fa-solid fa-star-half-stroke"></i>
                    </a>
                    <a href="">
                      <i className="fa-solid fa-star"></i>
                    </a>
                    <a href="">
                      <i className="fa-solid fa-star"></i>
                    </a>
                    <a href="">
                      <i className="fa-solid fa-star"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="grid-col">
                  <h1>
                    <img src={utilisateur2} alt="" />
                    <span>Mme.Noelle</span>
                    <br />
                  </h1>

                  <p>
                    {" "}
                    Notre rencontre annuelle intervient dans un contexte marqué
                    par l’expansion de l’économie mondiale.
                  </p>
                  <div className="social">
                    <a href="">
                      <i className="fa-solid fa-star-half-stroke"></i>
                    </a>
                    <a href="">
                      <i className="fa-solid fa-star"></i>
                    </a>
                    <a href="">
                      <i className="fa-solid fa-star"></i>
                    </a>
                    <a href="">
                      <i className="fa-solid fa-star"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="grid-col">
                  <h1>
                    <img src={utilisateur1} alt="" />
                    <span>Mr.Konan</span>
                    <br />
                  </h1>

                  <p>
                    {" "}
                    Ces réalisations et la côte de confiance dont jouit notre
                    Banque auprès des institutions de financement du
                    développement.
                  </p>
                  <div className="social">
                    <a href="">
                      <i className="fa-solid fa-star-half-stroke"></i>
                    </a>
                    <a href="">
                      <i className="fa-solid fa-star"></i>
                    </a>
                    <a href="">
                      <i className="fa-solid fa-star"></i>
                    </a>
                    <a href="">
                      <i className="fa-solid fa-star"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Precédent</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Suivant</span>
        </button>
      </div>
      <div className="contact container">
        <section id="joindre">
          <h2 className="h1-responsive font-weight-bold text-center my-4">
            Contactez-Nous.
          </h2>
          <div className="row">
            <div className="col-md-9 mb-md-0 mb-5">
              <form
                id="contact-form"
                name="contact-form"
                action="mail.php"
                method="POST"
              >
                <div className="row">
                  <div className="col-md-12">
                    <div className="md-form mb-0">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                      />
                      <label htmlFor="subject" className="">
                        Email
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="md-form mb-0">
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="form-control"
                      />
                      <label htmlFor="subject" className="">
                        Object
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="md-form">
                      <textarea
                        type="text"
                        id="message"
                        name="message"
                        rows="2"
                        className="form-control md-textarea"
                      ></textarea>
                      <label htmlFor="message">Votre message</label>
                    </div>
                  </div>
                </div>
              </form>
              <div className="text-center text-md-left">
                <a className="btn">Envoyer</a>
              </div>
              <div className="status"></div>
            </div>

            <div className="col-md-3 text-center">
              <ul className="list-unstyled mb-0">
                <li>
                  <i className="fas fa-map-marker-alt fa-2x"></i>
                  <p>Abidjan,Cote d'Ivoire</p>
                </li>

                <li>
                  <i className="fas fa-phone mt-4 fa-2x"></i>
                  <p>05 75530518</p>
                </li>

                <li>
                  <i className="fas fa-envelope mt-4 fa-2x"></i>
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
