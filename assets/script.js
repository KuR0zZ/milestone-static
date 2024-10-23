const loginLink = document.querySelector('.login-show');
const registerLink = document.querySelector('.register-show');

loginLink.addEventListener('click', () => {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('register-form').style.display = 'none';
});

registerLink.addEventListener('click', () => {
    document.getElementById('register-form').style.display = 'block';
    document.getElementById('login-form').style.display = 'none';
});

