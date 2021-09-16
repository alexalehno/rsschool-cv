"use strict";

const burgerMenu = document.querySelector('.burger__menu');
const nav = document.querySelector('nav');

burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("menu__active");
  nav.classList.toggle("nav-hidden");
});