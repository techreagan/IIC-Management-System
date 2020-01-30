const form = document.querySelector('#form');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

function validateEmail() {
  const re = /^[a-z0-9\D]{3,}$/i;

  if (!re.test(email.value)) {
    email.classList.add('is-invalid');
    return false;
  } else {
    email.classList.remove('is-invalid');
    return true;
  }
}

email.addEventListener('keyup', () => {
  validateEmail();
});

function validatePassword() {
  const re = /^[a-zA-Z\s]{5,}$/;

  if (!re.test(password.value)) {
    password.classList.add('is-invalid');
    return false;
  } else {
    password.classList.remove('is-invalid');
    return true;
  }
}
password.addEventListener('keyup', () => {
  validatePassword();
});

form.addEventListener('submit', e => {
  if (!validateEmail() || !validatePassword()) {
    validateEmail();
    validatePassword();
    e.preventDefault();
  } else {
    return true;
  }
});

const message = document.querySelector('#message').value;

if (message) {
  M.toast({ html: message, classes: 'green', displayLength: 8000 });
}
