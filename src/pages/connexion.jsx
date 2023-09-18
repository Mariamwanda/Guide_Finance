
function Connexion(){
    <div className="container cadre">
        <div className="Bleu">
          <form>
            <div class="container">
              <div className="class">
                <img src="./src/Images/logo.png" alt="" />
                <h1>Connexion</h1>
              </div>

              <fieldset>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    id="nom"
                    placeholder="nom & prenom"
                  />
                </div>

                <div class="form-group">
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="EmailEntreprise"
                  />
                </div>
                <button type="submit">connexion</button>
              </fieldset>
            </div>
          </form>
        </div>
      </div>



}

export default Connexion;