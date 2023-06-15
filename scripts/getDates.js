const currentYear = new Date().getFullYear();
const currentYearElement = document.getElementById('currentYear');
currentYearElement.textContent = currentYear;
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

// JavaScript code to populate current year and last modified date
const lastModifiedDate = new Date(document.lastModified);
const lastModifiedElement = document.getElementById('lastModified');
lastModifiedElement.textContent = 'Last modified: ' + lastModifiedDate.toLocaleString();

// Ham Icon
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

// darkmode
modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("☑️")) {
		main.style.background = "#212121";
		main.style.color = "#fff";
		modeButton.textContent = "❎";
	} else {
		main.style.background = "#eee";
		main.style.color = "#000";
		modeButton.textContent = "☑️";
	}
});
