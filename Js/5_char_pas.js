(function() {
    const form = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const btn = document.getElementById('btn');
    const messageDiv = document.getElementById('message');

    messageDiv.setAttribute('role', 'alert');
    messageDiv.setAttribute('aria-live', 'assertive');

    function showMessage(text, type = 'info') {
        messageDiv.textContent = text;
        messageDiv.className = type;
    }

    // ✅ Validación: mínimo 8 caracteres y al menos 1 mayúscula
    function validatePassword(password) {
        const hasMinLength = password.length >= 8;
        const hasUpperCase = /[A-Z]/.test(password);
        return hasMinLength && hasUpperCase;
    }

    function isPassword(pwd) {
        return pwd.length >= 5;
    }

    passwordInput.addEventListener('input', () => {
        const password = passwordInput.value;

        if (!validatePassword(password)) {
            showMessage('Password must be at least 8 characters and contain 1 uppercase letter');
            btn.disabled = true;
        } else {
            showMessage('Password is valid', 'success');
            btn.disabled = false;
        }
    });
})();
