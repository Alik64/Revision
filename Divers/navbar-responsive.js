const menuMobil = document.querySelector(".hamburger"); // bouton de menu mobile

const nav = document.querySelector(".nav"); // menu avec des liens
const lien = document.querySelectorAll("a.lien"); // [] contenant chaque (<a>) avec le class "lien"

// A chaque fois qu'on appuie sur le menuMobil
menuMobil.addEventListener("click", function () {
    nav.classList.toggle("mobile");
});