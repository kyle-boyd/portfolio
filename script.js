// Parallax scrolling effect for hero section
function initParallax() {
  const heroSection = document.getElementById('hero-parallax');
  const heroBackground = heroSection ? heroSection.querySelector('.hero-background') : null;
  
  if (!heroSection || !heroBackground) {
    return;
  }
  
  // Force hardware acceleration and ensure transform is set
  heroBackground.style.willChange = 'transform';
  heroBackground.style.backfaceVisibility = 'hidden';
  heroBackground.style.perspective = '1000px';
  
  let ticking = false;
  let lastScrollY = 0;
  
  function updateParallax() {
    try {
      // Use window.scrollY (modern) with fallback to pageYOffset
      const scrolled = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;
      
      // Check if scroll value actually changed
      if (scrolled === lastScrollY) {
        ticking = false;
        return;
      }
      
      lastScrollY = scrolled;
      
      // Only apply parallax if hero section is in viewport
      const heroRect = heroSection.getBoundingClientRect();
      if (heroRect.bottom > 0) {
        const parallaxValue = scrolled * 0.5;
        
        // Apply with both standard and vendor prefixes for maximum compatibility
        heroBackground.style.transform = `translate3d(0, ${parallaxValue}px, 0)`;
        heroBackground.style.webkitTransform = `translate3d(0, ${parallaxValue}px, 0)`;
        heroBackground.style.msTransform = `translate3d(0, ${parallaxValue}px, 0)`;
      }
    } catch (e) {
      // Silently fail if parallax encounters an error
    }
    
    ticking = false;
  }
  
  function requestTick() {
    if (!ticking) {
      ticking = true;
      
      // Try requestAnimationFrame with fallback to setTimeout
      if (window.requestAnimationFrame) {
        requestAnimationFrame(updateParallax);
      } else {
        setTimeout(updateParallax, 16);
      }
    }
  }
  
  // Try both passive and non-passive listeners for Brave compatibility
  try {
    window.addEventListener('scroll', requestTick, { passive: true });
  } catch (e) {
    window.addEventListener('scroll', requestTick, false);
  }
  
  // Also listen to document scroll for Brave
  try {
    document.addEventListener('scroll', requestTick, { passive: true });
  } catch (e) {
    document.addEventListener('scroll', requestTick, false);
  }
  
  // Initial call
  setTimeout(updateParallax, 100);
}

// Call initialization when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initParallax);
} else {
  initParallax();
}

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
    // Only apply password protection if there's a password section on the page
    const hasPasswordSection = document.querySelector('.pwmain') !== null;
    
    if (!hasPasswordSection) {
        // No password section exists, show all content
        const elements = document.querySelectorAll('.superSecret');
        elements.forEach(element => {
            element.style.display = 'block';
        });
        return;
    }
    
    // Password section exists, apply lock/unlock logic
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
            element.style.display = 'none'; // Hide password screen if unlocked
        } else {
            element.style.display = 'block'; // Show password screen if locked
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
        // Event listener for password submission (only if element exists)
        const submitBtn = document.getElementById('submitBtn');
        if (submitBtn) {
            submitBtn.addEventListener('click', handlePasswordSubmission);
        }

        // Check content visibility on page load
        window.addEventListener('load', toggleContentVisibility);
        
        // Function to reset the content to hidden
function resetContent() {
    localStorage.setItem('contentUnlocked', 'false'); // Unlock content
    isContentUnlocked = false; // Update flag
    toggleContentVisibility(); // Update content visibility immediately
    };

// Example of triggering the resetContent() function
		const resetButton = document.getElementById('resetButton');
        if (resetButton) {
            resetButton.addEventListener('click', function() {
                resetContent();
            });
        }

// Function to handle keypress event on password input field
const passwordInput = document.getElementById('password');
if (passwordInput) {
    passwordInput.addEventListener('keypress', function(event) {
        // Check if the pressed key is Enter (key code 13)
        if (event.key === 'Enter') {
            handlePasswordSubmission(); // Submit password
        }
    });
}


// Check if the URL ends with '/' and redirect appropriately
if (window.location.pathname.endsWith('/') && window.location.pathname !== '/') {
    // Redirect to the corresponding HTML file (only for subdirectories, not root)
    const fileName = window.location.pathname.split('/').filter(Boolean).pop();
    if (fileName) {
        window.location.href = fileName + '.html';
    }
}

// Update active state for navigation (both new menu-nav and legacy upper-left-nav)
(function() {
    const navItems = document.querySelectorAll('.menu-nav .nav-item, .upper-left-nav .nav-item');
    const currentPath = window.location.pathname;
    const currentHash = window.location.hash;

    // Set initial active state
    navItems.forEach(item => {
        const href = item.getAttribute('href');
        
        // Remove active class from all items
        item.classList.remove('active');
        
        // Check if this item should be active
        if (currentHash && href === currentHash) {
            item.classList.add('active');
        } else if (!currentHash && (href === '/' || href === '/index.html' || href === 'index.html')) {
            item.classList.add('active');
        } else if (currentPath.includes(href) && href !== '/' && href !== '#') {
            item.classList.add('active');
        }
    });

    // Handle click events to add selected state
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            // Remove selected and active from all items
            navItems.forEach(navItem => {
                navItem.classList.remove('selected', 'active');
            });
            
            // Add selected state to clicked item
            this.classList.add('selected');
        });
    });
})();



