const menuMobil = document.querySelector(".hamburger"); // bouton de menu mobile

const nav = document.querySelector(".nav"); // menu avec des liens
const lien = document.querySelectorAll("a.lien"); // [] contenant chaque (<a>) avec le class "lien"

// A chaque fois qu'on appuie sur le menuMobil
menuMobil.addEventListener("click", function () {
    nav.classList.toggle("mobile");
});

// chager la class en fonction de la largeur de window

window.addEventListener('resize', () => {
    if (window.innerWidth < 717) {
        nav.classList.remove("desktop");
    }
    if (window.innerWidth > 716) {
        nav.classList.remove("mobile");
        nav.classList.add("desktop");
    }

})