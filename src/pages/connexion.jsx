import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Connexion() {
  const [email, setEmail] = useState("");
  const [motPasse, setMotPasse] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const handleLogin = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    fetch("http://localhost:3000/api/data")
      .then((response) => response.json())
      .then((data) => {
        setEmail(data.email);
        setMotPasse(data.motPasse);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Erreur :", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <div className="container Connexion">
        <div className="contentFirst">
          <div className="cadre">
            <div className="logo">
              <img src="./src/Images/logo.png" alt="" />
            </div>
            <div className="text-center mt-4 name">Connexion</div>

            <div className="form-field d-flex align-items-center">
              <span
                className="fa-regular fa-envelope"
                style={{ fontSize: "1.6rem", color: "#096a09" }}
              ></span>
              <input type="email" name="email" id="email" placeholder="email" />
            </div>
            <div className="form-field d-flex align-items-center">
              <span
                className="fa-solid fa-key"
                style={{ fontSize: "1.5rem", color: "#096a09" }}
              ></span>

              <input
                type="password"
                name="password"
                id="pwd"
                placeholder="Password"
              />
            </div>
            <button className="btn mt-3">Connexion</button>

            <div className="text-center fs-6">
              <a href="#">Mot de passe oublié?</a>
              <Link to="/users" className="link">
                <span> Inscription</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Connexion;
