import React, { useRef, useState } from "react";
import Sidebar from "../Components/Sidebar";
import Topbar from "../Components/Topbar";
import "./entreprise.css";

function Utilisateur() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const kindRef = useRef(null);
  const yearRef = useRef(null);

  const [formData, setFormData] = useState([]);
  const [currentData, setCurrentData] = useState({
    name: "",
    email: "",
    kind: "",
    year: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editedIndex, setEditedIndex] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentData({ ...currentData, [name]: value });
  };

  const handleAddData = (e) => {
    e.preventDefault();
    if (isEditing) {
      const updatedData = [...formData];
      updatedData[editedIndex] = currentData;
      setFormData(updatedData);

      setIsEditing(false);
      setEditedIndex(null);
    } else {
      setFormData([...formData, currentData]);
    }

    nameRef.current.value = "";
    emailRef.current.value = "";
    kindRef.current.value = "";
    yearRef.current.value = "";
  };

  const handleEditData = (index) => {
    setIsEditing(true);
    setEditedIndex(index);

    setCurrentData(formData[index]);

    window.scrollTo(0, 0);
  };

  const handleDeleteData = (index) => {
    const updatedData = [...formData];
    updatedData.splice(index, 1);
    setFormData(updatedData);
  };

  return (
    <>
      <div class="container-fluid section">
        <Sidebar />
        <main class="main-content">
          <Topbar />
          <div className="formulaire">
            <div className="titre">
              <h1>Ajout d'Entreprise</h1>
            </div>
            <form action="">
              <div>
                <label htmlFor="name">Nom & prenom</label>
                <br />
                <input
                  type="text"
                  name="name"
                  ref={nameRef}
                  onChange={handleInputChange}
                  value={currentData.name}
                  id="name"
                />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <br />
                <input
                  type="text"
                  name="email"
                  ref={emailRef}
                  onChange={handleInputChange}
                  value={currentData.email}
                  id="email"
                />
              </div>
              <div>
                <label htmlFor="kind">Type:</label>
                <br />
                <input
                  type="text"
                  name="kind"
                  ref={kindRef}
                  onChange={handleInputChange}
                  value={currentData.city}
                  id="kind"
                />
              </div>

              <button onClick={handleAddData}>
                {isEditing ? "Enregistrer" : "Enregistrer"}
              </button>
            </form>
            <div>
              <h1>Entreprise:</h1>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Nom</th>
                  <th>Email</th>
                  <th>Type</th>
                  <th>Année</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {formData.map((data, index) => (
                  <tr key={index}>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.kind}</td>
                    <td>{data.year}</td>
                    <td>{data.city}</td>
                    <td>
                      <button onClick={() => handleEditData(index)}>
                        Modifier
                      </button>
                      <button onClick={() => handleDeleteData(index)}>
                        Supprimer
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </>
  );
}

export default Utilisateur;
