document.addEventListener('DOMContentLoaded', () => {
    
    // // (function () { // guardian 
    // //     const userOnline = localStorage.getItem('userOnline')

    // //     if(userOnline === null) {
    // //         window.location.href="/"
    // //     } else {
    // //         console.log(userOnline);
    // //     }
    // // })()

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
        console.log(coders)
        // Proceso de creación de las cards
        for (let coder of coders) {

            // Card
            let card = document.createElement("div");
            card.classList.add("card");
            card.innerHTML = ``
            card.innerHTML = `
            <article class="container">
                <figure class="card-img">
                    <img src="${coder.coderImage}" alt="Image coder">
                </figure>
                <h5 class="name card-title">${coder.coderName.charAt(0).toUpperCase() + coder.coderName.slice(1).toLowerCase() + " " + coder.coderLastName.charAt(0).toUpperCase() + coder.coderLastName.slice(1).toLowerCase()}</h5>
                <h6 class="core card-subtitle mb-2">${coder.coderCore.charAt(0).toUpperCase() + coder.coderCore.slice(1).toLowerCase()}</h6>
                <p class="skills text-center">${coder.coderSkills}</p>
                <div class="card-footer">
                    <button type="button" class="card-btn" data-coder-id="${coder.id}" id="card-btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Get in touch</button>
                </div>
            </article>
        `;
            document.getElementById("products").appendChild(card);
        };
        document.querySelectorAll('.card-btn').forEach(button => {
            button.addEventListener("click", (event) => {
                let coderId = event.target.getAttribute('data-coder-id');
                // handleButtonClick(coderId);
                console.log(coderId)
            });
        });
        // function handleButtonClick(coderId) {
        //     const coder = coders.find(coder => coder.id === coderId);
        //     if (coder) {
        //         console.log(coder); 
        //     }
        // }
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

    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search');

    searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            const filterText = searchInput.value;
            createCards(filterText);
        }
    });

    searchButton.addEventListener('click', () => {
        const filterText = searchInput.value;
        createCards(filterText);
    });
});