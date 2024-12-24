const prenom = document.getElementById("firstName");
const nom = document.getElementById("lastName");
const email = document.getElementById("email");
const PW = document.getElementById("password");
const confirmPW  = document.getElementById("confirmpassword");
const genre = document.getElementById("gender");
const pays = document.getElementById("country");
let btn = document.getElementById("btn");

btn.addEventListener("click",verif);

function verif() {
    clearErrors();
    let hasErrors = false;

    if (prenom.value.trim() === "") {
        showError(prenom, "Erreur : prenon requis. ");
        hasError = true;
    }

    if (nom.value.trim() === "") {
        showError(nom, "Erreur : nom requis. ");
        hasError = true;
    }

    const emailpattern = /^[^\s@]+@[^\s@]+\[^\s@]+$/;
    if (!emailpattern.test(email.value.trim())) {
        showError(email, "erreur : email invalide.");
        hasErrors = true;
    }

    if (PW.value.trim() === "") {
        showError(PW, "Erreur : mot de passe requis. ");
        hasError = true;
    } 
    if (confirmPW.value.trim() === "") {
        showError(confirmPW, "Erreur : confirmation requis. ");
        hasError = true;
    } else if (PW.value !== confirmPW.value) {
        showError(confirmPW, "erreur : les mots de passe ne correspondent pas.");
        hasError = true;
    }
    if (!hasError) {
        alert("Inscription reussie !");   
    }
}

function showError(inputField, message){
    const errorMessage = document.createElement("p");
    errorMessage.style.color = "red";
    errorMessage.textContent = message;
    inputField.parentNode.insertBefore(errorMessage, inputField.nextSibling);
}

function clearErrors() {
    const errorMessages = document.querySelectorAll("p");
    errorMessages.forEach((msg) => msg.remove());
}