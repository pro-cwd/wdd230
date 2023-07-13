const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");
const display = document.querySelector(".article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridButton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listButton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}