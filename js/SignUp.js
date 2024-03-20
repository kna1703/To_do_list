// document.addEventListener('DOMContentLoaded', function () {
//   const buttonSignup = document.getElementById('buttonSignup');

//   if (buttonSignup) {
//     buttonSignup.addEventListener('click', function (event) {
//       event.preventDefault();

//       const username = document.querySelector('.blocSignup .UserName input').value.trim();
//       const email = document.querySelector('.blocSignup .EnterEmail input').value.trim();
//       const password = document.querySelector('.blocSignup .Password input').value;
//       const confirmPassword = document.querySelector('.blocSignup .ConfirmPassword input').value;

//       const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

//       if (username === '' || !emailRegex.test(email) || password === '' || confirmPassword === '') {
//         alert('Please fill in all fields correctly.');
//       } else if (password !== confirmPassword) {
//         alert('Passwords do not match.');
//       } else {
//         // Redirect to index.html
// window.location.href = '../html/index.html';
//         // Display alert
//         alert('Account created!');
//       }
//     });
//   }
// });

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const submit = document.getElementById('submit');




form.addEventListener('submit', e => {
  e.preventDefault();

  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success')
}

const setSuccess = element => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
};

const isValidEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();


  if (usernameValue === '') {
    setError(username, 'Username is required');
  } else {
    setSuccess(username);
  }

  if (emailValue === '') {
    setError(email, 'Email is required');
  } else if (!isValidEmail(emailValue)) {
    setError(email, 'Provide a valid email address');
  } else {
    setSuccess(email);
  }

  if (passwordValue === '') {
    setError(password, 'Password is required');
  } else if (passwordValue.length < 8) {
    setError(password, 'Password must be at least 8 character.')
  } else {
    setSuccess(password);
  }

  if (password2Value === '') {
    setError(password2, 'Please confirm your password');
  } else if (password2Value !== passwordValue) {
    setError(password2, "Passwords doesn't match");
  } else {
    setSuccess(password2);
  }

};

































// function checkInput(UserName, Email, Password, ConfirmPassword) {
//     if (check.value === "") {
//         alert("Please enter details");
//     } else {
//         window.location.href = "SignUp.html";
//     }
// }