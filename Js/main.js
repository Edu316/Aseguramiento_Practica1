const form = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const messageDiv = document.getElementById('message');
const btn = document.getElementById('btn');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    // Validación final: email válido y password válido
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailValid = emailPattern.test(username);
    const passwordValid = password.length >= 5;

    if (emailValid && passwordValid) {
        messageDiv.textContent = "Login successful!";
        messageDiv.className = "success";
        window.location.href = "html/dashboard.html";
    } else {
        messageDiv.textContent = "Login failed. Please try again.";
        messageDiv.className = "error";
    }
});
