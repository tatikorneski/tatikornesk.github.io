// agrupamos constantes menu de navegacion, el boton de navegacion toggle (cerrado y vista) /
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

// mostrar menu para hcer clic tome verdadero y abra/
if (navToggle) {
  navToggle.addEventListener("click", (sigiente) => {
    navMenu.classList.add("show-menu");
  });
}
// mostrar menu para hcer clic tome verdadero y cierre menu/
if (navClose) {
  navClose.addEventListener("click", (siguiente) => {
    navMenu.classList.remove("show-menu");
  });
}
//cuando hacemos clic todos los nav link el menu  se cierre y quede la pagina en la seccion selecionada
const navLink = document.querySelectorAll(".nav__link");
function linkAction(siguiente) {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}
navLink.forEach((item) => item.addEventListener("click", linkAction));

// la pagian nos pide uan constante con el metodo de la libreria
// espacio de 40 entre elementos , loop infinito y clicleble
//la alineacion es por defecto horizontal 
let homeSwiper = new Swiper(".home-swiper", {
  spaceBetween: 40,
  loop: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

let recomendacionesSwiper = new Swiper(".recomendaciones-swiper", {
  centeredSlides: true,
  slidesPerView: "auto",
  loop: "true",
  spaceBetween: 27,
});

// ESCROOL EN Y , SE INICIE UN BOTON (FLECHA UP) PARA IR HACIA ARRIBA
//
function scrollUp() {
  const scrollup = document.getElementById("scroll-up");
  if (this.scrollY >= 360) scrollup.classList.add("show-scroll");
  else scrollup.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

//SECCIONES ACTIVAS
const sections = document.querySelectorAll("section[id]");
function scrollActive() {
  const scrollY = window.pageYOffset

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute('id')

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
    } else {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
    }
  })
}
window.addEventListener("scroll", scrollActive)
// Mostrar ecroll le indico desde arriba , distancia, duracion, demora y reinicio
const sr = ScrollReveal({
  origin: "top",
  distance: "160px",
  duration: 3500,
  delay: 450,
  reset: true,

}); //clases quiero iniciar con intervalo de inicio
sr.reveal(`.home-swiper,.recomendaciones-swiper, .recomendacionessletter__container`);
sr.reveal(`.category__data, .study__content, .footer__content`, {
  interval: 250,
});
sr.reveal(`.about__data, .download__img`, { origin: "left" });
sr.reveal(`.about__img, .download__data`, { origin: "right" });
