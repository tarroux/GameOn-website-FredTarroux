// Form Config
const form = document.querySelectorAll('form');

const firstName = document.getElementById('#first').value;
const lastName = document.getElementById('#last').value;
// const mail = document.getElementById('#email').value;
// const birthDate = document.getElementById('#birthdate').value;
// const quantity = document.getElementById('#quantity').value;


form.addEventListener("submit", (event) {
    //Supprimer comportement par défaut du btn submit afin d'empécher le rechargement de la page
    event.preventDefault();

    const firstName = document.getElementById('#first').value;
    //const lastName = document.getElementById('#last').value;
    if(firstName != null && value.length >= 2) {
        console.log('nom valid');
      } else {
        document.getElementById('#first').style.color="red";
        return false;
      };
});

/*
function controlForm(firstName, lastName) {
    
    if(firstName != null && value.length >= 2) {
        return true;
      } else {
        document.getElementById('#first').style.color="red";
        return false;
      };
      
    if(lastName != null && value.length >= 2) {
        return true;
    } else {
        document.getElementById('#first').style.color="red";
        return false;
    }
   }
   console.log(firstName);
   // Mail
 
   // Birthdate
 
   // Quantity 
 
   // Radio
 */
 
 
 //const formData = new FormData(form);
 /*
 const firstname = document.getElementById("first").value;
 const lastname = document.getElementById("last").value;
 
 function controlForm() {
   // Control first name 
   if(firstname=='') {
     document.getElementById('first').style.color="red";
     //document.getElementById('last').style.color="red";
     console.log('first');
   }
 }*/
 