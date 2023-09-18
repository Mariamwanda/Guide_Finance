import "./script.js";

function Enregistrement() {
  return (
    <>
      <div className="container cadre">
        <div className="Bleu">
          <form>
            <div class="container">
              <div className="class">
                <img src="./src/Images/logo.png" alt="" />
                <h1>Enregistrement</h1>
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

                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    id="entreprise"
                    placeholder="nom entreprise"
                  />
                </div>

                <div class="form-group">
                  <select id="selection" class="form-control">
                    <option value="">Categorie</option>
                    <option value="">Privée</option>
                    <option value="">Public</option>
                  </select>
                </div>
                <button id="showPopup" type="submit">Soumettre</button>
              </fieldset>
            </div>
          </form>
        </div>
      </div>

      <button id="showPopup">Afficher la popup</button>
      <div id="popup" class="popup">
        <div class="popup-content">
          <span class="close" id="closePopup">
            &times;
          </span>
          <h2>Popup Example</h2>
          <p>Ceci est un exemple de popup en HTML, CSS et JavaScript.</p>
        </div>
      </div>
    </>
  );
}

export default Enregistrement;
