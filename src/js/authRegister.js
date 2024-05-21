import '../styles/styles.scss' // Import our custom CSS
import * as bootstrap from 'bootstrap' // Import all of Bootstrap's JS
import { genericMessageAlert } from './alerts';

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

const URLCODERS = 'http://localhost:3000/authCoders'
const URLUSERS = 'http://localhost:3000/authContractors'


// escuchar el boton sumbit del formulario coders
// formCoder.addEventListener('submit', async function (event) {
//     event.preventDefault()
//     await registerCoder(coderName, coderLastName, coderEmail, coderCountry, coderPhone, coderCore, coderSkills, coderAgeExperience)
//     await getData()
// })

// escuchar el boton sumbit del formulario users
formUser.addEventListener('submit', async function (event) {
    event.preventDefault()
    await registerUser(userName, industry, userEmail, userCountry, userContact)
    await getData()
})



// Registrar coder
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

// Registrar contractor
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

// Probando los endpoints 
async function getData () {
    const res = await fetch(URLCODERS)
    const data = await res.json()
    const res1 = await fetch(URLUSERS)
    const data1 = await res1.json()
    console.log(data);
    console.log(data1);
    return data
}