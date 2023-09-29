import { Link } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import logo from "../Images/logo.png";
import "./connexion.css";
import { apiUrl } from "../../Api/config/env";

function Connexion() {
  const [data, setData] = useState({
    email: "",
    motPasse: "",
  });
  console.log(data);
  function handleChange(e) {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  }
  const { email, motPasse} = data;
  function submit() {
    const formData = {
      email: email,
      motPasse: motPasse,
    };
    console.log(formData);
    axios
      .post(`${apiUrl}/api/usersLogin`, formData)
      .then((response) => {
        console.log("Réponse de l'API :", response.data);
        console.log(formData);
        setData({
          email: "",
          motPasse: "",
        });
      })
      .catch((error) => {
        console.error("erreur sur l'utilisateur:", error);
      });
  }

  return (
    <div className="container content">
      <div className="Contour">
        <div className="interieur">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <h1>Connexion</h1>

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
          <p className="text-center" style={{ fontSize: "25px" }}>
            j'ai pas de compte?
            <Link to="/enregistrement" style={{ textDecoration: "none" }}>
              <span> inscris</span>
            </Link>
          </p>
          <button className="btn mt-3" onClick={submit}>
            Connexion
          </button>
        </div>
      </div>
    </div>
  );
}

export default Connexion;
