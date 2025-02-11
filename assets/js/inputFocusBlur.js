const inputs = document.querySelectorAll('.form-group input, .form-group textarea');

inputs.forEach(input => {
    input.classList.add('border');

    input.addEventListener('focus', () => {
        input.classList.add('focus');
    });
    
    input.addEventListener('blur', () => {
        input.classList.remove('focus');
    });
});