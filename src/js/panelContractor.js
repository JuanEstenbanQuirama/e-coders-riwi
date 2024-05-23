import '../styles/styles.scss' 
import * as bootstrap from 'bootstrap' 

let name = document.getElementById("name")
let industry = document.getElementById("industry")
let email = document.getElementById("email")
let country = document.getElementById("country")
let contact = document.getElementById("contact")
let password = document.getElementById("password-user")
let confirmPassword = document.getElementById("confirm-password-user")
let userEmailLS = localStorage.getItem("userOnline")

let data = bringInformation()
InformationIntoForm(data)

form.addEventListener("submit",async(event)=>{
    event.preventDefault()
    let newInformationVar = newInformation(name,industry,email,country,contact,password)
    verifyPassword(confirmPassword,password,newInformationVar)
})

async function bringInformation(){
let response = await fetch(`http://localhost:3000/authContractors?userEmail=${userEmailLS}`)
let data = await response.json()
return data
}

async function InformationIntoForm(data){
    name.value = data.userName
    industry.value = data.industry
    email.value = data.userEmail
    country.value = data.userCountry
    contact.value = data.userContact
    password.value = data.passwordUser
}

async function newInformation(name,industry,email,country,contact,password){
    let response = await fetch(`http://localhost:3000/authContractors`)
    let data = await response.json()
    let foundUserIndex = data.findIndex(userData=>userData.userEmail===userEmailLS)
    let foundUser = data[foundUserIndex]
    foundUser.userName = name;
    foundUser.industry = industry;
    foundUser.userEmail = email;
    foundUser.userCountry = country;
    foundUser.userContact = contact;
    foundUser.passwordUser = password;
    
    fetch(`http://localhost:3000/authCoders/${foundUser.id}`,
    {
        method: 'PUT',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(foundUser)
    })
    return foundCoder
}

function verifyPassword(confirmPassword,password,foundUser){
    if(confirmPassword == password.value ){
        alert("The data has been updated successfully")
        localStorage.setItem("userOnline",json.stringify(foundUser))
        window.location.href = "./"
    }
    else{
        alert("The passwords are not the same ")
    }
}