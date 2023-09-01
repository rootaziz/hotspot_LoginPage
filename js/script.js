const passwordInput = document.getElementById('password');
const passwordToggle = document.getElementById('password-toggle');

passwordToggle.addEventListener('click', function () {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    passwordToggle.textContent = 'Masquer';
  } else {
    passwordInput.type = 'password';
    passwordToggle.textContent = 'Afficher';
  }
});
