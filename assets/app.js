document.addEventListener('DOMContentLoaded', () => {
    
    // Word Animation
    const words = document.querySelector('.word-animation').textContent.split(' ');
    document.querySelector('.word-animation').textContent = '';

    words.forEach((word, index) => {
        const span = document.createElement('span');
        span.textContent = word + ' ';
        span.style.opacity = '0';
        span.style.animation = `fadeInUp 0.5s ease forwards ${index * 0.1}s`;
        document.querySelector('.word-animation').appendChild(span);
    });

    // Enhanced Contact Form
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Animate button on submit
        const submitButton = contactForm.querySelector('button[type="submit"]');
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitButton.disabled = true;
        
        setTimeout(() => {
            console.log('Form submitted:', data);
            
            // Show success message
            submitButton.innerHTML = '<i class="fas fa-check"></i> Sent!';
            submitButton.classList.add('bg-green-600');
            
            // Show custom alert with username and email
            const username = data.name || 'User';
            const email = data.email || 'your.email@example.com';
            alert(`Merci ${username} pour votre message! Veuillez consulter votre boîte mail ${email} pour notre retour!`);
            
            // Reset form after delay
            setTimeout(() => {
                contactForm.reset();
                submitButton.innerHTML = 'Send Message';
                submitButton.classList.remove('bg-green-600');
                submitButton.disabled = false;
            }, 2000);
        }, 1500);
    });


    // Insert current year in the footer
    const currentYear = new Date() .getFullYear();
    document.querySelector('#year').textContent = currentYear;

});