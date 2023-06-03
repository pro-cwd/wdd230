// JavaScript code to populate current year and last modified date
const currentYear = new Date().getFullYear();
const currentYearElement = document.getElementById('currentYear');
currentYearElement.textContent = currentYear;

const lastModifiedDate = new Date(document.lastModified);
const lastModifiedElement = document.getElementById('lastModified');
lastModifiedElement.textContent = 'Last modified: ' + lastModifiedDate.toLocaleString();