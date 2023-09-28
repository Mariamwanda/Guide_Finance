import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import logo from "../Images/logo.png";
import { apiUrl } from "../../Api/config/env";

function Enregistrement() {
  const [data, setData] = useState({
    nom: " ",
    email: "",
    motPasse: "",
    entreprise: "",
    date: "",
    select: "",
  });
  console.log(data);
  function handleChange(e) {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  }
  const { nom, email, motPasse, entreprise, date, select } = data;
  function submit() {
    const formData = {
      nom: nom,
      email: email,
      motPasse: motPasse,
      entreprise: entreprise,
      date: date,
      select: select,
    };
    console.log(formData);
    axios
      .post(`${apiUrl}/api/usersModels`, formData)
      .then((response) => {
        console.log("Réponse de l'API :", response.data);
        console.log(formData);
        setData({
          nom: "",
          email: "",
          motPasse: "",
          entreprise: "",
          date: "",
          select: "",
        });
      })
      .catch((error) => {
        console.error("Erreur lors de la soumission du formulaire :", error);
      });
  }

  return (
    <>
      <div className="container content">
        <div className="contentFirst">
          <div className="wrapper">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <div className="text-center mt-4 name">Enregistrement</div>
            <div className="form-field d-flex align-items-center">
              <span
                className="far fa-user"
                style={{ fontSize: "1.2rem", color: "#096a09" }}
              ></span>
              <input
                type="text"
                name="nom"
                onChange={(e) => {
                  handleChange(e);
                }}
                value={nom}
                placeholder="nom & prenom"
              />
            </div>
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
            <div className="form-field d-flex align-items-center">
              <span
                className="fa-solid fa-layer-group"
                style={{ fontSize: "1.2rem", color: "#096a09" }}
              ></span>

              <input
                type="text"
                name="entreprise"
                onChange={(e) => {
                  handleChange(e);
                }}
                value={entreprise}
                placeholder="nom entreprise"
              />
            </div>
            <div className="form-field d-flex align-items-center">
              <span
                className="fa-solid fa-calendar-days"
                style={{ fontSize: "1.2rem", color: "#096a09" }}
              ></span>

              <input
                type="datetime-local"
                name="date"
                onChange={(e) => {
                  handleChange(e);
                }}
                value={date}
                placeholder="date & time"
              />
            </div>
            <div className="form-group">
              <select
                id="selection"
                name="select"
                value={select}
                onChange={(e) => {
                  handleChange(e);
                }}
                className="form-control"
              >
                <option value="categorie">Categorie</option>
                <option value="privé">Privée</option>
                <option value="public">Public</option>
              </select>
            </div>
            <button className="btn mt-3" onClick={submit}>
              Inscris
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Enregistrement;
