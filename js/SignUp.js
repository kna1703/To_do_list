document.addEventListener('DOMContentLoaded', function () {
  const buttonSignup = document.getElementById('buttonSignup');

  if (buttonSignup) {
    buttonSignup.addEventListener('click', function (event) {
      event.preventDefault();

      const username = document.querySelector('.blocSignup .UserName input').value.trim();
      const email = document.querySelector('.blocSignup .EnterEmail input').value.trim();
      const password = document.querySelector('.blocSignup .Password input').value;
      const confirmPassword = document.querySelector('.blocSignup .ConfirmPassword input').value;

      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

      if (username === '' || !emailRegex.test(email) || password === '' || confirmPassword === '') {
        alert('Please fill in all fields correctly.');
      } else if (password !== confirmPassword) {
        alert('Passwords do not match.');
      } else {
        // Redirect to index.html
        window.location.href = '../html/index.html'; 
        // Display alert
        alert('Account created!');
      }
    });
  }
}); 








// function checkInput(UserName, Email, Password, ConfirmPassword) {
//     if (check.value === "") {
//         alert("Please enter details");
//     } else {
//         window.location.href = "SignUp.html";
//     }
// }