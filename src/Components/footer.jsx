import "./../pages/style.css";
function Footer() {
  return (
    <>
      <div className="footer-dark">
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-3 item">
                <h3>Objectifs</h3>
                <ul>
                  <li>
                    <a href="/#">Services</a>
                  </li>
                  <li>
                    <a href="/#">Accompagnement</a>
                  </li>
                  <li>
                    <a href="/#">Assurance</a>
                  </li>
                  <li>
                    <a href="/#">Quarantie</a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-6 col-md-3 item">
                <h3>Services</h3>
                <ul>
                  <li>
                    <a href="/#">Accueil</a>
                  </li>
                  <li>
                    <a href="/#">Apropos</a>
                  </li>
                  <li>
                    <a href="">Contact</a>
                  </li>
                  <li>
                    <a href="/#">Connexion</a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-6 col-md-3 item bulletin">
                <h3>Bulletin</h3>
                <h6 href="/#" style={{ fontSize: "20px" }}>
                  Entrez votre mail?
                </h6>{" "}
                <br />
                <div className="col d-flex">
                  <input type="text" placeholder="ecrit..." />{" "}
                  <button classNameName="btn-outline">Envoyer</button>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
                <ul class="list-unstyled list-inline social text-center">
                  <li class="list-inline-item"></li>
                  <li class="list-inline-item">
                    <a href="" target="_blank">
                      <i class="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="" target="_blank">
                      <i class="fa-brands fa-facebook-messenger"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="" target="_blank">
                      <i class="fa-brands fa-whatsapp"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="" target="_blank">
                    <i class="fa-brands fa-google"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="footer">
                <p style={{ color: "white" }}>
                  &copy; 2023 MariamWandaogo.{" "}
                  <span style={{ color: "#65ff65" }}>G_Finance</span>
                </p>
              </div>
              <hr />
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
