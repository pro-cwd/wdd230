
const urlAdvert = 'https://pro-cwd.github.io/wdd230/chamber/data/prueba.json'
// Read the JSON file
fetch(urlAdvert)
.then(response => response.json())
.then(data => {
  // Randomly select two objects
  const randomObjects = getRandomElements(data, 2);

  // Display the selected objects
  randomObjects.forEach(obj => {
    const element = document.createElement('p');
    element.textContent = JSON.stringify(obj);
    document.getElementById('output').appendChild(element);
  });
})
.catch(error => console.error(error));

// Function to get random elements from an array
function getRandomElements(array, count) {
const shuffled = array.slice();
let i = array.length;
let temp;
let index;

while (i--) {
  index = Math.floor((i + 1) * Math.random());
  temp = shuffled[index];
  shuffled[index] = shuffled[i];
  shuffled[i] = temp;
}
console.log("esto es ", shuffled)

return shuffled.slice(0, count);
}