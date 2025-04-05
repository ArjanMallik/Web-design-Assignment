// DOMContentLoaded ensures the DOM is fully loaded before running JavaScript
document.addEventListener('DOMContentLoaded', function () {
  
    // Toggle navigation menu for mobile
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
  
    navToggle.addEventListener('click', function () {
      navMenu.classList.toggle('active');
    });
  
    // Example form validation (if you have a contact form)
    const form = document.querySelector('#contact-form');
    form.addEventListener('submit', function (e) {
      e.preventDefault(); // Prevent the default form submission
      
      const name = document.querySelector('#name').value;
      const email = document.querySelector('#email').value;
  
      // Simple validation
      if (!name || !email) {
        alert('Please fill out all fields');
      } else {
        alert('Form submitted successfully!');
        form.reset(); // Reset form fields
      }
    });
  
  });
  