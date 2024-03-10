const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const errorMessages = {
    first: "Veuillez entrer 2 caractères ou plus pour le champ du prénom",
    last: "Veuillez entrer 2 caractères ou plus pour le champ du nom",
    email: "Veuillez corriger votre adresse mail",
    birthdate: "Veuillez renseigner une date de naissance valide",
    location: "Veuillez choisir le tournois auquel vous souhaitez participer",
    cGeneral: "Veuillez accepter nos conditions générales",
  };

  const inputs = form.querySelectorAll("input");
  let hasErrors = false;

  inputs.forEach((input) => {
    const fieldName = input.name;
    const errorMessage = errorMessages[fieldName];

    if (fieldName === "birthdate") {
      if (!isValidAge(input.value)) {
        displayError(fieldName, errorMessage);
        hasErrors = true;
      }
    } else if (fieldName === "quantity") {
      if (!isValidQuantity(input.value)) {
        displayError(fieldName, errorMessage);
        hasErrors = true;
      }
    } else if (fieldName === "cGeneral") {
      if (!input.checked) {
        displayError(fieldName, errorMessage);
        hasErrors = true;
      }
    } else if (fieldName === "futurTournois" && input.checked) {
      // Additional logic if needed for this field
    } else {
      if (input.value.length < 2) {
        displayError(fieldName, errorMessage);
        hasErrors = true;
      }
    }
  });

  if (!hasErrors) {
    form.submit(); // If no errors, submit the form
  }
});

function isValidAge(dateString) {
  const today = new Date();
  const birthDate = new Date(dateString);
  const age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age >= 18;
}

function isValidQuantity(value) {
  const parsedValue = parseInt(value);
  return (
    !isNaN(parsedValue) &&
    Number.isInteger(parsedValue) &&
    parsedValue >= 0 &&
    parsedValue <= 100
  );
}

function displayError(fieldName, errorMessage) {
  const errorElement = document.getElementById(
    `error${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}`
  );
  if (errorElement) {
    errorElement.textContent = errorMessage;
  }
}
