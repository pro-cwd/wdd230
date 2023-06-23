const hamburger = document.querySelector(".slicknav_collapsed");
const navMenu = document.querySelector(".slicknav_hidden");
const sticks = document.querySelectorAll(".slicknav_icon-bar");

// JavaScript code to populate current year and last modified date
const lastModifiedDate = new Date(document.lastModified);
const lastModifiedElement = document.getElementById('lastModified');
lastModifiedElement.textContent = 'Last modified: ' + lastModifiedDate.toLocaleString();

// Ham Icon
hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("activado")
  sticks.forEach(child => {child.classList.toggle("animado")})
})

// main sidebar discover
document.addEventListener('DOMContentLoaded', function() {
  let sidebarContent = document.getElementById('sidebar-content');
  let lastVisit = localStorage.getItem('lastVisit');

  if (!lastVisit) {
    sidebarContent.textContent = 'Welcome! Let us know if you have any questions.';
  } else {
    let currentTime = new Date();
    let previousVisit = new Date(lastVisit);
    let timeDiff = currentTime - previousVisit;
    let daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    if (daysDiff === 0) {
      sidebarContent.textContent = 'Back so soon! Awesome!';
    } else {
      let message = 'You last visited ' + daysDiff + ' day' + (daysDiff === 1 ? '' : 's') + ' ago.';
      sidebarContent.textContent = message;
    }
  }
  // Store the current visit date in localStorage
  localStorage.setItem('lastVisit', new Date());

  
  // generate calendar///////////////


  let calendarEl = document.getElementById('calendar');
  let calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    initialDate: '2023-06-01',
  });
  calendar.render();

    // // Get the calendar element
    // const calendar = document.getElementById("calendar");
  
    // // Set the date to June 2023
    // const date = new Date(2023, 5, 1); // Month is zero-based
  
    // // Format the date as desired
    // const month = date.toLocaleString("default", { month: "long" });
    // const year = date.getFullYear();

    // console.log("aqui indica el mes", month)
    // console.log("aqui indica el ano", year)
  
    // // Display the date in the calendar card
    // calendar.textContent  = `Welcome ${month} ${year}`;
});




