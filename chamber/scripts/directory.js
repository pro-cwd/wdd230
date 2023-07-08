const url = 'https://pro-cwd.github.io/wdd230/chamber/data/members-directory.json';
const cards = document.querySelector('#cards');

async function getMembersData(url) {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets);
    displayMembers(data.prophets); // note that we reference the prophets array of the JSON data object, not just the object
}

getMembersData(url);

const displayMembers = (members) => {
    members.forEach((member) => {
    // Create elements to add to the article.cards element
    let card = document.createElement('section');
    let name = document.createElement('h2');
    let address = document.createElement('h3');
    let phone = document.createElement('h3');
    let website = document.createElement('h3');
    let slogan = document.createElement('h2');
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
    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);
    card.appendChild(slogan);
    card.appendChild(logo);

    cards.appendChild(card);
  }); // end of arrow function and forEach loop
}