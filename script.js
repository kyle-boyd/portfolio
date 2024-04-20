// Function to handle the intersection of observed elements
const handleIntersection = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target); // Stop observing once the element is visible
    }
  });
};



// Create a new Intersection Observer
const observer = new IntersectionObserver(handleIntersection, {
  threshold: 0.3 // Trigger when 20% of the element is visible
});

// Get all sections
const sections = document.querySelectorAll('.animatesection');

// Observe each section
sections.forEach(section => {
  observer.observe(section);
});



 // Check if content is unlocked in localStorage
let isContentUnlocked = localStorage.getItem('contentUnlocked') === 'true';

// Function to toggle content visibility
function toggleContentVisibility() {
    const elements = document.querySelectorAll('.superSecret');
    elements.forEach(element => {
        if (isContentUnlocked) {
            element.style.display = 'block'; // Show content if unlocked
        } else {
            element.style.display = 'none'; // Hide content if locked
        }
    });
    
    const mainelements = document.querySelectorAll('.pwmain');
    mainelements.forEach(element => {
        if (isContentUnlocked) {
            element.style.display = 'none'; // Show content if unlocked
        } else {
            element.style.display = 'block'; // Hide content if locked
        }
    });
}

        // Function to handle password submission
function handlePasswordSubmission() {
    const passwordInput = document.getElementById('password');
    const password = passwordInput.value.trim(); // Trim whitespace
    if (password === 'kyleboyd2024') {
        localStorage.setItem('contentUnlocked', 'true'); // Unlock content
        isContentUnlocked = true; // Update flag
        toggleContentVisibility(); // Update content visibility immediately
    } else {
        const errorMsg = document.getElementById('errorMsg');
        errorMsg.textContent = "Incorrect password. Please try again."; // Show error message
    }
}
        // Event listener for password submission
        document.getElementById('submitBtn').addEventListener('click', handlePasswordSubmission);

        // Check content visibility on page load
        window.addEventListener('load', toggleContentVisibility);
        
        // Function to reset the content to hidden
function resetContent() {
    localStorage.setItem('contentUnlocked', 'false'); // Unlock content
    isContentUnlocked = false; // Update flag
    toggleContentVisibility(); // Update content visibility immediately
    };

// Example of triggering the resetContent() function
		document.getElementById('resetButton').addEventListener('click', function() {
    resetContent();
});

// Function to handle keypress event on password input field
document.getElementById('password').addEventListener('keypress', function(event) {
    // Check if the pressed key is Enter (key code 13)
    if (event.key === 'Enter') {
        handlePasswordSubmission(); // Submit password
    }
});


// Check if the URL ends with '/'
if (window.location.pathname.endsWith('/')) {
    // Redirect to the corresponding HTML file
    const fileName = window.location.pathname.split('/').filter(Boolean).pop();
    window.location.href = fileName + '.html';
}


