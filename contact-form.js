// Contact form handler
const form = document.getElementById('contact-form');
const submitBtn = document.querySelector('.submit-btn');
const formGroup = document.querySelectorAll('.form-group');

// Add validation
function validateForm() {
    let isValid = true;
    formGroup.forEach(group => {
        const input = group.querySelector('input, textarea');
        if (!input.value.trim()) {
            isValid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });
    return isValid;
}

// Handle form submission
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    if (!validateForm()) {
        alert('Please fill in all fields before submitting.');
        return;
    }
    
    // Show loading state
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    
    // Simulate form submission
    setTimeout(() => {
        alert('Thank you for your message! I will get back to you soon.');
        form.reset();
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Message';
    }, 1500);
});

// Add input validation styles
formGroup.forEach(group => {
    const input = group.querySelector('input, textarea');
    
    input.addEventListener('input', function() {
        if (this.value.trim()) {
            this.classList.remove('error');
        }
    });
});
