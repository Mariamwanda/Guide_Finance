import React, { useState } from "react";

function DashAdmin() {
  const [isComponentVisible, setComponentVisible] = useState(true);
  const toggleComponent = () => {
    setComponentVisible(!isComponentVisible);
  };

  return (
    <>
      <section>
        <div className="container-fluid">
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
                  <span className="title">Parametres</span>
                </a>
              </li>
              <li>
                <a href="">
                  <span className="icon">
                    <i className="fa-solid fa-check-double"></i>
                  </span>
                  <span className="title">Parametres</span>
                </a>
              </li>
              <li>
                <a href="">
                  <span className="icon">
                    <i className="fa-solid fa-check-double"></i>
                  </span>
                  <span className="title">Taches</span>
                </a>
              </li>

              <li>
                <a href="">
                  <span className="icon">
                    <i className="fa-sharp fa-solid fa-signal"></i>
                  </span>
                  <span className="title">Status</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="main">
            <div className="topbar">
              <div
                onClick={toggleComponent}
                className="toggle"
                
                style={{ visibility: "none" }}
              >
                <i className="fa-solid fa-bars"></i>
              </div>
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

            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-6" style={{ marginTop: "20px" }}>
                  <div className="card border-primary">
                    <div className="card-body bg-primary text-white">
                      <div className="row">
                        <div className="col-3">
                        <i className="fa-solid fa-business-time"></i>
                        </div>
                        <div className="col-9 text-right">
                          <h1>10</h1>
                          <h4>Branches</h4>
                        </div>
                      </div>
                    </div>
                    <a href="" target="_blank">
                      <div className="card-footer bg-light text-primary">
                        <span className="float-left">Voir plus</span>
                        <span className="float-right">
                          <i className="fa fa-arrow-circle-right"></i>
                        </span>
                        <div className="clearfix"></div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6" style={{ marginTop: "20px" }}>
                  <div className="card border-secondary">
                    <div className="card-body bg-secondary text-white">
                      <div className="row">
                        <div className="col-3">
                          <i className="fa fa-user-graduate fa-5x"></i>
                        </div>
                        <div className="col-9 text-right">
                          <h1>20</h1>
                          <h4>Students</h4>
                        </div>
                      </div>
                    </div>
                    <a href="" target="_blank">
                      <div className="card-footer bg-light text-secondary">
                        <span className="float-left">Voir plus</span>
                        <span className="float-right">
                          <i className="fa fa-arrow-circle-right"></i>
                        </span>
                        <div className="clearfix"></div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6" style={{ marginTop: "20px" }}>
                  <div className="card border-success">
                    <div className="card-body bg-success text-white">
                      <div className="row">
                        <div className="col-3">
                          <i className="fa fa-user-tie fa-5x"></i>
                        </div>
                        <div className="col-9 text-right">
                          <h1>50</h1>
                          <h4>Teachers</h4>
                        </div>
                      </div>
                    </div>
                    <a href="" target="_blank">
                      <div className="card-footer bg-light text-success">
                        <span className="float-left">Voir plus</span>
                        <span className="float-right">
                          <i className="fa fa-arrow-circle-right"></i>
                        </span>
                        <div className="clearfix"></div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="theme">
              <h1>Statistique:</h1>
            </div>
            <div className="Box">
              <div className="Boxcard">
                <h3>
                  <img src="./src/Images/statistic.jpeg" alt="" />
                  Bilan
                </h3>
              </div>
              <div className="Boxcard">
                <h3>
                  <img src="./src/Images/static.jpeg" alt="" />
                  Bilan
                </h3>
              </div>
              <div className="Boxcard">
                <h3>
                  <img src="./src/Images/statitic.jpeg" alt="" />
                  Bilan
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default DashAdmin;
