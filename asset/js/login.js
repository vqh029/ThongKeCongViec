

// Thay doi icon Hien mat khau
const togglePassword = document.querySelector('#toggle-password');
const password = document.querySelector('#Password');

togglePassword.addEventListener('click', function(e){
    const type = password.getAttribute('type') === 'password' ?'text' : 'password';
    password.setAttribute('type', type);
    this.classList.toggle('fa-eye-slash');
});

