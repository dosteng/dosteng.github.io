const navbar = document.getElementById("navbar");
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const overlay = document.getElementById("overlay");

/* SCROLL EFFECT */
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

/* HAMBURGER TOGGLE */
hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
  overlay.classList.toggle("active");
});

/* CLOSE ON OVERLAY CLICK */
overlay.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
  overlay.classList.remove("active");
});