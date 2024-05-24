import '../styles/styles.scss'
import * as bootstrap from 'bootstrap'

let name = document.getElementById("name")
let lastName = document.getElementById("last-name")
let email = document.getElementById("email")
let country = document.getElementById("country")
let phone = document.getElementById("phone")
let core = document.getElementById("core")
let skills = document.getElementById("skills")
let age = document.getElementById("age")
let password = document.getAnimations("password")
let confirmPassword = document.getElementById("confirm-Password")
let coderEmailS = localStorage.getItem("userOnline")
let form = document.getElementsByTagName("form")

let data = bringInformation()
InformationIntoForm(data)

form.addEventListener("submit",async(event)=>{
    event.preventDefault()
    let newInformationVar = newInformation(name,lastName,email,country,phone,core,skills,age,password)
    verifyPassword(confirmPassword,password,newInformationVar)
})

async function bringInformation(){
let response = await fetch(`http://localhost:3000/authCoders?coderEmail=${coderEmailS}`)
let data = await response.json()
return data
}

async function InformationIntoForm(data){
    name.value = data.coderName
    lastName.value = data.coderLastName
    email.value = data.coderEmail
    country.value = data.coderCountry
    phone.value = data.coderPhone
    core.value = data.coderCore
    skills.value = data.coderSkills
    age.value = data.coderAgeExperience
    password.value = data.password
}

async function newInformation(name,lastName,email,country,phone,core,skills,age,password){
    let response = await fetch(`http://localhost:3000/authCoders`)
    let data = await response.json()
    let foundCoderIndex = data.findIndex(coderData=>coderData.coderEmail===coderEmailS)
    let foundCoder = data[foundCoderIndex]
    foundCoder.coderName = name;
    foundCoder.coderLastName = lastName;
    foundCoder.coderEmail = email;
    foundCoder.coderCountry = country;
    foundCoder.coderPhone = phone;
    foundCoder.coderCore = core;
    foundCoder.coderSkills = skills;
    foundCoder.coderAgeExperience = age;
    foundCoder.password = password;
    
    fetch(`http://localhost:3000/authCoders/${foundCoder.id}`,
    {
        method: 'PUT',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(foundCoder)
    })
    return foundCoder
}

function verifyPassword(confirmPassword,password,foundCoder){
    if(confirmPassword == password.value ){
        alert("The data has been updated successfully")
        localStorage.setItem("userOnline",json.stringify(foundCoder))
        window.location.href = "./"
    }
    else{
        alert("The passwords are not the same ")
    }
}