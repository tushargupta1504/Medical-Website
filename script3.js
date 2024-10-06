function validateInputs() {
    const fullName = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    
    // Clear previous error messages
    clearErrors();

    // Validation checks
    let isValid = true;

    if (fullName === '') {
        showError('name', 'Name is required');
        isValid = false;
    }

    if (email === '') {
        showError('email', 'Email is required');
        isValid = false;
    } else if (!isValidEmail(email)) {
        showError('email', 'Invalid email format');
        isValid = false;
    }

    if (password === '') {
        showError('password', 'Password is required');
        isValid = false;
    } else if (password.length < 6) {
        showError('password', 'Password should be at least 6 characters');
        isValid = false;
    }

    // Success message if all validations pass
    if (isValid) {
        alert("Registered successfully");
    }

    return isValid;
}

// Helper function to validate email format
function isValidEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
}

// Helper function to display error message for a specific input field
function showError(fieldId, message) {
    const inputField = document.getElementById(fieldId);
    const errorElement = document.createElement('small');
    errorElement.className = 'error-message';
    errorElement.innerText = message;
    inputField.parentNode.appendChild(errorElement);
}

// Helper function to clear all error messages
function clearErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(error => error.remove());
}
