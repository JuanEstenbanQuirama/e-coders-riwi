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
userEmailLS = JSON.parse(userEmailLS)
let form = document.getElementsByTagName("form")

function getUser() {
    const data = localStorage.getItem('userOnline')
    let data1 = JSON.parse(data)
    return data1
}

let userInfo = getUser()

function infoIntoForm(data) {
    name.value = data.userName
    industry.value = data.industry
    email.value = data.userEmail
    country.value = data.userCountry
    contact.value = data.userContact
    password.value = data.passwordUser
}

infoIntoForm(userInfo)

async function newInformation(name, industry, email, country, contact, password, confirmPassword) {
    let foundUserEmail = userEmailLS.id

    let newInfo = {
        id: foundUserEmail,
        userName: name.value,
        industry: industry.value,
        userEmail: email.value,
        userCountry: country.value,
        userContact: contact.value,
        passwordUser: password.value
    }



    let responseStatus = await fetch(`http://localhost:3000/authContractors/${foundUserEmail}`,
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
        newInformation(name, industry, email, country, contact, password, confirmPassword)
        event.preventDefault()
})