const form = document.querySelector("form");
const email = document.querySelector("#email-input");
const inputField = document.querySelector(".field");
const errorMessage = inputField.querySelector(".error-message");
const country = document.querySelector("#country-input");
const countryField = country.parentElement;
const countryErrorMessage = countryField.querySelector(".error-message");
const postalCode = document.querySelector("#postal-code-input");
const postalCodeField = postalCode.parentElement;
const postalCodeErrorMessage = postalCodeField.querySelector(".error-message");
const password = document.querySelector("#password-input");
const passwordField = password.parentElement;
const passwordErrorMessage = passwordField.querySelector(".error-message");
const confirmPassword = document.querySelector("#confirm-password-input");
const confirmPasswordField = confirmPassword.parentElement;
const confirmPasswordErrorMessage = confirmPasswordField.querySelector(".error-message");
const successMessage = document.querySelector("#success-message");


// Email Validation
function validateEmail () {
  if (email.validity.valueMissing) {
    errorMessage.textContent = "Email is required";
  } else if (!email.validity.valid) {
    errorMessage.textContent = "Please enter a valid email";
  } else {
    errorMessage.textContent = "";
  }
}

email.addEventListener("input", validateEmail);

email.addEventListener("blur", validateEmail);

// Country Validation
function validateCountry () {
  if(country.validity.valueMissing) {
    countryErrorMessage.textContent = "Country is required";
  }else{
    countryErrorMessage.textContent = "";
  }
}

country.addEventListener("input", validateCountry);

country.addEventListener("blur", validateCountry);

//Postal Code Validation 
function validatePostalCode () {
  if(postalCode.validity.valueMissing) {
    postalCodeErrorMessage.textContent = "Postal code is required";
  }else{
    postalCodeErrorMessage.textContent = "";
  }
}

postalCode.addEventListener("input", validatePostalCode);

postalCode.addEventListener("blur", validatePostalCode);


// Password Validation
function validatePassword () {
  if(password.validity.valueMissing){
    passwordErrorMessage.textContent = "Password is required";
  }else if (password.validity.tooShort){
    passwordErrorMessage.textContent = "Password must be at least 8 characters";
  }else{
    passwordErrorMessage.textContent = "";
  }
}

password.addEventListener("input", validatePassword);

password.addEventListener("blur", validatePassword);

password.addEventListener("input", validateConfirmPassword);


// Password Confirm Validation
function validateConfirmPassword () {
  if(confirmPassword.validity.valueMissing) {
    confirmPasswordErrorMessage.textContent = "Confirm password required";
  }else if (confirmPassword.value !== password.value) {
    confirmPasswordErrorMessage.textContent = "Password do not match";
  }else{
    confirmPasswordErrorMessage.textContent = "";
  }
}

confirmPassword.addEventListener("input", validateConfirmPassword);

confirmPassword.addEventListener("blur", validateConfirmPassword);

// Form submition
form.addEventListener("submit", (event) => {
  event.preventDefault();

  validateEmail();
  validatePostalCode();
  validateCountry();
  validatePassword();
  validateConfirmPassword();

  if(form.checkValidity() && password.value === confirmPassword.value) {
    successMessage.textContent = "High five! Your form is valid. ✅";
  }

});

form.addEventListener("input", () => {
  successMessage.textContent = "";
});
