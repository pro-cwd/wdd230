// JavaScript code to populate current year and last modified date
const lastModifiedDate = new Date(document.lastModified);
const lastModifiedElement = document.getElementById('lastModified');
lastModifiedElement.textContent = 'Last modified: ' + lastModifiedDate.toLocaleString();
