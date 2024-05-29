// (function () {
//   const userOnline = localStorage.getItem("userOnline");
//   // alert(userOnline)
//   if (userOnline != null) {
//     window.location.href = "./dashboard.html";
//   }
// })();

const formLoginCoder = document.getElementById("form-login-coder");
const email = document.getElementById("email");
const password = document.getElementById("password");
import { genericMessageWarning } from "./alerts"

// función para logear
formLoginCoder.addEventListener("submit", async (e) => {
  e.preventDefault();
  const coder = await checkEmail(email);
  if (coder === false) {
    genericMessageWarning('Verify email')
  } else {
    if (coder.password === password.value) {
      console.log("welcome");
      localStorage.setItem("userOnline", JSON.stringify(coder));
      window.location.href = "./dashboard.html";
    } else {
      genericMessageWarning('Verify password')
    }
  }
});

// función validar si existe el email en la base de datos
async function checkEmail(email) {
  const res = await fetch(
    `http://localhost:3000/authCoders?coderEmail=${email.value}`
  ); // traemos a todos los users que tengan el email que se ingresó
  const data = await res.json();
  console.log(data);
  if (data.length === 1) {
    // si no hay mas de 1 en la base
    return data[0];
  } else {
    return false;
  }
}
