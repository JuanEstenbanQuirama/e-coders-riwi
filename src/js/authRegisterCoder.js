import '../styles/styles.scss' // Import our custom CSS
import * as bootstrap from 'bootstrap' // Import all of Bootstrap's JS
import { genericMessageAlert } from './alerts';
import { dataBaseEcoders as defaultDataBaseEcoders } from '../../public/dataBase/eCodersData';

let dataBaseEcoders = JSON.parse(localStorage.getItem('users')) || defaultDataBaseEcoders // compara la inicial con la agregada a ver cual tiene mas info

const form = document.getElementById('form');
const isName = document.getElementById('name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const country = document.getElementById('country')
const phone = document.getElementById('phone')
const core = document.getElementById('core')
const skills = document.getElementById('skills')
const ageExperience = document.getElementById('age')
const idioms = document.getElementById('idioms')
// const userImage = document.getElementById('user-image')
console.log(dataBaseEcoders);

function register(event, isName, lastName, email, country, phone, core, skills, ageExperience, idioms, dataBaseEcoders) {
    event.preventDefault();
    if (form.checkValidity()) {
        const newUser = {
            id: Date.now(),
            isName: isName.value,
            lastName: lastName.value,
            email: email.value,
            country: country.value,
            phone: phone.value,
            core: core.value,
            skills: skills.value,
            ageExperience: ageExperience.value,
            idioms: idioms.value
        }
        dataBaseEcoders.push(newUser)
        localStorage.setItem('users', JSON.stringify(dataBaseEcoders)) // agregar base de datos a la memoria del navegador (tener los datos 'globales)
        genericMessageAlert('user saved')
        form.reset();
        form.classList.add("is-invalid");
    } else {
        console.log("mostrar campos que no estan válidos");
        form.classList.add("was-validated");
    }
}


form.addEventListener('submit', function (event) {
    register(event, isName, lastName, email, country, phone, core, skills, ageExperience, idioms, dataBaseEcoders)
})

