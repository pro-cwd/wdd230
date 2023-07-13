// Assuming your JSON file is named "data.json" and located in the same directory as your HTML file
const jsonFile = "https://pro-cwd.github.io/wdd230/chamber/data/members-directory.json";

// Function to fetch JSON data
async function fetchJSONData(file) {
  try {
    const response = await fetch(file);
    if (!response.ok) {
      throw new Error("Error loading JSON data");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

// Function to select 2 random items from the JSON data
function selectRandomItems(data) {
  const randomItems = [];
  while (randomItems.length < 2) {
    const randomIndex = Math.floor(Math.random() * data.length);
    const randomItem = data[randomIndex];
    if (!randomItems.includes(randomItem)) {
      randomItems.push(randomItem);
    }
  }

  // Use the randomly selected items as desired
  console.log(randomItems);
  // Or update the HTML content with the selected items' properties
  // document.getElementById("output1").textContent = randomItems[0].name;
  // document.getElementById("output2").textContent = randomItems[1].name;
}

// Load JSON data and select 2 random items on page load
window.onload = async function () {
  const jsonData = await fetchJSONData(jsonFile);
  selectRandomItems(jsonData);
};
