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

// Automatically set the current timestamp value
let timestampField = document.getElementById('timestamp');
let currentTimestamp = new Date().toISOString();
timestampField.value = currentTimestamp;

//BANNER MON - WED- FRI

document.addEventListener("DOMContentLoaded", function() {
  var banner = document.getElementById("banner");
  var closeButton = document.getElementById("close-btn");
  
  // Check if current day is Monday, Tuesday, or Wednesday
  var currentDate = new Date();
  var currentDay = currentDate.getDay();
  if (currentDay >= 1 && currentDay <= 3) {
    banner.style.display = "block";
  }
  
  // Close the banner when the close button is clicked
  closeButton.addEventListener("click", function() {
    banner.style.display = "none";
  });
});






