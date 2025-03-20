// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        // Scroll to the section smoothly
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact Form Validation
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
        let valid = true;

        // Validate Name
        const name = document.querySelector('#name');
        if (!name.value) {
            alert('Please enter your name.');
            valid = false;
        }

        // Validate Email
        const email = document.querySelector('#email');
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!email.value || !emailPattern.test(email.value)) {
            alert('Please enter a valid email address.');
            valid = false;
        }

        // Validate Message
        const message = document.querySelector('#message');
        if (!message.value) {
            alert('Please enter a message.');
            valid = false;
        }

        if (!valid) {
            event.preventDefault();  // Prevent form submission if validation fails
        }
    });
}

// Product Add to Cart Action
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', function () {
        alert('Product added to cart!');
    });
});

// Hero Section Buttons Interaction (Optional)
const primaryButton = document.querySelector('.hero-button.primary');
if (primaryButton) {
    primaryButton.addEventListener('click', function () {
        alert('You clicked on Get Started!');
    });
}

const secondaryButton = document.querySelector('.hero-button.secondary');
if (secondaryButton) {
    secondaryButton.addEventListener('click', function () {
        alert('You clicked on Learn More!');
    });
}

// Search Functionality (Optional)
const searchInput = document.querySelector('.hero-search input');
const searchButton = document.querySelector('.hero-search button');
if (searchButton && searchInput) {
    searchButton.addEventListener('click', function () {
        const searchQuery = searchInput.value.trim();
        if (searchQuery) {
            alert('Searching for: ' + searchQuery);
            // Add your actual search functionality here
        } else {
            alert('Please enter a search term.');
        }
    });
}

