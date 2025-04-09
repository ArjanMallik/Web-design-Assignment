/* jshint esversion: 6 */

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

      if (targetSection) {
        // Scroll to the target section smoothly
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start' // Aligns the target section at the top
        });
      } else {
        console.error("Target section not found:", targetId); // Log error if section is not found
      }

      // Toggle the 'active' class to hide the menu after a click (for hamburger menu)
      const navMenu = document.querySelector('nav ul');
      navMenu.classList.remove('active');
    }
    // If it's an external link (e.g., to another HTML page), no smooth scroll, just normal navigation
    else if (this.getAttribute('href').startsWith('http')) {
      window.open(this.getAttribute('href'), '_blank'); // Open external links in a new tab
    }
  });
});

// Optional: Adding ARIA roles for accessibility
document.querySelector('.hamburger').setAttribute('role', 'button');
document.querySelector('.hamburger').setAttribute('aria-expanded', 'false');
document.querySelector('nav').setAttribute('role', 'navigation');
