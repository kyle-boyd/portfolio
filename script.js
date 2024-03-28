// Function to handle the intersection of observed elements
const handleIntersection = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show'); // Remove the 'show' class when not intersecting
    }
  });
};

// Create a new Intersection Observer
const observer = new IntersectionObserver(handleIntersection, {
  threshold: 0.2 // Trigger when 20% of the element is visible
});

// Get all sections
const sections = document.querySelectorAll('.animatesection');

// Observe each section
sections.forEach(section => {
  observer.observe(section);
});


$(document).ready(function() {
    $('#submitBtn').click(function(e) {
        e.preventDefault();
        var enteredPassword = $('#password').val();
        var correctPassword = "kyleboyd2024"; // Change this to your desired password

        if (enteredPassword === correctPassword) {
            window.location.href = "protected_page.html";
        } else {
            $('#errorMsg').text("Incorrect password. Please try again.");
        }
    });
});

