document.addEventListener('DOMContentLoaded', function () {
  const buttonSignup = document.getElementById('buttonSignup');
  if (buttonSignup) {
      buttonSignup.addEventListener('click', function (event) {
        event.preventDefault();
          const username = document.querySelector('.UserName input').value;
          const email = document.querySelector('.EnterEmail input').value;
          const password = document.querySelector('.Password input').value;
          const confirmPassword = document.querySelector('.ConfirmPassword input').value;

          if (username === '' || email === '' || password === '' || confirmPassword === '') {
              alert('Veuillez remplir tous les champs.');
          } else if (password !== confirmPassword) {
              alert('Les mots de passe ne correspondent pas.');
          } else {
              // Redirect to index.html
              window.location.href = '../html/index.html'; 
              // Display alert
              alert('Compte créé!');
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