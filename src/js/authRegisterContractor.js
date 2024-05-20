import '../styles/styles.scss' // Import our custom CSS
import * as bootstrap from 'bootstrap' // Import all of Bootstrap's JS
import { genericMessageAlert } from './alerts';
import {dataBaseContratctors as defaultDataBaseContratctors } from '../../public/dataBase/eCodersData';


const form = document.getElementById('form');
const isName = document.getElementById('name');
const insdustry = document.getElementById('industry');
const email = document.getElementById('email');
const country = document.getElementById('country')
const contact = document.getElementById('contact')
// const userImage = document.getElementById('user-image')

const URL = 'http://localhost:3000/authContractors'

let dataBaseContratctors = JSON.parse(localStorage.getItem('users')) || defaultDataBaseContratctors // compara la inicial con la agregada a ver cual tiene mas info

console.log(defaultDataBaseContratctors);
function register(event, isName, insdustry, email, country, contact, dataBaseContratctors) {
    event.preventDefault();
    if (form.checkValidity()) {
        const newUser = {
            id: Date.now(),
            isName: isName.value,
            insdustry: insdustry.value,
            email: email.value,
            country: country.value,
            contact: contact.value,
        }

        dataBaseContratctors.push(newUser)
        localStorage.setItem('contractors', JSON.stringify(dataBaseContratctors)) // agregar base de datos a la memoria del navegador (tener los datos 'globales)
        genericMessageAlert('user saved')
        form.reset();
        form.classList.add("is-invalid");
    } else {
        console.log("mostrar campos que no estan válidos");
        form.classList.add("was-validated");
    }
}


form.addEventListener('submit', function (event) {
    register(event, isName, insdustry, email, country, contact, dataBaseContratctors)
})

