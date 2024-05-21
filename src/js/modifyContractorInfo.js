import '../styles/styles.scss' 
import * as bootstrap from 'bootstrap' 

let name = document.getElementById("name")
let industry = document.getElementById("industry")
let email = document.getElementById("email")
let country = document.getElementById("country")
let contact = document.getElementById("contact")
let url = "http://localhost:3000/authContractors"



let data = []
async function contractorUbication(){
    let emailContractor = String(prompt("Ingrese su email"))
    let response = await fetch(`${url}?email=${emailContractor}`)
    data = await response.json()
    if(data.length===1){
        return data
    }
    else{
        alert("Este correo no existe por favor registrese")
        return false
    }
}

let infoChangeContractor = contractorUbication()

async function informationPlacement(data){
    name.value = data?.isName
    industry.value = data?.industry
    email.value = data?.email
    country.value = data?.country
    contact.value = data?.contact
}
informationPlacement(data)


