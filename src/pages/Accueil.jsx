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
        <div className="container bar-progess">
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
      </div>
      <section className="container partenaire">
        <div className="container progessPater">
          <p>PARTENAIRES</p>
        </div>
        <div className="imgPart">
          <div>
            <img src="./../../src/Images/unif.png" alt="" />
            <p>dddede</p>
          </div>
          <div>
            <img src="./../../src/Images/unif.png" alt="" />
            <p>dddede</p>
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
      <section id="container contact" class="contact">
        <div class="section-heading text-center">
          <h2>Contactez Nous</h2>
        </div>
        <div class="container">
          <div class="container contact-content">
            <div class="container row">
              <div class="container col-md-offset-1 col-md-5 col-sm-6">
                <div class="container single-contact-box">
                  <div class="contact-form">
                    <form>
                      <div class="row">
                        <div class="col-sm-6 col-xs-12">
                          <div class="form-group">
                            <input
                              type="text"
                              class="form-control"
                              id="name"
                              placeholder="Name*"
                              name="name"
                            />
                          </div>
                        </div>
                        <div class="col-sm-6 col-xs-12">
                          <div class="form-group">
                            <input
                              type="email"
                              class="form-control"
                              id="email"
                              placeholder="Email*"
                              name="email"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-12">
                          <div class="form-group">
                            <input
                              type="text"
                              class="form-control"
                              id="subject"
                              placeholder="Subject"
                              name="subject"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-12">
                          <div class="form-group">
                            <textarea
                              class="form-control"
                              rows="8"
                              id="comment"
                              placeholder="Message"
                            ></textarea>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-12">
                          <div class="single-contact-btn">
                            <a class="contact-btn" href="#" role="button">
                              Envoyer
                            </a>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div class="col-md-offset-1 col-md-5 col-sm-6">
                <div class="single-contact-box">
                  <div class="contact-adress">
                    <div class="contact-add-head">
                      <h3>G_Finance</h3>
                      <p>Guide Finance</p>
                    </div>
                    <div class="contact-add-info">
                      <div class="single-contact-add-info">
                        <h3>Téléphone</h3>
                        <p>0575530518</p>
                      </div>
                      <div class="single-contact-add-info">
                        <h3>email</h3>
                        <p>mariamwandaogo7@gmail.com</p>
                      </div>
                      <div class="single-contact-add-info">
                        <h3>Ville</h3>
                        <p>Abidjan</p>
                      </div>
                    </div>
                  </div>
                  <div class="hm-foot-icon">
                    <ul>
                      <li>
                        <a href="#">
                          <i class="fa fa-whatsapp"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa fa-telegram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa fa-google"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Accueil;
