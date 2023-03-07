'use strict';

/********* DARK/LIGHT THEME********** */
const themeBtn = document.querySelector(".fa-toggle-on");
const body = document.querySelector(".body")

themeBtn.addEventListener("click", showDarkTheme);

function showDarkTheme() {

    themeBtn.classList.toggle("fa-toggle-off");
    themeBtn.classList.toggle("fa-toggle-on");
    body.classList.toggle("body-light-theme");
}

/************* EXERCISE STARTS HERE ************ */
// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.

// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto.

// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe.

// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva.

// BONUS 2:
// Organizzare i singoli membri in card/schede.

// Scott Estrada	Developer	scott-estrada-developer.jpg
// Barbara Ramos	Graphic Designer	barbara-ramos-graphic-designer.jpg -->

const teamInfo = [

    {
        "nome" : "Wayne Barnett",
        "ruolo": "Founder & Ceo",
        "image": `<img src="assets/img/lol.jpg" alt="">`
    },
    
    {
        "nome" : "Angela Caroli",
        "ruolo": "Chief Editor",
        "image": `<img src="assets/img/lol}.jpg" alt="">`
    },

    {
        "nome" : "Walter Gordon",
        "ruolo": "Office Manager",
        "image": `<img src="assets/img/lol}.jpg" alt="">`
    },

    {
        "nome" : "Angela Lopez",
        "ruolo": "Social Media Manager",
        "image": `<img src="assets/img/lol}.jpg" alt="">`
    },

    {
        "nome" : "Scott Estrada",
        "ruolo": "Developer",
        "image": `<img src="assets/img/lol}.jpg" alt="">`
    },

    {
        "nome" : "Barbara Ramos",
        "ruolo": "Graphic Designer",
        "image": `<img src="assets/img/lol}.jpg" alt="">`
    }
]

for (let i = 0; i < teamInfo.length; i++) {
    console.log(teamInfo[i]);
}