import React, { useState } from "react";

function EntrepriseDash() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const handleLogout = () => {
    // Mettez à jour l'état de connexion pour déconnecter l'utilisateur
    setIsAuthenticated(false);

    window.location.href = "/";
    window.location.href = "/EntrepriseDash";
  };

  return (
    <div className="dashboard">
      {isAuthenticated ? (
        <>
          <div className="navigation .active">
            <ul>
              <li>
                <a href="">
                  <span className="icon">
                    <img src="./src/images/logo.png" alt="" />
                  </span>
                  <span className="title">Admin</span>
                </a>
              </li>

              <li>
                <a href="">
                  <span className="icon">
                    <i className="fa-solid fa-gear"></i>
                  </span>
                  <span className="title">Transactions</span>
                </a>
              </li>
              <li>
                <a href="">
                  <span className="icon">
                    <i className="fa-solid fa-check-double"></i>
                  </span>
                  <span className="title"></span>
                </a>
              </li>
              <li>
                <a href="">
                  <span className="icon">
                    <i className="fa-solid fa-check-double"></i>
                  </span>
                  <span className="title">Statistiques</span>
                </a>
              </li>

              <li>
                <a href="">
                  <span className="icon">
                    <i className="fa-sharp fa-solid fa-signal"></i>
                  </span>
                  <span className="title">Entreprises</span>
                </a>
              </li>

              <div className="deconnexion">
                <span onClick={handleLogout} className="title">
                  <i className="fa-solid fa-right-to-bracket"></i> Déconnexion
                </span>
              </div>
            </ul>
          </div>
          <div className="main">
            <div className="topbar">
              <div
              // onClick={toggleComponent}
              // className="toggle"
              // class="toggle"
              // style={{ visibility: "none" }}
              ></div>
              {/* {isComponentVisible && (
                <div className="component-to-toggle">
                  <div class="navigation .active"></div>
                </div>
              )} */}
              <div className="search">
                <label>
                  <input type="text" placeholder="recherche..." />
                  <i className="fa-solid fa-magnifying-glass"></i>
                </label>
              </div>
              <div className="user">
                <img src="./src/images/utilisateur1.jpeg" alt="" />
              </div>
            </div>
            <div className="cardBox">
              <div className="card">
                <div>
                  <div className="cardName"></div>
                  <div className="numbers"></div>
                </div>
                <div className="iconBox">
                  <i className=""></i>
                </div>
              </div>
              <div className="card">
                <div>
                  <div className="cardName"></div>
                  <div className="numbers"></div>
                </div>
                <div className="iconBox">
                  <i className=""></i>
                </div>
              </div>
              <div className="card">
                <div>
                  <div className="cardName"></div>
                  <div className="numbers"></div>
                </div>
                <div className="iconBox">
                  <i className=""></i>
                </div>
              </div>
              <div className="card">
                <div>
                  <div className="cardName"></div>
                  <div className="numbers"></div>
                </div>
                <div className="iconBox">
                  <i className=""></i>
                </div>
              </div>
            </div>
            <div className="container h-100">
              <div className="d-flex justify-content-center">
                <div className="card mt-5 col-md-4 animated bounceInDown myForm">
                  <div className="card-header">
                    <h4>Ajout de depenses</h4>
                  </div>
                  <div className="card-body">
                    <form>
                      <div id="dynamic_container">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text br-15">
                              <i className="fas fa-user-graduate"></i>
                            </span>
                          </div>
                          <input
                            type="text"
                            placeholder="taches"
                            className="form-control"
                          />
                        </div>
                        <div className="input-group mt-3">
                          <div className="input-group-prepend">
                            <span className="input-group-text br-15">
                              <i className="fas fa-phone-square"></i>
                            </span>
                          </div>
                          <input
                            type="text"
                            placeholder="type"
                            className="form-control"
                          />
                        </div>
                        <div className="input-group mt-3">
                          <div className="input-group-prepend">
                            <span className="input-group-text br-15">
                              <i className="fas fa-at"></i>
                            </span>
                          </div>
                          <input
                            type="email"
                            placeholder="Student Email"
                            className="form-control"
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="card-footer">
                    <a className="btn btn-secondary btn-sm" id="add_more">
                      <i className="fas fa-plus-circle"></i> Add
                    </a>
                    <a className="btn btn-secondary btn-sm" id="remove_more">
                      <i className="fas fa-trash-alt"></i> Remove
                    </a>
                    <button className="btn btn-success btn-sm float-right submit_btn">
                      <i className="fas fa-arrow-alt-circle-right"></i> Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
export default EntrepriseDash;
