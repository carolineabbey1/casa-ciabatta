document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    const successMsg = document.getElementById('success-msg');

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const messageError = document.getElementById('message-error');

    function setError(input, errorEl, message) {
        errorEl.textContent = message;
        input.classList.add('input-error');
    }

    function clearError(input, errorEl) {
        errorEl.textContent = '';
        input.classList.remove('input-error');
    }

    function validate() {
        let valid = true;

        if (nameInput.value.trim() === '') {
            setError(nameInput, nameError, 'Name is required.');
            valid = false;
        } else {
            clearError(nameInput, nameError);
        }

        if (messageInput.value.trim() === '') {
            setError(messageInput, messageError, 'Message is required.');
            valid = false;
        } else {
            clearError(messageInput, messageError);
        }

        if (emailInput.value.trim() === '') {
            setError(emailInput, emailError, 'Email is required.');
            valid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim())) {
            setError(emailInput, emailError, 'Please enter a valid email address.');
            valid = false;
        } else {
            clearError(emailInput, emailError);
        }

        return valid;
    }

    nameInput.addEventListener('input', function () {
        clearError(nameInput, nameError);
    });

    emailInput.addEventListener('input', function () {
        clearError(emailInput, emailError);
    });

    messageInput.addEventListener('input', function () {
        clearError(messageInput, messageError);
    });

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        if (validate()) {
            form.classList.add('hidden');
            successMsg.classList.remove('hidden');
        }
    });
});