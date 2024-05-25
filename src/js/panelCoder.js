import '../styles/styles.scss'
import * as bootstrap from 'bootstrap'

let name = document.getElementById("name")
let lastName = document.getElementById("lastName")
let email = document.getElementById("email")
let country = document.getElementById("country")
let phone = document.getElementById("phone")
let core = document.getElementById("core")
let skills = document.getElementById("skills")
let age = document.getElementById("age")
let password = document.getAnimations("password")
let confirmPassword = document.getElementById("confirm-Password")
let userEmailLS = localStorage.getItem("userOnline")
userEmailLS = JSON.parse(userEmailLS)
let form = document.getElementsByTagName("form")


function getUser() {
    const data = localStorage.getItem('userOnline')
    let data1 = JSON.parse(data)
    return data1
}

let userInfo = getUser()

function infoIntoForm(data) {
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

infoIntoForm(userInfo)

async function newInformation(name, lastName, email, country, phone, core, skills, age, password, confirmPassword) {
    let foundUserEmail = userEmailLS.id

    let newInfo = {
        id: foundUserEmail,
        userName: name.value,
        coderLastName: lastName.value,
        userEmail: email.value,
        userCountry: country.value,
        coderPhone: phone.value,
        coderCore: core.value,
        coderSkills: skills.value,
        coderAgeExperience: age.value,
        password: password.value
    }



    let responseStatus = await fetch(`http://localhost:3000/authCoders/${foundUserEmail}`,
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newInfo)
        })
    console.log(responseStatus.status)
    if ((responseStatus.status == 200) && (password.value == confirmPassword.value)) {
        console.log(password.value)
        console.log(confirmPassword.value)
        localStorage.setItem("userOnline", JSON.stringify(newInfo))
        alert("The information has been succesfully updated")
    }
    else {
        alert("Password and confirm password are not the same")
    }
}

form[0].addEventListener("submit", (event) => {
        newInformation(name, lastName, email, country, phone, core, skills, age, password, confirmPassword)
        event.preventDefault()
})

