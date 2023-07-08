const url = 'https://pro-cwd.github.io/wdd230/chamber/data/members-directoy.json';
const cards = document.querySelector('#cards');

async function getProphetData(url) {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets);
    displayProphets(data.prophets); // note that we reference the prophets array of the JSON data object, not just the object
}

getProphetData(url);

const displayProphets = (members) => {
  members.forEach((member) => {
    // Create elements to add to the div.cards element
    let card = document.createElement('section');
    let fullName = document.createElement('h2');
    let birthDays = document.createElement('h3');
    let birthPlace = document.createElement('h3');
    let portrait = document.createElement('img');

    // Build the h2 content out to show the prophet's full name
    fullName.textContent = `${member.name} ${member.lastname}`;
    //Build the h3 content out to show the birthdays
    birthDays.textContent = `Date of Birth: ${member.birthdate}`;
    //Build the h3 content out to show the place both
    birthPlace.textContent = `Place of Birth: ${member.birthplace}`;
    // Build the image portrait by setting all the relevant attributes
    portrait.setAttribute('src', member.imageurl);
    portrait.setAttribute('alt', `logotype of ${member.name}`);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '340');
    portrait.setAttribute('height', '440');

    // Append the section(card) with the created elements
    card.appendChild(fullName);
    card.appendChild(birthDays);
    card.appendChild(birthPlace);
    card.appendChild(portrait);

    cards.appendChild(card);
  }); // end of arrow function and forEach loop
}