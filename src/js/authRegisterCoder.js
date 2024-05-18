import Swal from 'sweetalert2';
import '../styles/styles.scss' // Import our custom CSS
import * as bootstrap from 'bootstrap' // Import all of Bootstrap's JS
import { dataBaseEcoders } from '../../public/dataBase/eCodersData';
// import { genericMessageAlert } from './alerts';

const form = document.getElementById('form');
const name = document.getElementById('name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const country = document.getElementById('country')
const phone = document.getElementById('phone')
const core = document.getElementById('core')
const skills = document.getElementById('skills')
const ageExperience = document.getElementById('age')
const idioms = document.getElementById('idioms')
// const userImage = document.getElementById('user-image')




const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
    }
});

export function genericMessageAlert(msg) {
    Toast.fire({
        icon: "success",
        title: msg
    });
}

form.addEventListener("submit", function (event) {
    event.preventDefault()
    console.log(event);
    console.log('hi');
    genericMessageAlert('xd')

})

function register(event, name, lastName, email, country, phone, core, skills, ageExperience, idioms) {
    const newUser = {
        id: Date.now(),
        name,
        lastName,
        email,
        country,
        phone,
        core,
        skills,
        ageExperience,
        idioms,
    }
    dataBaseEcoders.push(newUser)
}

