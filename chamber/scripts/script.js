const hamburger = document.querySelector(".slicknav_collapsed");
const navMenu = document.querySelector(".slicknav_hidden");
const sticks = document.querySelectorAll(".slicknav_icon-bar");

// JavaScript code to populate current year and last modified date
const lastModifiedDate = new Date(document.lastModified);
const lastModifiedElement = document.getElementById('lastModified');
lastModifiedElement.textContent = 'Last modified: ' + lastModifiedDate.toLocaleString();

// Ham Icon
hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("activado")
  sticks.forEach(child => {child.classList.toggle("animado")})
})