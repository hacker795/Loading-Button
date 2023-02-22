// Define a named function called toggleButton
function toggleButton() {
    const searchButtonContent = document.querySelector('#search-button div');
    searchButtonContent.classList.toggle('loading');
  }
const searchButton = document.querySelector('#search-button');


searchButton.addEventListener('click', toggleButton);
  