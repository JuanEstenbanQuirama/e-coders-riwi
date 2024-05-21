import "../styles/styles.scss"; // Import our custom CSS
import * as bootstrap from "bootstrap"; // Import all of Bootstrap's JS
import { genericMessageAlert } from "./alerts";

// Caputrar datos coders
const formCoder = document.getElementById("form-coder");
const coderName = document.getElementById("name");
const coderLastName = document.getElementById("last-name");
const coderEmail = document.getElementById("email");
const coderCountry = document.getElementById("country");
const coderPhone = document.getElementById("phone");
const coderCore = document.getElementById("core");
const coderSkills = document.getElementById("skills");
const coderAgeExperience = document.getElementById("age");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-Password");

// Capturar datos contracor
const formUser = document.getElementById("form-user");
const userName = document.getElementById("name");
const industry = document.getElementById("industry");
const userEmail = document.getElementById("email");
const userCountry = document.getElementById("country");
const userContact = document.getElementById("contact");
const passwordUser = document.getElementById("password-user");
const confirmPasswordUser = document.getElementById("confirm-Password-user");

// END POINTS
const URLCODERS = "http://localhost:3000/authCoders";
const URLUSERS = "http://localhost:3000/authContractors";


if (formCoder) { // verifica en qué html estoy 
  formCoder.addEventListener("submit", async (e) => { // escuchar el boton sumbit del formulario coders
    e.preventDefault();
    const emailAvailable = await checkEmail(coderEmail); // confirmar que no existe en la base
    const passwordConfirm = checkPasswords(password, confirmPassword); //confirmar pasword igual
    if (passwordConfirm === true && emailAvailable === true) {
      await registerCoder(
        coderName,
        coderLastName,
        coderEmail,
        coderCountry,
        coderPhone,
        coderCore,
        coderSkills,
        coderAgeExperience,
        password
      );
      alert("go login");
      // window.location.href = "",
      window.location.href = './dashboard.html'
      await getData();
    } else {
      alert("Verificar los campos");
    }
  });
}

if (formUser) { // verifica en qué html estoy 
  formUser.addEventListener("submit", async (event) => { // escuchar el boton sumbit del formulario users
    event.preventDefault();
    const emailAvailable = await checkEmailUser(userEmail); 
    const passwordConfirm = checkPasswords(passwordUser, confirmPasswordUser);
    if(passwordConfirm ===true && emailAvailable === true) {
      await registerUser(userName, industry, userEmail, userCountry, userContact, passwordUser );
      alert("go login");
      // window.location.href = "",
      window.location.href = './dashboard.html'
      await getData();
    } else {
      alert("Verificar los campos");
    }
  });
}

// Register coder
async function registerCoder(
  coderName,
  coderLastName,
  coderEmail,
  coderCountry,
  coderPhone,
  coderCore,
  coderSkills,
  coderAgeExperience,
  password
) {
  const newCoder = {
    coderName: coderName.value,
    coderLastName: coderLastName.value,
    coderEmail: coderEmail.value,
    coderCountry: coderCountry.value,
    coderPhone: coderPhone.value,
    coderCore: coderCore.value,
    coderSkills: coderSkills.value,
    coderAgeExperience: coderAgeExperience.value,
    password: password.value
  };
  await fetch(URLCODERS, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newCoder),
  });
}

// Register contractor
async function registerUser(
  userName,
  industry,
  userEmail,
  userCountry,
  userContact,
  passwordUser
) {
  const newUser = {
    userName: userName.value,
    industry: industry.value,
    userEmail: userEmail.value,
    userCountry: userCountry.value,
    userContact: userContact.value,
    passwordUser: passwordUser.value
  };
  await fetch(URLUSERS, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  });
}

// Probando los endpoints
async function getData() {
  const res = await fetch(URLCODERS);
  const data = await res.json();
  const res1 = await fetch(URLUSERS);
  const data1 = await res1.json();
  console.log(data);
  console.log(data1);
  return data;
}

// Validate email coder
async function checkEmail(coderEmail) {
  const res = await fetch(
    `http://localhost:3000/authCoders?coderEmail=${coderEmail.value}`
  ); // traemos a todos los users que tengan el email que se ingresó
  const data = await res.json();
  console.log(data);
  if (data.length > 0) {
    return false;
  } else {
    return true;
  }
}

// Validate email user
async function checkEmailUser(userEmail) {
  const res = await fetch(
    `http://localhost:3000/authContractors?userEmail=${userEmail.value}`
  ); // traemos a todos los users que tengan el email que se ingresó
  const data = await res.json();
  console.log(data);
  if (data.length > 0) {
    return false;
  } else {
    return true;
  }
}

// Validate password
function checkPasswords(password, confirmPassword) {
  if (password.value === confirmPassword.value) {
    return true;
  } else {
    return false;
  }
}
