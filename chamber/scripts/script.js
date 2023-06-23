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
});

// Function to get the name of the month
function getMonthName(month) {
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return monthNames[month];
}

document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth'
  });
  calendar.render();
});


// // Function to create a calendar card
// function createCalendarCard(year, month) {
//   const container = document.getElementById('calendar');
//   const card = document.createElement('div');
//   card.classList.add('calendar-card');

//   const header = document.createElement('h2');
//   header.textContent = getMonthName(month) + ' ' + year;
//   card.appendChild(header);

//   // ... Add your calendar content here ...

//   container.appendChild(card);
// }
// // Get the current date
// const currentDate = new Date();
// const currentYear = currentDate.getFullYear();
// const currentMonth = currentDate.getMonth();

// // Call the createCalendarCard function with the current year and month
// createCalendarCard(currentYear, currentMonth);






