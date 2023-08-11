// Get references to the menu elements
const menuToggle = document.getElementById('menu-toggle');
const mainNav = document.getElementById('main-nav');

// Add event listener to toggle the navigation menu
menuToggle.addEventListener('click', () => {
  mainNav.classList.toggle('show-nav');
});
