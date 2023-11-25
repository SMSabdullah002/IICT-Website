// JavaScript for Registration Page (registration.js)
var registeredName;
var registeredEmail;
var registeredPassword;

function register() {
    // Get input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    // Validate input data
    if (name && email && password && confirmPassword && password === confirmPassword) {
        // Store registration data in variables
        registeredName = name;
        registeredEmail = email;
        registeredPassword = password;

        // Registration successful, you can add logic to store the registration data
        alert('Registration successful!');

        // Redirect to login page after successful registration
        window.location.href = '/login.html';
    } else {
        alert('Please fill in all fields and make sure passwords match.');
    }
}
