const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  //   const errorMessages = {
  //     first: (errorFirst.innerHTML =
  //       "Veuillez entrer 2 caractères ou plus pour le champ du prénom"),
  //     last: (errorLast.innerHTML =
  //       "Veuillez entrer 2 caractères ou plus pour le champ du nom"),
  //     email: (errorMail.innerHTML = "Veuillez corriger votre adresse mail"),
  //     birthdate: (errorBirthdate.innerHTML =
  //       "Veuillez renseigner votre date de naissance"),
  //     location: (errorTournois.innerHTML =
  //       "Veuillez choisir le tournois auquel vous souhaitez participer"),
  //     CGeneral: (errorCGeneral.innerHTML =
  //       "Veuillez accepter nos conditions générales"),
  //   };

  console.log(spanError);

  // => Objet pour stocker les données du formulaire :

  // ##radioInputs :
  const radioInputs = document.querySelectorAll('input[type="radio"]');

  // ##formElement : All values
  const formElement = {
    first: "",
    last: "",
    email: "",
    birthdate: "",
    quantity: "",
    location: [radioInputs],
    CGeneral: true,
    futurTournois: false,
  };

  //console.log(inputChecked);
  console.log(radioInputs);
  console.log(location);

  // Parcourir chaque champ du formulaire
  form.querySelectorAll("input").forEach(function (champ) {
    // Stocker la valeur de chaque champ dans l'objet
    formElement[champ.name] = champ.value;
  });

  // variable permettant de stocker input checked
  let inputChecked = null;
  //trouver l'input checked
  radioInputs.forEach(function (input) {
    if (input.checked) {
      inputChecked = input.value;
      formElement.location = inputChecked;
      console.log(inputChecked);
      console.log(formElement);
    }
  });

  //console.log(formElement);
  //console.log(Object.keys(formElement));

  if (ctrlForm(formElement)) {
    console.log(formElement);
    // && radio(radioInputs)
    closeModal();
    afficherToast();
    reset();
  } else {
    //errorMessages();
    alertError();
  }
});

//function errorMessages() {} //errorFirst, errorLast, errorMail, errorBirthdate, errorQuantity, errorTournois, errorCGeneral

function reset() {
  document.getElementById("form").reset();
}

function afficherToast() {
  let toast = document.getElementById("toast");
  toast.classList.remove("hidden");
  toast.classList.add("show");

  setTimeout(function () {
    toast.classList.remove("show");
    toast.classList.add("hidden");
  }, 3000); // Affiche le toast pendant 3 secondes
}

function alertError() {
  let alert = document.getElementById("alert");
  alert.classList.remove("hidden");
  alert.classList.add("show");

  setTimeout(function () {
    alert.classList.remove("show");
    alert.classList.add("hidden");
  }, 3000); // Affiche le toast pendant 3 secondes
}

function ctrlForm(formElement) {
  //FIRST NAME
  if (formElement.first.length < 2) {
    console.log("erreur first");
    error = true;
  } else {
    error = false;
  }

  // LAST NAME
  if (formElement.last.length < 2) {
    error = true;
    console.log("erreur last");
  } else {
    error = false;
  }

  // MAIL
  if (
    !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formElement.email)
  ) {
    error = true;
    console.log("erreur mail");
  } else {
    error = false;
  }

  // BIRTHDATE
  if (isNaN(new Date(formElement.birthdate))) {
    error = true;
    console.log("erreur annif");
  } else {
    error = false;
  }

  // QUANTITY
  if (formElement.quantity === null && isNaN(formElement.quantity)) {
    console.log("erreur quantity value");
  }

  // RADIO BTN

  // CHECKBOX CONDITION GENERALE
  if (checkbox1.checked === true) {
    error = false;
  } else {
    error = true;
  }

  // CHECKBOX INFORMATION
  if (checkbox2.checked === true) {
    newEvent = true;
  } else if (checkbox2) {
    newEvent = false;
  }

  return true;
}
