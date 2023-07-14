const membersURL = "https://pro-cwd.github.io/wdd230/chamber/data/members-directory.json";
const memberCard = document.querySelector('#output');


async function getMembersJson() {
  const request = await fetch(membersURL);
  const response = await request.json();

  return response;
}


async function main () {
  const members = await getMembersJson();
  const member = members.members;
  const randomObjects = getRandomElements(member, 2);

  randomObjects.forEach((member) => {
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

    memberCard.appendChild(card);
  }); // end of arrow function and forEach loop
}

main();

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

  return shuffled.slice(0, count);
}