// Declare const variables
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Add click event listener to the Add Chapter button
button.addEventListener('click', () => {
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
});
