const contactForm = document.querySelector('.contact-form');
const contactFormStatus = document.getElementById('contactFormStatus');

if (contactForm && contactFormStatus) {
    const showStatus = (message) => {
        contactFormStatus.textContent = message;
        contactFormStatus.hidden = false;
    };

    if (new URLSearchParams(window.location.search).get('contact') === 'sent') {
        showStatus('Thank you. Your enquiry has been sent successfully.');
    }

    contactForm.addEventListener('submit', () => {
        const submitButton = contactForm.querySelector('button[type="submit"]');
        if (submitButton) {
            submitButton.disabled = true;
            submitButton.textContent = 'Sending...';
        }
        showStatus('Sending your enquiry...');
    });
}
