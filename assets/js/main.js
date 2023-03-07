'use strict';

/********* DARK/LIGHT THEME********** */
const themeBtn = document.querySelector(".fa-toggle-on");
const body = document.querySelector(".body");

themeBtn.addEventListener("click", showDarkTheme);

function showDarkTheme() {

    themeBtn.classList.toggle("fa-toggle-off");
    themeBtn.classList.toggle("fa-toggle-on");
    body.classList.toggle("body-light-theme");
    cardContainerSelect.classList.toggle("card-light-theme")
}

/************* EXERCISE STARTS HERE ************ */

/***** VARIABILI *******/
const cardContainer = document.querySelector(".ctn-card");

for (let i = 0; i < 6; i++) {
    /***** html elements creation ******/
    const card = document.createElement("li");
    card.classList.add("card");
    cardContainer.append(card);
    const cardTop = document.createElement("div");
    cardTop.classList.add("card-top");
    card.append(cardTop);
    const cardBottom = document.createElement("div");
    cardBottom.classList.add("card-bottom");
    card.append(cardBottom);

}

/*******select html elements ***** */
const cardTopSelect = document.querySelectorAll(".card-top");
const cardBottomSelect = document.querySelectorAll(".card-bottom");
const cardContainerSelect = document.querySelector(".ctn-card")

for (let i = 0; i < 6; i++) {
    const teamInfo = [

        {
            "nome" : `<h3>Wayne Barnett</h3>`,
            "ruolo": `<h4>Founder & Ceo</h4>`,
            "image": `<img src="assets/img/${i}.jpg" alt="">`
        },
        
        {
            "nome" : `<h3>Angela Caroli</h3>`,
            "ruolo": `<h4>Chief Editor</h4>`,
            "image": `<img src="assets/img/${i}.jpg" alt="">`
        },
    
        {
            "nome" : `<h3>Walter Gordon</h3>`,
            "ruolo": `<h4>Office Manager</h4>`,
            "image": `<img src="assets/img/${i}.jpg" alt="">`
        },
    
        {
            "nome" : `<h3>Angela Lopez</h3>`,
            "ruolo": `<h4>Social Media Manager</h4>`,
            "image": `<img src="assets/img/${i}.jpg" alt="">`
        },
    
        {
            "nome" : `<h3>Scott Estrada</h3>`,
            "ruolo": `<h4>Developer</h4>`,
            "image": `<img src="assets/img/${i}.jpg" alt="">`
        },
    
        {
            "nome" : `<h3>Barbara Ramos</h3>`,
            "ruolo": `<h4>Graphic Designer</h4>`,
            "image": `<img src="assets/img/${i}.jpg" alt="">`
        }
    ]

    cardTopSelect[i].innerHTML += teamInfo[i].image;
    cardBottomSelect[i].innerHTML += teamInfo[i].nome + teamInfo[i].ruolo;
}




