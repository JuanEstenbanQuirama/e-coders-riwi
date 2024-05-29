// (function () {
//     const userOnline = localStorage.getItem('userOnline')
//     // alert(userOnline)
//     if(userOnline != null) {
//         window.location.href="./dashboard.html"
//     } 
// })()
// import "../styles/styles.scss"

const formLoginUser = document.getElementById("form-login-user");
const email = document.getElementById("email");
const password = document.getElementById("password");
import { genericMessageWarning } from "./alerts"

formLoginUser.addEventListener('submit', async (e) => {
    e.preventDefault()
    const user = await checkEmail(email)
    if (user === false) {
        genericMessageWarning('Verify email')
    } else {
        if (user.passwordUser === password.value) {
            console.log('welcome');
            localStorage.setItem('userOnline', JSON.stringify(user))
            window.location.href = './dashboard.html'
        } else {
            genericMessageWarning('Verify password')
        }
    }
})

async function checkEmail(email) {
    const res = await fetch(`http://localhost:3000/authContractors?userEmail=${email.value}`); // traemos a todos los users que tengan el email que se ingresó
    const data = await res.json();
    genericMessageWarning('probandoUser')
    console.log(data);
    if (data.length === 1) {
        // si no hay mas de 1 en la base
        return data[0]
    } else {
        return false;
    }
}

