import { Link } from "react-router-dom";
import React, { useState } from "react";

function Connexion() {
  const [email, setEmail] = useState("");
  const [motPasse, setmotPasse] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch("", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // La connexion a réussi, vous pouvez gérer la suite ici
        setMessage("Connexion réussie");
      } else {
        // La connexion a échoué
        setMessage(
          "La connexion a échoué. Veuillez vérifier vos informations."
        );
      }
    } catch (error) {
      console.error("Erreur de connexion :", error);
      setMessage("Une erreur s'est produite lors de la connexion.");
    }
  };

  return (
    <div className="container content">
      <div className="contentFirst">
        <div className="wrapper">
          <div className="logo">
            <img src="./src/Images/logo.png" alt="" />
          </div>
          <div className="text-center mt-4 name">Enregistrement</div>

          <div className="form-field d-flex align-items-center">
            <span
              className="fa-solid fa-layer-group"
              style={{ fontSize: "1.2rem", color: "#096a09" }}
            ></span>

            <input
              type="email"
              name="email"
              onChange={(e) => {
                handleChange(e);
              }}
              value={email}
              placeholder="EmailEntreprise"
            />
          </div>
          <div className="form-field d-flex align-items-center">
            <span
              className="fa-solid fa-key"
              style={{ fontSize: "1.2rem", color: "#096a09" }}
            ></span>

            <input
              type="password"
              name="motPasse"
              onChange={(e) => {
                handleChange(e);
              }}
              value={motPasse}
              placeholder="mot passe"
            />
          </div>
          <button className="btn mt-3" onClick={submit}>
            Inscris
          </button>
          <div className="text-center fs-6">
            <Link to="/connexion">j'ai pas de compte?</Link>
            <a href="#">
              <span>Connexion</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Connexion;
