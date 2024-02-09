
const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Objet pour stocker les données du formulaire
    const formElement = {}; 

    // Parcourir chaque champ du formulaire
    // Type text : Nom, Prenom, Mail
    form.querySelectorAll('input').forEach(function(champ) {
        // Stocker la valeur de chaque champ dans l'objet 
        formElement[champ.name] = champ.value; 
        console.log(formElement);
    });

    console.log(formElement);
    if(ctrlForm(formElement)) {
        closeModal();
        afficherToast();
    } else {
        alertError();
    }
});
   

function afficherToast() {
    let toast = document.getElementById("toast");
    toast.classList.remove("hidden");
    toast.classList.add("show");

    setTimeout(function() {
        toast.classList.remove("show");
        toast.classList.add("hidden");
    }, 3000); // Affiche le toast pendant 3 secondes
}

function alertError() {
    let alert = document.getElementById("alert");
    alert.classList.remove("hidden");
    alert.classList.add("show");

    setTimeout(function() {
        alert.classList.remove("show");
        alert.classList.add("hidden");
    }, 3000); // Affiche le toast pendant 3 secondes
}

function ctrlForm(formElement) {
    //FIRST NAME
    if(formElement.first.length < 2) {
      console.log('erreur first');
      errorFirst = true;
    } else {
      errorFirst = false;
    }
    
    // LAST NAME
    if(formElement.last.length < 2) {
      errorLast = true;
      console.log('erreur last');
    } else {
      errorLast = false;
    }
  
    // MAIL
    if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formElement.email)) {
      errorMail = true;
      console.log('erreur mail');
    } else {
      errorMail = false;
    }
    
    // BIRTHDATE 
    if(isNaN(new Date(formElement.birthdate))) {
      errorbirthdate = true;
      console.log('erreur annif');
    } else {
      errorbirthdate = false;
    }
  
    // QUANTITY
    if(formElement.quantity === null && isNaN(formElement.quantity)) {
      console.log('erreur quantity value');
    }

  // voir pour modifier avec forEach et map 

    // RADIO BTN
    if(location1.checked === true) {
        formElement.location = location1.value;
        errorTournois = false;
    } else if(location2.checked === true) {
        formElement.location = location2.value;
        errorTournois = false;
    } else if(location3.checked === true) {
        formElement.location = location3.value;
        errorTournois = false;
    } else if(location4.checked === true) {
        formElement.location = location4.value;
        errorTournois = false;
    } else if(location5.checked === true) {
        formElement.location = location5.value;
        errorTournois = false;
    } else if(location6.checked === true) {
        formElement.location = location6.value;
        errorTournois = false;
    } else {
        errorTournois = true;
    }
  
    // CHECKBOX CONDITION GENERALE
    if(checkbox1.checked === true) {
      errorCGeneral = false;
    } else {
      errorCGeneral = true;
    }

    // CHECKBOX INFORMATION
    if(checkbox2.checked === true) {
        newEvent = true;
    } else if(checkbox2) {
        newEvent = false;
    }
    // Message validation 
    if(newEvent) {
        document.getElementById('newEvent').innerHTML = "Nous ne manquerons pas de vous tenir informé des prochains évènements !";
    } else {
        document.getElementById('newEvent').innerHTML = "";
    }

    // Error Message
    if(errorFirst) {
      document.getElementById('errorFirst').innerHTML = 'Veuillez entrer 2 caractères ou plus pour le champ du prénom';
      return false;
    } else {
      document.getElementById('errorFirst').innerHTML = '';
    }
  
    if(errorLast) {
      document.getElementById('errorLast').innerHTML = 'Veuillez entrer 2 caractères ou plus pour le champ du nom';
      return false;
    } else {
      document.getElementById('errorLast').innerHTML = '';
      
    }
  
    if(errorMail) {
      document.getElementById('errorMail').innerHTML = 'Veuillez corriger votre adresse mail';
      return false;
    } else {
      document.getElementById('errorMail').innerHTML = '';
      
    }
  
    if(errorbirthdate) {
      document.getElementById('errorBirthdate').innerHTML = 'Veuillez renseigner votre date de naissance';
      return false;
    } else {
      document.getElementById('errorBirthdate').innerHTML = '';
      
    }
  
    if(errorTournois) {
      document.getElementById('errorTournois').innerHTML = 'Veuillez choisir le tournois auquel vous souhaitez participer';
      return false;
    } else {
      document.getElementById('errorTournois').innerHTML = '';
      
    }
  
    if(errorCGeneral) {
      document.getElementById('errorCGeneral').innerHTML = 'Veuillez accepter nos conditions générales';
      return false;
    } else {
      document.getElementById('errorCGeneral').innerHTML = '';
    }
  
    return true;
    
  }
  
