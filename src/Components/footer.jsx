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
                    <a href="/#">Quarantie</a>
                  </li>
                  <li>
                    <a href="/#">impeccable</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 item text">
                <h3>Services</h3>
                <p>
                  « Si vous souhaitez connaître l'âge du monde, regardez la
                  surface de la mer dans la tempête. » « Il ne faut pas lier un
                  navire à une seule ancre, ni une vie à un seul espoir.» «Si
                  les pétroliers transportaient de l'eau de mer, on s'en
                  foutrait qu'ils fassent naufrage.»
                </p>
              </div>
              <div className="col-sm-6 col-md-3 item bulletin">
                <h3>Bulletin</h3>
                <p href="/#" style={{ fontSize: "20px" }}>
                  Entrez votre mail?
                </p>{" "}
                <br />
                <div className="col d-flex">
                  <input type="text" placeholder="ecrit..." />{" "}
                  <button classNameName="btn-outline">Envoyer</button>
                </div>
              </div>
              <div classNameName="col item social">
                <a href="#">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="#">
                  <i className="bi bi-snapchat"></i>
                </a>
                <a href="#">
                  <i className="bi bi-instagram"></i>
                </a>
              </div>
            </div>
            © G_Finance.
            <a class="text-green ml-2" href="" target="_blank">
              MariamWanda
            </a>
            <div class="row">
				<div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
					<ul class="list-unstyled list-inline social text-center">
						<li class="list-inline-item"><a href=""><i class="fa fa-facebook"></i></a></li>
						<li class="list-inline-item"><a href=""><i class="fa fa-twitter"></i></a></li>
						<li class="list-inline-item"><a href=""><i class="fa fa-instagram"></i></a></li>
						<li class="list-inline-item"><a href=""><i class="fa fa-google-plus"></i></a></li>
						<li class="list-inline-item"><a href="" target="_blank"><i class="fa fa-envelope"></i></a></li>
					</ul>
				</div>
				<hr/>
			</div>	
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
