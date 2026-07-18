// ==========================================
// 1. Mobile Menu Toggle
// ==========================================
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const mobileClose = document.getElementById('mobile-close');
const mobileLinks = document.querySelectorAll('.mobile-link');

function openMenu() {
    mobileMenu.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeMenu() {
    mobileMenu.classList.remove('active');
    document.body.style.overflow = 'auto';
}

if(hamburger) hamburger.addEventListener('click', openMenu);
if(mobileClose) mobileClose.addEventListener('click', closeMenu);

// Close menu when a link is clicked
mobileLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
});

// ==========================================
// 2. Navbar Scroll Effect & Active Link Highlight
// ==========================================
const navbar = document.getElementById('navbar');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link, .mobile-link');

window.addEventListener('scroll', () => {
    // Add blurred background to navbar when scrolling down
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Highlight active section using Intersection Observer
const observerOptions = {
    root: null,
    rootMargin: '-50% 0px -50% 0px', // Trigger when section is half way in viewport
    threshold: 0
};

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const currentId = entry.target.getAttribute('id');
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${currentId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}, observerOptions);

sections.forEach(section => {
    sectionObserver.observe(section);
});

// ==========================================
// 3. Contact Form Submission (AJAX via Formspree/EmailJS)
// ==========================================
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault(); // Prevent page reload
        
        // TODO: Replace this URL with your actual Formspree endpoint URL
        // Example: 'https://formspree.io/f/your_form_id'
        const formEndpoint = 'https://formspree.io/f/YOUR_FORM_ID_HERE'; 

        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        formStatus.textContent = 'Sending...';
        formStatus.className = 'form-status';

        try {
            // Note: If you haven't set up the endpoint yet, this will fail.
            // When testing locally without an endpoint, it will throw an error to the catch block.
            if(formEndpoint.includes('YOUR_FORM_ID_HERE')) {
                throw new Error("Please configure your Formspree endpoint in script.js first.");
            }

            const response = await fetch(formEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                formStatus.textContent = 'Message sent successfully! I will get back to you soon.';
                formStatus.classList.add('status-success');
                contactForm.reset();
            } else {
                const result = await response.json();
                if (Object.hasOwn(result, 'errors')) {
                    formStatus.textContent = result.errors.map(error => error.message).join(', ');
                } else {
                    formStatus.textContent = 'Oops! There was a problem submitting your form.';
                }
                formStatus.classList.add('status-error');
            }
        } catch (error) {
            formStatus.textContent = error.message || 'Oops! There was a problem submitting your form.';
            formStatus.classList.add('status-error');
        }
        
        // Clear message after 5 seconds
        setTimeout(() => {
            formStatus.textContent = '';
            formStatus.className = 'form-status';
        }, 5000);
    });
}
