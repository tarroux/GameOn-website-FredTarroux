
let form = document.querySelector('form');

form.addEventListener("submit", (event) => {
  
  const firstName = document.getElementById('first');
  const lastName = document.getElementById('last');
  const mail = document.getElementById('email');
  const birthDate = document.getElementById('birthdate');
  const quantity = document.getElementById('quantity');
  const radio = document.querySelectorAll('input[type="radio"]');
  const cgeneral = document.getElementById('checkbox1');
  const newevent = document.getElementById('checkbox2');
  console.log(document.querySelectorAll('input'));
  
  let valeur;
  for(let i = 0; i < radio.length; i++){ // voir pour modifier avec forEach et map 
  if(radio[i].checked) {
  valeur = radio[i].value;
    }
  }
  console.log(valeur);


  if(newevent.checked) {
    console.log(newevent.value);
  }
  

  if(ctrlForm(firstName, lastName, mail, birthDate, quantity, valeur, cgeneral, newevent)) {
    alert('Merci ! Votre réservation a été reçue.');
  } else {
    event.preventDefault();
    alert('error');
  }
});

function ctrlForm(firstName, lastName, mail, birthDate, quantity, valeur, cgeneral/*newevent*/) {
  let error;

  //FIRST NAME
  if(firstName.value.length < 2) {
    console.log('erreur first');
    errorFirst = true;
  } else {
    errorFirst = false;
  }

  // LAST NAME
  if(lastName.value.length < 2) {
    errorLast = true;
    console.log('erreur last');
  } else {
    errorLast = false;
  }

  // MAIL
  if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail.value)) {
    errorMail = true;
    console.log('erreur mail');
  } else {
    errorMail = false;
  }
  
  // BIRTHDATE 
  if(isNaN(new Date(birthDate.value))) {
    errorbirthdate = true;
    console.log('erreur annif');
  } else {
    errorbirthdate = false;
  }

  // QUANTITY
  if(quantity.value === null && isNaN(quantity.value)) {
    console.log('erreur quantity value');
  }

  // RADIO BTN
  switch (valeur) {
    case 'New York':
      break;
    case 'San Francisco':
      break;
    case 'Seattle':
      break;
    case 'Chicago':
      break;
    case 'Boston':
      break;
    case 'Portland':
      break;
    default:
      console.log(valeur);
}

  // CHECKBOX CONDITION GENERALE
  if(cgeneral.checked === false) {
    errorCGeneral = true;
  } else {
    errorCGeneral = false;
  }

  // validate
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


