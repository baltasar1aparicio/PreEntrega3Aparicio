const titleContact = document.querySelector("#title-contact");
const nameInput = document.querySelector("#name-input");
const cityInput = document.querySelector("#city-input");
const ageInput = document.querySelector("#age-input");
const emailInput = document.querySelector("#email-input");
const messageInput = document.querySelector("#message-input");
const form = document.querySelector("#form");
let subtitleContact = document.querySelector("#subtitle-contact")
const nameBox = document.querySelector("#name-box")
const ageBox = document.querySelector("#age-box")
const cityBox = document.querySelector("#city-box")


form.addEventListener("submit", contactTitleChange);

function contactTitleChange(e) {
    e.preventDefault();

    let nameValue = capitalizeFirstLetter(nameInput.value);

    let userData = {
        name: nameInput.value,
        city: cityInput.value,
        age: ageInput.value,
        email: emailInput.value,
        message: messageInput.value
    };

    localStorage.setItem("name-entered", nameValue)
    localStorage.setItem("user-data", JSON.stringify(userData))

    titleContact.innerText = `Gracias por tu comentario ${nameValue} :)`;

    subtitleContact.remove()
    form.reset()
};

function capitalizeFirstLetter(text) {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

let nameEntered = localStorage.getItem("name-entered")

function removeRedundantData() {
    nameBox.remove()
    cityBox.remove()
    ageBox.remove()
}

const userData = {
    name: nameEntered,
    city: cityInput.value,
    age: ageInput.value,
    email: emailInput.value,
    message: messageInput.value
}

if (nameEntered !== null) {
    titleContact.innerText = `Que bueno verte de nuevo por aquí ${nameEntered} :D`
    subtitleContact.innerText = `¿Quieres dejarnos otro comentario? Adelante!`
    removeRedundantData()
    console.log(userData)
}