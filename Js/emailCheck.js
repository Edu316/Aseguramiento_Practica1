(function() {
    const form = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const btn = document.getElementById('btn')
const messageDiv = document.getElementById('message');

function emailItsValid(email){
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}
usernameInput.addEventListener('input', ()=> {
    const email=usernameInput.value;
    if (!emailItsValid(email)){
        messageDiv.textContent= 'Invalid email format';
        btn.disabled =true;
    }else{
        messageDiv.textContent= 'Email format looks good.';
        btn.disabled=false;
    }
});






})();
