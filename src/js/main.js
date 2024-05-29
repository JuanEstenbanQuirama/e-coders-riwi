import '../styles/styles.scss' // Import our custom CSS
import * as bootstrap from 'bootstrap' // Import all of Bootstrap's JS
// import { dataBaseEcoders as defaultDataBaseEcoders } from '../../public/dataBase/eCodersData'

// // Obtener data del localStorage
// let dataBaseEcoders = JSON.parse(localStorage.getItem('users')) || defaultDataBaseEcoders

// console.log(dataBaseEcoders);

// let divi = document.getElementById('coders')

// for (let i = 0; i < dataBaseEcoders.length; i++) {
//     divi.innerHTML += `
//     <div>
//         <h2>${dataBaseEcoders[i].isName}</h2>
//     </div>
//     `

// }

// Obtener elementos del DOM
var modal = document.getElementById("myModal");
var btn = document.getElementById("openModalBtn");
var span = document.getElementsByClassName("close")[0];
var form = document.getElementById("requestForm");


// btn.onclick = function() {     
//     modal.style.display = "block";
// }


// span.onclick = function() {
//     modal.style.display = "none";
// }


// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }


// form.onsubmit = function(event) {
//     event.preventDefault();
//     alert("Solicitud enviada con exito");
//     modal.style.display = "none";
// }