const hamburger = document.querySelector(".slicknav_icon");
const navMenu = document.querySelector(".slicknav_hidden");

// JavaScript code to populate current year and last modified date
const lastModifiedDate = new Date(document.lastModified);
const lastModifiedElement = document.getElementById('lastModified');
lastModifiedElement.textContent = 'Last modified: ' + lastModifiedDate.toLocaleString();

// Ham Icon
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})