const form = document.querySelector('#form');
const email = document.querySelector('#email');
const username = document.querySelector('#username');
const accountType = document.querySelector('#accountType');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmPassword');
let type = false;

accountType.addEventListener('change', e => {
  if (e.target.value == '') {
    type = false;
    accountType.parentElement.parentElement.classList.add('is-invalid');
  } else {
    type = true;
    accountType.parentElement.parentElement.classList.remove('is-invalid');
  }
});

function validateEmail() {
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

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

function validateUsername() {
  const re = /^[a-z0-9]{3,}$/i;

  if (!re.test(username.value)) {
    username.classList.add('is-invalid');
    return false;
  } else {
    username.classList.remove('is-invalid');
    return true;
  }
}

username.addEventListener('keyup', () => {
  validateUsername();
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

function validateConfirmPassword() {
  const re = /^[a-zA-Z\s]{5,}$/;

  if (password.value != confirmPassword.value) {
    confirmPassword.classList.add('is-invalid');
    return false;
  } else {
    confirmPassword.classList.remove('is-invalid');
    return true;
  }
}
confirmPassword.addEventListener('keyup', () => {
  validateConfirmPassword();
});

form.addEventListener('submit', e => {
  type = accountType.value == '' ? false : true;
  if (
    !validateEmail() ||
    !validatePassword() ||
    !validateUsername() ||
    !validateConfirmPassword() ||
    !type
  ) {
    // console.log(
    //   !validateEmail(),
    //   !validatePassword(),
    //   !validateUsername(),
    //   !validateConfirmPassword(),
    //   !type
    // );
    validateEmail();
    validatePassword();
    validateUsername();
    validateConfirmPassword();
    if (!type && accountType.value == '') {
      // console.log(accountType.value);
      accountType.parentElement.parentElement.classList.add('is-invalid');
    } else {
      accountType.parentElement.parentElement.classList.remove('is-invalid');
    }

    e.preventDefault();
  } else {
    return true;
  }
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems);
});
