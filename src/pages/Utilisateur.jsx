import React, { useRef, useState } from "react";

function Utilisateur() {
 
    const nameRef = useRef(null);
  const emailRef = useRef(null);
  const cityRef = useRef(null);

  const [formData, setFormData] = useState([]);
  const [currentData, setCurrentData] = useState({
    name: "",
    email: "",
    city: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editedIndex, setEditedIndex] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentData({ ...currentData, [name]: value });
  };

  const handleAddData = () => {
    if (isEditing) {
      const updatedData = [...formData];
      updatedData[editedIndex] = currentData;
      setFormData(updatedData);

      setIsEditing(false);
      setEditedIndex(null);
    } else {
      // Sinon, ajoutez de nouvelles données
      setFormData([...formData, currentData]);
    }

    setCurrentData({ name: "", email: "", city: "" });

    // Effacez les champs de saisie après avoir ajouté les données
    nameRef.current.value = "";
    emailRef.current.value = "";
    cityRef.current.value = "";
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

  return(
    <>
    <div>
      <h1>Ajout d'Entreprise</h1>
      <div>
        <label htmlFor="name">Nom & prenom</label>
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
        <label htmlFor="city">Ville:</label>
        <input
          type="text"
          name="city"
          ref={cityRef}
          onChange={handleInputChange}
          value={currentData.city}
          id="city"
        />
      </div>
      <button onClick={handleAddData}>
        {isEditing ? "Enregistrer" : "Enregistrer"}
      </button>

      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Email</th>
            <th>Ville</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {formData.map((data, index) => (
            <tr key={index}>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.city}</td>
              <td>
                <button onClick={() => handleEditData(index)}>Modifier</button>
                <button onClick={() => handleDeleteData(index)}>
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  
    
    
    
    </>
  )
}

export default Utilisateur;
