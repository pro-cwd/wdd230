// Assuming your JSON file is named "data.json" and located in the same directory as your HTML file
const jsonFile = "https://pro-cwd.github.io/wdd230/chamber/data/members-directory.json";
const cards = document.querySelector('#cards');

window.onload = async function () {
  const jsonData = await fetchJSONData(jsonFile);
  selectRandomItems(jsonData);
};
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
  //console.log(randomItems);
   displayMembers(randomItems)
  // Or update the HTML content with the selected items' properties
  // document.getElementById("output1").textContent = randomItems[0].name;
  // document.getElementById("output2").textContent = randomItems[1].name;
}

const displayMembers = (members) => {
  members.forEach((member) => {
  // Create elements to add to the article.cards element
  let card = document.createElement('section');
  let name = document.createElement('h3');
  let address = document.createElement('h5');
  let phone = document.createElement('h5');
  let website = document.createElement('h5');
  let slogan = document.createElement('h3');
  let logo = document.createElement('img');

  name.textContent = `${member.name}`;
  address.textContent = `Address: ${member.address}`;
  phone.textContent = `Phone: ${member.phone}`;
  website.textContent = `${member.website}`;
  slogan.textContent = `${member.slogan}`;
  logo.setAttribute('src', member.image);
  logo.setAttribute('alt', `logotype of ${member.name}`);
  logo.setAttribute('loading', 'lazy');
  logo.setAttribute('width', '440');
  logo.setAttribute('height', '340');

  // Append the section(card) with the created elements
  card.appendChild(logo);
  card.appendChild(name);
  card.appendChild(slogan);
  card.appendChild(address);
  card.appendChild(phone);
  card.appendChild(website);

  cards.appendChild(card);
});
}


// Load JSON data and select 2 random items on page load

alert("hola mundo")
