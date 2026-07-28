const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu");
const toggle = document.querySelector(".menu-toggle");

window.addEventListener("scroll", () => {
    navbar.style.background =
        window.scrollY > 60 ? "#000" : "rgba(0,0,0,.65)";
});

// Abrir / cerrar menú
toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
});

// Cerrar menú al seleccionar una opción
document.querySelectorAll(".menu a").forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("active");
    });
});

AOS.init({
    duration:1000,
    once:true
});