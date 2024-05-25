<<<<<<< HEAD
(function () { // guardian 
    const userOnline = localStorage.getItem('userOnline');

    if (userOnline === null) {
        window.location.href = "/";
    } else {
        console.log(userOnline);
    };
})();
=======
// (function () { // guardian 
//     const userOnline = localStorage.getItem('userOnline')
    
//     if(userOnline === null) {
//         window.location.href="/"
//     } else {
//         console.log(userOnline);
//     }
// })()
>>>>>>> 3474ad64b3fe099d462d4094fba0e1b927dfa6e6

const btnLogout = document.getElementById('btn-logout');

btnLogout.addEventListener('click', () => {
    localStorage.removeItem("userOnline");
    window.location.href = "/";

});

function getData() {
    let res = JSON.parse(localStorage.getItem('userOnline'));
    console.log(res);
};

getData();

// Escucha del botón de búsqueda
// document.getElementById('search').addEventListener('click', async () => {
//     const getSkills = document.getElementById('search-input').value;
//     await createCards(getSkills);
// });

// // Escucha de la tecla 'Enter' en el campo de entrada
// document.getElementById('search-input').addEventListener('keyup', async (event) => {
//     if (event.key === 'Enter') {
//         const getSkills = event.target.value;
//         await createCards(getSkills);
//     }
// });

// async function getSkills(skills) {
//     const URLCODERS = "http://localhost:3000/authCoders";
//     const response = await fetch(`${URLCODERS}${skills === 'All' ? '' : `?coderSkills=${skills}`}`);
//     return await response.json();
// };

async function getCoders(filterText) {
    const URLCODERS = "http://localhost:3000/authCoders";
    // Forma la URl que me hace el llamado a la API que trae la info de la base de datos
    const response = await fetch(`${URLCODERS}${filterText === 'All' ? '' : `?coderCore=${filterText}`}`);
    return await response.json();
};
// Funcion de filtrado
async function createCards(filterText) {
    document.getElementById("products").replaceChildren(); // Limpia las cards
    const coders = await getCoders(filterText);
    // Proceso de creación de las cards
    for (let coder of coders) {

        // Card
        let card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <div class="card">
                <figure class="card-img">
                    <img src="${coder.userImage}" alt="Image coder">
                </figure>
                <h5 class="name card-title">${coder.coderName.charAt(0).toUpperCase() + coder.coderName.slice(1).toLowerCase() + " " + coder.coderLastName.charAt(0).toUpperCase() + coder.coderLastName.slice(1).toLowerCase()}</h5>
                <h6 class="core card-subtitle">${coder.coderCore.charAt(0).toUpperCase() + coder.coderCore.slice(1).toLowerCase()}</h6>
                <p class="skills">${coder.coderSkills}</p>
                <hr class="card-divider">
                <div class="card-footer">
                    <div class="card-price"><span>$</span> 123.45</div>
                        <button class="card-btn">Get in touch</button>
                    </div>
                </div>
            </div>
        `;
        document.getElementById("products").appendChild(card);
    };

};

const buttons = document.querySelectorAll(".button-tag");

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const filterText = button.innerText;
        createCards(filterText);
        setActiveBtn(filterText);
    });
});

// Funcion para botones activos o inactivos
function setActiveBtn(tag) {
    buttons.forEach((button) => {
        if (tag.toUpperCase() == button.innerText.toUpperCase()) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        };
    });
};

setActiveBtn('All');
createCards('All');