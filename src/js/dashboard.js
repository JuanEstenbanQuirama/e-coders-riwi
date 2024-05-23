(function () { // guardian 
    const userOnline = localStorage.getItem('userOnline')
    
    if(userOnline === null) {
        window.location.href="/"
    } else {
        console.log(userOnline);
    }
})()

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

async function getCoders(filterText) {
    const URLCODERS = "http://localhost:3000/authCoders";
    // Forma la URl que me hace el llamado a la API que trae la info de la base de datos
    const response =  await fetch (`${URLCODERS}${filterText === 'All' ? '' : `?coderCore=${filterText}`}`);
    return await response.json();
};
// Funcion de filtrado
async function createCards(filterText) {
    document.getElementById("products").replaceChildren(); //Me limpia las cards
    const coders = await getCoders(filterText);
    // Proceso de creación de las cards
    for (let coder of coders) {

        // Card
        let card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <div class="container">
                <h5 class="name">${coder.coderName.charAt(0).toUpperCase() + coder.coderName.slice(1).toLowerCase() + " " + coder.coderLastName.charAt(0).toUpperCase() + coder.coderLastName.slice(1).toLowerCase()}</h5>
                <h6 class="core">${coder.coderCore.charAt(0).toUpperCase() + coder.coderCore.slice(1).toLowerCase()}</h6>
            </div>
        `;

        document.getElementById("products").appendChild(card);
    
        // Imagen // Falta
        // let imgContainer = document.createElement("div");
        // imgContainer.classList.add("image-container");
    
        // let image = document.createElement("img");
        // image.setAttribute("src", coder.userImage);
        // imgContainer.appendChild(image);
        // card.appendChild(imgContainer);
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
        }
    });
};

setActiveBtn('All');
createCards('All');


// Función de Search por skills, en la misma función de getCoders 