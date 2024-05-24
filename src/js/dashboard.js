// (function () { // guardian 
//     const userOnline = localStorage.getItem('userOnline')
    
//     if(userOnline === null) {
//         window.location.href="/"
//     } else {
//         console.log(userOnline);
//     }
// })()

const btnLogout = document.getElementById('btn-logout')

btnLogout.addEventListener('click', () => {
    localStorage.removeItem("userOnline")
    window.location.href="/"

})

function getData () {
    let res = JSON.parse(localStorage.getItem('userOnline'))
    console.log(res);
}

getData()