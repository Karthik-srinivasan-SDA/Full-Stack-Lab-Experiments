// Show Login Modal
function showLoginModal() {
    document.getElementById('login-modal').style.display = 'block';
}

// Hide Login Modal
function hideLoginModal() {
    document.getElementById('login-modal').style.display = 'none';
}

// Handle Login
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Dummy authentication logic
    if (username === 'student' && password === 'password') {
        alert('Login successful!');
        document.getElementById('login-btn').style.display = 'none';
        document.getElement
    }
})