const form = document.getElementById("form");
const formulaireValid = {}; 
const toast = document.getElementById("toast");
// gestion des messages
const errorMessages = {
	first: "Veuillez entrer 2 caractères ou plus pour le champ du prénom",
	last: "Veuillez entrer 2 caractères ou plus pour le champ du nom",
	email: "Veuillez corriger votre adresse mail",
	location: "Veuillez choisir le tournois auquel vous souhaitez participer",
	quantity: "veuillez selectionnez une quantité",
	birthdate: "Vous devez être majeur pour pouvoir participer au tournois",
	CGeneral: "Veuillez accepter nos conditions générales",
};


// event submit
form.addEventListener("submit", event => {
    checkForm(event);
    delete formulaireValid['tournois']; 
    delete formulaireValid[''];
	// console.log('objet formulaireValid', formulaireValid);
    formulaireValid.validityFInale = Object.values(formulaireValid);
	// console.log('objet formulaieValid', formulaireValid);

     
    // console.log('tableau validityFInale', formulaireValid.validityFInale);
    if(!formulaireValid.validityFInale.some(bool => bool === false )){
        console.log("envoie du formulaire");
        closeModal();
        document.getElementById("form").reset();
        afficherToast();
	}
});
// event input, permet d'actualiser dynamiquement la validité de l'input
form.addEventListener("input", event => checkForm(event));

function checkForm(e) {
    e.preventDefault();
    // Récuperer tous les input, utiliser forEach car on a pas besoin de stocker les valeurs autrement utiliser map
	form.querySelectorAll("input").forEach((inputEl) => { checkInput(inputEl); });
    
	checkRadioButton();
	const conditonEl = document.getElementById('checkbox1');
    
	if(!conditonEl.checked){
        message(conditonEl, errorMessages[conditonEl.name])
        return formulaireValid[conditonEl.name] = false;
	}
	
	// Checker
    message(conditonEl, '');

}


function checkInput(inputEl) {
	if (inputEl.name === "first") {
		if(inputEl.value.length < 2){
			formulaireValid[inputEl.name] = false;
			return message(inputEl, errorMessages[inputEl.name]);
		}
	}

	if (inputEl.name === "last") {
		if(inputEl.value.length < 2){
			formulaireValid[inputEl.name] = false;
			return message(inputEl, errorMessages[inputEl.name]);
		}
	}
	if (inputEl.name === "email") {
		if((!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputEl.value))){
			formulaireValid[inputEl.name] = false;

			return message(inputEl, errorMessages[inputEl.name]);
		}
	}
	if (inputEl.name === "birthdate") {
		if(!age(inputEl.value)){
			formulaireValid[inputEl.name] = false;

			return message(inputEl, errorMessages[inputEl.name]);
		}
	}
	if (inputEl.name === "quantity") {
		if(inputEl.value < 0 || inputEl.value > 100 || !inputEl.value){
			formulaireValid[inputEl.name] = false;

			return message(inputEl, errorMessages[inputEl.name]);
		}
	}
			 message(inputEl, '');
			 return formulaireValid[inputEl.name] = true;
}


function message(inputEl, errorMessage) {
	const spanError = inputEl.parentElement.querySelector(".error-" + inputEl.name);
	if (spanError) {
		spanError.textContent = errorMessage;
	}
}

function checkRadioButton() {
	const firstRadioInputEl = document.querySelector('input[name="location"]');
	const radioCheked = document.querySelector('input[type="radio"]:checked');

	if (!radioCheked) {
		message(firstRadioInputEl, errorMessages[firstRadioInputEl.name]);
		formulaireValid[firstRadioInputEl.name] = false;
	}else{
		message(firstRadioInputEl, '');
		formulaireValid[firstRadioInputEl.name] = true;

	}
}

function age(dateInput) {
    const birthdate = new Date(dateInput)
    const dateToday = new Date();
    const age = dateToday.getFullYear() - birthdate.getFullYear();
    return age >= 18;
}

function afficherToast() {
    
    toast.classList.remove("hidden");
    toast.classList.add("show");

    setTimeout(function () {
      toast.classList.remove("show");
      toast.classList.add("hidden");
    }, 10000); // Affiche le toast pendant 5 secondes
  }

  function closeToast() {
    //const toast = document.getElementById("toast");
    toast.classList.remove("show");
    toast.classList.add("hidden");
  }


