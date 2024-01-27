// Form Config
let form = document.querySelector('form');

// All function control
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const firstName = document.getElementById('first');
    const lastName = document.getElementById('last');
    const mail = document.getElementById('email');
    const birthDate = document.getElementById('birthdate');
    const quantity = document.getElementById('quantity');
    const radio = document.querySelectorAll('input[type="radio"]');
    const cgeneral = document.getElementById('checkbox1');
    const newevent = document.getElementById('checkbox2');
    
    

    let inscription;
    if(newevent.checked === false) {
      inscription = newevent.value;
    } else {
      inscription = newevent.value;
    }
    

    let valeur;
    for(let i = 0; i < radio.length; i++){
    if(radio[i].checked){
    valeur = radio[i].value;
      }
    }
    

    if(controlForm(firstName, lastName, mail, birthDate, quantity, valeur, cgeneral, newevent)) {
      alert('correct');
    } else {
      alert('error');
    }
});

function controlForm(firstName, lastName, mail, birthDate, quantity, valeur, cgeneral) {
  
  // FIRST NAME
  if(firstName.length < 2) {
    console.log('erreur first');
    return false;
  }
  // LAST NAME
  if(lastName.lenght < 2) {
    console.log('erreur last');
    return false;
  }
  // MAIL
  if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail.value)) {
    console.log('erreur mail');
    return false;
  }
  // BIRTHDATE
  if(isNaN(new Date(birthDate.value))) {
    console.log('erreur annif');
    return false;
  }
  // QUANTITY
  if(quantity.value === null && isNaN(quantity.value)) {
    console.log('erreur quantity value');
    return false;
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
      return false;
}

  // CHECKBOX CONDITION GENERALE
  if(cgeneral.value === null) {
    return false;
  }

  // CHECKBOX NEWEVENT
  
  
  console.log(firstName.value);
  console.log(lastName.value);
  console.log(mail.value);
  console.log(birthDate.value);
  console.log(quantity.value);
  console.log(cgeneral.value);
  console.log(valeur);
  console.log(newevent);

  return true;
  
}

 /**
  * "Veuillez entrer 2 caractères ou plus pour le champ du nom."
  * "Vous devez choisir une option."
  * "Vous devez vérifier que vous acceptez les termes et conditions."
  * "Vous devez entrer votre date de naissance."
  */
 