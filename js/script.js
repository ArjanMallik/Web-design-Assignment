// Select all the navigation links
const navLinks = document.querySelectorAll('nav ul li a');

// Add event listener to each navigation link
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    // Only prevent default if it's an internal link and you want smooth scrolling
    if (this.getAttribute('href').startsWith('#')) {
      e.preventDefault(); // Prevent the default link behavior for internal links only

      const targetId = this.getAttribute('href').substring(1); // Get the target section's id
      const targetSection = document.getElementById(targetId); // Get the target section element

      // Scroll to the target section smoothly
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start' // Aligns the target section at the top
      });

      // Toggle the 'active' class to hide the menu after a click (for hamburger menu)
      const navMenu = document.querySelector('nav ul');
      navMenu.classList.remove('active');
    }
    // If it's an external link (e.g., to another HTML page), no smooth scroll, just normal navigation
  });
});
