import '../styles/styles.scss' 
import * as bootstrap from 'bootstrap' 
import {dataBaseContratctors as defaultDataBaseContratctors } from '../../public/dataBase/eCodersData';

let name = document.getElementById("name")
let industry = document.getElementById("industry")
let email = document.getElementById("email")
let country = document.getElementById("country")
let contact = document.getElementById("contact")
let url = "http://localhost:3000/authContractors"

let emailContractor = Number(prompt("Ingrese su email"))


async function contractorUbication(){
    let response = await fetch(url)
    let data = await response.json()
    let contractorUbicationArray = data.findIndex(contractor => contractor.email==emailContractor)
    console.log(contractorUbicationArray)
}

contractorUbication(id)
