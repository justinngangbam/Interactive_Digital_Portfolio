// Auto-expand textarea in contact form
function autoExpand(textarea) {
    // Reset height to shrink if needed
    textarea.style.height = 'auto';
    // Set height to scrollHeight, but not more than max-height
    const maxHeight = parseInt(window.getComputedStyle(textarea).maxHeight) || 300;
    textarea.style.height = Math.min(textarea.scrollHeight, maxHeight) + 'px';
}

document.addEventListener('DOMContentLoaded', function() {
    // Attach autoExpand to all .auto-expand-textarea elements
    document.querySelectorAll('.auto-expand-textarea').forEach(function(textarea) {
        textarea.addEventListener('input', function() {
            autoExpand(this);
        });
        // Initial height adjustment
        autoExpand(textarea);
    });

    // Reveal elements on scroll
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        for (let i = 0; i < revealElements.length; i++) {
            const elementTop = revealElements[i].getBoundingClientRect().top;
            const elementVisible = 150; // Distance from bottom of viewport to trigger animation

            if (elementTop < windowHeight - elementVisible) {
                revealElements[i].classList.add('active');
            } else {
                revealElements[i].classList.remove('active'); // Optional: remove to re-animate on scroll up
            }
        }
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check on page load

    // Contact Form Handling (Prevents default and shows alert)
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevents the default form submission

        // Basic validation
        const name = this.elements['name'].value;
        const email = this.elements['email'].value;
        const message = this.elements['message'].value;

        if (!name || !email || !message) {
            alert('Please fill out all fields.');
            return;
        }

        // To make this form actually send an email, you'll need a backend service.
        // For now, we'll just show a success message.
        alert('Thank you for your message! I will get back to you soon.');
        this.reset(); // Clears the form fields
    });

});