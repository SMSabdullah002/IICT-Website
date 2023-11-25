// JavaScript for Login Page (login.js)
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get user input
    const usernameInput = document.getElementById('email').value;
    const passwordInput = document.getElementById('password').value;

    // Check if the entered credentials match the stored registration values
    if (usernameInput == registeredEmail && passwordInput == registeredPassword) {
        alert('Login successful!');
        
        // Redirect to the referring page or a default page after successful login
        const referringPage = document.referrer || 'default.html';
        window.location.href = referringPage;
    } else {
        alert('Invalid email or password. Please try again.');
    }
});