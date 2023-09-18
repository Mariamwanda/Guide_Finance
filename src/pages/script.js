// const headerEl = document.querySelector('header');

// window.addEventListener("scroll", () => {
//   if (window.scrollY > 140) {
//     headerEl.classList.add("header-scrolled");
//   } else if (window.scrollY <= 50) {
//     headerEl.classList.remove("header-scrolled");
//   }
// });

// let genderValue = male.checked ? "male" : "female";

// function getGender() {
//   return document.querySelector('input[name="gender"]:checked');
// }

// document.addEventListener("DOMContentLoaded", function () {
//   fields.firstName = document.getElementById("firstName");
//   fields.lastName = document.getElementById("lastName");
//   fields.email = document.getElementById("email");
//   fields.address = document.getElementById("address");
//   fields.houseNumber = document.getElementById("houseNumber");
//   fields.country = document.getElementById("country");
//   fields.password = document.getElementById("password");
//   fields.passwordCheck = document.getElementById("passwordCheck");
//   fields.newsletter = document.getElementById("newsletter");
//   fields.question = document.getElementById("question");
// });

// function isNotEmpty(value) {
//   if (value == null || typeof value == "undefined") return false;
//   return value.length > 0;
// }
// function isNumber(num) {
//   return num.length > 0 && !isNaN(num);
// }

// function isEmail(email) {
//   let regex =
//     /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
//   return regex.test(String(email).toLowerCase());
// }

// function isPasswordValid(password) {
//   if (password.length > 5) {
//     return true;
//   }
//   return false;
// }

// function fieldValidation(field, validationFunction) {
//   if (field == null) return false;

//   let isFieldValid = validationFunction(field.value);
//   if (!isFieldValid) {
//     field.className = "placeholderRed";
//   } else {
//     field.className = "";
//   }

//   return isFieldValid;
// }

// function isValid() {
//   var valid = true;

//   valid &= fieldValidation(fields.firstName, isNotEmpty);
//   valid &= fieldValidation(fields.lastName, isNotEmpty);
//   valid &= fieldValidation(fields.gender, isNotEmpty);
//   valid &= fieldValidation(fields.address, isNotEmpty);
//   valid &= fieldValidation(fields.country, isNotEmpty);
//   valid &= fieldValidation(fields.email, isEmail);
//   valid &= fieldValidation(fields.houseNumber, isNumber);
//   valid &= fieldValidation(fields.password, isPasswordValid);
//   valid &= fieldValidation(fields.passwordCheck, isPasswordValid);
//   valid &= fieldValidation(fields.question, isNotEmpty);
//   valid &= arePasswordsEqual();

//   return valid;
// }

// function arePasswordsEqual() {
//   if (fields.password.value == fields.passwordCheck.value) {
//   field.password.className = 'placeholderRed';
//   field.passwordCheck.className = 'placeholderRed';
//   return true;
//   }
//   return false
//  }

//  class User {
//   constructor(firstName, lastName, gender, address, country, email, newsletter, question) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.gender = gender;
//   this.address = address;
//   this.country = country;
//   this.email = email;
//   this.newsletter = newsletter;
//   this.question = question;
//   }
//  }
// document.addEventListener("DOMContentLoaded", function () {

//       document.getElementById("showPopup").addEventListener("click", function () {
//       document.getElementById("popup").style.display = "block";
//   });

//   document.getElementById("closePopup").addEventListener("click", function () {
//       document.getElementById("popup").style.display = "none";
//   });
// });

