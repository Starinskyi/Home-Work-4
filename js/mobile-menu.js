const mobileMenu = document.querySelector(".mobile-menu");
const menuBtnOpen = document.querySelector(".menu-btn-open");
const menuBtnClose = document.querySelector(".menu-btn-close");
const mobileMenuLink = document.getElementById("mobile-link-1");
const mobileMenuLink2 = document.getElementById("mobile-link-2");
const mobileMenuLink3 = document.getElementById("mobile-link-3");
const mobileMenuLink4 = document.getElementById("mobile-link-4");

const toggleMenu = () => mobileMenu.classList.toggle("is-open");

menuBtnOpen.addEventListener("click", toggleMenu);
menuBtnClose.addEventListener("click", toggleMenu);
mobileMenuLink.addEventListener("click", toggleMenu);
mobileMenuLink2.addEventListener("click", toggleMenu);
mobileMenuLink3.addEventListener("click", toggleMenu);
mobileMenuLink4.addEventListener("click", toggleMenu);
