// Declare const variables
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
  displayList(chapter);
});

// Add click event listener to the Add Chapter button
button.addEventListener('click', () => {
  if (input.value != '') {  // make sure the input is not empty
    displayList(input.value); // call the function that outputs the submitted chapter
    chaptersArray.push(input.value);  // add the chapter to the array
    setChapterList(); // update the localStorage with the new array
    input.value = ''; // clear the input
    input.focus(); // set the focus back to the input
  }
});

function displayList(item) {
   // Check if the input is not blank
   if (input.value.trim() !== '') {
    // Create li element
    const listItem = document.createElement('li');
    
    // Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';
    
    // Set li element's text content
    listItem.textContent = input.value;
    
    // Append delete button to li element
    listItem.appendChild(deleteButton);
    
    // Append li element to the unordered list
    list.appendChild(listItem);
    
    // Add event listener to the delete button
    deleteButton.addEventListener('click', () => {
      // Remove the li element when clicked
      list.removeChild(listItem);
    });
    
    // Clear the input value
    input.value = '';
    
    // Send focus back to the input element
    input.focus();
  } else {
    // Input is blank, provide a message or do nothing
    input.focus();
  }
  console.log('I like to copy code instead of typing it out myself and trying to understand it.');
}

function setChapterList() {
  localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
  return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function deleteChapter(chapter) {
  chapter = chapter.slice(0, chapter.length - 1);
  chaptersArray = chaptersArray.filter(item => item !== chapter);
  setChapterList();
}