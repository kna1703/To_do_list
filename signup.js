// const buttonSignup = document.querySelector('buttonSignup');
// buttonSignup.addEventListener('click', function () {
//     const check = document.querySelector(".input");
//     if (check.value === '') {
//         alert("Please enter details")
//     } else {
//         buttonSignup.href = "index.html"
//     }

// })

const buttonSignup = document.querySelector('.buttonSignup'); // Assuming signup button has class "signup"
buttonSignup.addEventListener('click', function () {
    const check = document.querySelector(".input");
    if (check.value === "") {
        alert("Please enter details");
    } else {
        window.location.href = "SignUp.html"; // Redirect to SignUp.html
    }
    check();
});

// function checkInput(UserName, Email, Password, ConfirmPassword) {
//     if (check.value === "") {
//         alert("Please enter details");
//     } else {
//         window.location.href = "SignUp.html";
//     }
// }