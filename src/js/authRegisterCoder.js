import '../styles/styles.scss' // Import our custom CSS
import * as bootstrap from 'bootstrap' // Import all of Bootstrap's JS
import { genericMessageAlert } from './alerts';
import { dataBaseEcoders as defaultDataBaseEcoders } from '../../public/dataBase/eCodersData';

const formCoder = document.getElementById('form-coder');
const coderName = document.getElementById('name');
const coderLastName = document.getElementById('last-name');
const coderEmail = document.getElementById('email');
const coderCountry = document.getElementById('country')
const coderPhone = document.getElementById('phone')
const coderCore = document.getElementById('core')
const coderSkills = document.getElementById('skills')
const coderAgeExperience = document.getElementById('age')

const formUser = document.getElementById('form-user');
const userName = document.getElementById('name');
const industry = document.getElementById('industry');
const userEmail = document.getElementById('email');
const userCountry = document.getElementById('country')
const userContact = document.getElementById('contact')



// let dataBaseEcoders = JSON.parse(localStorage.getItem('users')) || defaultDataBaseEcoders // compara la inicial con la agregada a ver cual tiene mas info
// console.log(dataBaseEcoders);


// function register(event, isName, lastName, email, country, phone, core, skills, ageExperience, dataBaseEcoders) {
//     event.preventDefault();
//     if (form.checkValidity()) {
//         const newUser = {
//             id: Date.now(),
//             isName: isName.value,
//             lastName: lastName.value,
//             email: email.value,
//             country: country.value,
//             phone: phone.value,
//             core: core.value,
//             skills: skills.value,
//             ageExperience: ageExperience.value,
//         }
//         dataBaseEcoders.push(newUser)
//         localStorage.setItem('users', JSON.stringify(dataBaseEcoders)) // agregar base de datos a la memoria del navegador (tener los datos 'globales)
//         genericMessageAlert('user saved')
//         form.reset();
//         form.classList.add("is-invalid");
//     } else {
//         console.log("mostrar campos que no estan válidos");
//         form.classList.add("was-validated");
//     }
// }


const URLCODERS = 'http://localhost:3000/authCoders'
const URLUSERS = 'http://localhost:3000/authCoders'


// Probando los endpoints 
async function getData () {
    const res = await fetch(URLCODERS)
    const data = await res.json()
    console.log(data);
    return data
}

async function registerCoder ( coderName, coderLastName, coderEmail, coderCountry, coderPhone, coderCore, coderSkills, coderAgeExperience) {
    const newCoder = {
        coderName: coderName.value,
        coderLastName: coderLastName.value,
        coderEmail: coderEmail.value,
        coderCountry: coderCountry.value,
        coderPhone: coderPhone.value,
        coderCore: coderCore.value,
        coderSkills: coderSkills.value,
        coderAgeExperience: coderAgeExperience.value,
    }

    await fetch(URLCODERS, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newCoder)
    })
}

formCoder.addEventListener('submit', async function (event) {
    event.preventDefault()
    await registerCoder(coderName, coderLastName, coderEmail, coderCountry, coderPhone, coderCore, coderSkills, coderAgeExperience)
    // await getData()
})


async function registerUser ( userName, industry, userEmail, userCountry, userContact) {
    const newUser = {
        userName: userName.value,
        industry: industry.value,
        userEmail: userEmail.value,
        userCountry: userCountry.value,
        userContact: userContact.value
    }

    await fetch(URLUSERS, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser)
    })
}

formUser.addEventListener('submit', async function (event) {
    event.preventDefault()
    await registerUser(userName, industry, userEmail, userCountry, userContact)
    // await getData()
})