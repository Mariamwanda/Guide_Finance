import Utilisateur from "./Utilisateur";

createRoot(<Utilisateur />, document.getElementById("app"));


// Sélectionnez l'élément input par son ID
const inputField = document.getElementById('inputField');
const submitButton = document.getElementById('submitButton');

// Attachez un gestionnaire d'événements au bouton Submit
submitButton.addEventListener('click', () => {
    // Vérifiez d'abord si l'élément input existe
    if (inputField) {
        // Accédez à la propriété 'value' de l'élément input
        const inputValue = inputField.value;
        console.log('Valeur du champ de texte : ' + inputValue);
    } else {
        console.log("L'élément input n'existe pas.");
    }
});