//import closeModal from "./modal";

const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  // => Objet pour stocker les données du formulaire :
  // ##input : All values
  //const input = {};

  // Parcourir chaque champ du formulaire
  form.querySelectorAll("input").forEach((input) => {
    ctrlForm(input);
  });

  // const radioChecked = document.querySelector('input[type="radio"]:checked');
  // if (!radioChecked) {
  // } else {
  //   console.log("radio ", radioChecked);
  //   document.querySelector("#errorTournois").innerHTML = "";
  // }
});

function ctrlForm(input) {
  const radioChecked = document.querySelector('input[type="radio"]:checked');

  //console.log(input.value.length);
  //FIRST NAME
  if (input.name === "first" && input.value.length < 2) {
    console.log("erreur first");
    errorFirst = true;
  } else {
    errorFirst = false;
    //document.querySelector("#errorFirst").innerHTML = "";
  }

  // LAST NAME
  if (input.name === "last" && input.value.length < 2) {
    console.log("erreur last");
    errorLast = true;
  } else {
    errorLast = false;
    //document.querySelector("#errorLast").innerHTML = "";
  }

  // MAIL
  if (
    input.name === "email" &&
    !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.value)
  ) {
    errorLast = true;
    console.log("erreur mail");
  } else {
    errorLast = false;
    //document.querySelector("#errorMail").innerHTML = "";
  }

  // BIRTHDATE
  if (input.name === "birthdate" && !ageOk(input.value)) {
    console.log(ageOk(input.value));
    errorBirthdate = true;
    console.log("erreur annif");
  } else {
    errorBirthdate = false;
    //document.querySelector("#errorBirthdate").innerHTML = "";
  }

  // // QUANTITY
  if (input.name === "quantity" && input.value !== "") {
    parsedValue = parseInt(input.value); // input = string, changer valeur en number
    console.log(parsedValue);

    if (
      !isNaN(parsedValue) &&
      Number.isInteger(parsedValue) &&
      parsedValue >= 0 &&
      parsedValue <= 100
    ) {
      errorQuantity = false;
    } else {
      errorQuantity = true;
      console.log("error quantity");
    }
  } else {
    errorQuantity = false;
  }

  // // CHECKBOX CONDITION GENERALE
  if (input.name === "cGeneral" && !input.checked) {
    errorcGeneral = true;
    console.log("error cgeneral");
  } else {
    errorcGeneral = false;
  }

  // Checkbox -> checked
  if (!radioChecked) {
  } else {
    errorTournois = false;
    console.log("radio ", radioChecked);
  }

  // Error
  if(errorFirst) {
    document.getElementById('errorFirst').innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du prénom";
  } else {
    document.getElementById('errorFirst').innerHTML = "";
  }
  if(errorLast) {
    document.getElementById('errorLast').innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom";
  } else {
    document.getElementById('errorLast').innerHTML = "";
  }
  if(errorMail) {
    document.getElementById('errorMail').innerHTML = "Veuillez corriger votre adresse mail";
  } else {
    document.getElementById('errorMail').innerHTML = "";
  }
  if(errorBirthdate) {
    document.getElementById('errorBirthdate').innerHTML = "Veuillez renseigner votre date de naissance";
  } else {
    document.getElementById('errorBirthdate').innerHTML = "";
  }
  if(errorTournois) {
    document.getElementById('errorTournois').innerHTML = "Veuillez choisir le tournois auquel vous souhaitez participer";
  } else {
    document.getElementById('errorTournois').innerHTML = "";
  }
  if(errorcGeneral) {
    document.getElementById('errorcGeneral').innerHTML = "Veuillez accepter nos conditions générales";
  } else {
    document.getElementById('errorcGeneral').innerHTML = "";
  }


  // if (error(input.name = "first")) {
  //   document.getElementById("errorFirst").innerHTML =
  //       "Veuillez entrer 2 caractères ou plus pour le champ du prénom";
  //   } else if (input.name = "last") {
  //     document.getElementById("errorLast").innerHTML =
  //       "Veuillez entrer 2 caractères ou plus pour le champ du nom";
  //   } else {
  //     document.getElementById("errorFirst", "errorLast").innerHTML = "";
  //   }
    //document.querySelector("input + span").errorMessages;
    //document.querySelector("input + span").innerHTML = "";
    //closeModal();
    //document.getElementById("form").reset();
    //afficherToast();
  
// const errorMessages = {
  //   first: (errorFirst.innerHTML =
  //     "Veuillez entrer 2 caractères ou plus pour le champ du prénom"),
  //   last: (errorLast.innerHTML =
  //     "Veuillez entrer 2 caractères ou plus pour le champ du nom"),
  //   email: (errorMail.innerHTML = "Veuillez corriger votre adresse mail"),
  //   birthdate: (errorBirthdate.innerHTML =
  //     "Veuillez renseigner votre date de naissance"),
  //   location: (errorTournois.innerHTML =
  //     "Veuillez choisir le tournois auquel vous souhaitez participer"),
  //   cGeneral: (errorcGeneral.innerHTML =
  //     "Veuillez accepter nos conditions générales"),
  // };
  return true;
}

function ageOk(dateInput) {
  let dateToday = new Date().toISOString();
  if (dateInput > dateToday) {
    return false;
  }
  const dateTodayObject = new Date();
  let yearNow = dateTodayObject.getFullYear();
  let monthNow = dateTodayObject.getMonth();
  let dayNow = dateTodayObject.getDay();

  // AAAA/MM/DD
  const date18yearsold = (
    yearNow -
    18 +
    "-" +
    monthNow +
    "-" +
    dayNow
  ).toString();

  if (dateInput >= date18yearsold) {
    return false;
  }
  return true;
}

function afficherToast() {
  let toast = document.getElementById("toast");
  toast.classList.remove("hidden");
  toast.classList.add("show");

  setTimeout(function () {
    toast.classList.remove("show");
    toast.classList.add("hidden");
  }, 5000); // Affiche le toast pendant 5 secondes
}
