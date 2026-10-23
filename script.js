const email = document.querySelector("#email-input");
const inputField = document.querySelector(".field");
const errorMessage = inputField.querySelector(".error-message");

if(!email.validity.valid){
  errorMessage.textContent = "Please enter a valid email";
}else{
  errorMessage.textContent = "";
}

console.log(email.validity.valid);
