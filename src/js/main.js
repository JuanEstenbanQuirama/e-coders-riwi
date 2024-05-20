import '../styles/styles.scss' // Import our custom CSS
import * as bootstrap from 'bootstrap' // Import all of Bootstrap's JS
import { dataBaseEcoders as defaultDataBaseEcoders } from '../../public/dataBase/eCodersData'

// Obtener data del localStorage
let dataBaseEcoders = JSON.parse(localStorage.getItem('users')) || defaultDataBaseEcoders

console.log(dataBaseEcoders);

let divi = document.getElementById('coders')

for (let i = 0; i < dataBaseEcoders.length; i++) {
    divi.innerHTML += `
    <div>
        <h2>${dataBaseEcoders[i].isName}</h2>
    </div>
    `

}
