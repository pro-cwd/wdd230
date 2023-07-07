const baseURL = "https://pro-cwd.github.io/wdd230/";
const linksURL = "https://pro-cwd.github.io/wdd230/data/links.json";
const links = document.querySelector('#links');


async function getLinks(linksURL) {
    const response = await fetch(linksURL);
    const data = await response.json();
    //console.log(data);
    displayLinks(data);
  }
  
  getLinks(linksURL);

  const displayLinks = (data) => {
    Object.keys(data).forEach(weeks => {
      // Create elements to add to the div.cards element
        let li = document.createElement('li');
        let anchor = document.createElement('a');
        let week = document.createElement('h4');
        let title = document.createElement('h4');
  
        week.textContent = `${weeks}: `;
        title.textContent = `${weeks}: |`;
        anchor.setAttribute('href', weeks[1].url);
  

        li.appendChild(week);
        li.appendChild(anchor);
        anchor.appendChild(title);
  
        links.appendChild(li);
    }); // end of arrow function and forEach loop
  }