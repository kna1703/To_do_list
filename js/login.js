document.addEventListener('DOMContentLoaded', function () {
const emailInput = document.querySelector(".adressmail");
const passwordInput = document.querySelector (".passwordinput");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
const button = document.querySelector(".buttonlogin");

button.addEventListener("click", () => {
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (emailRegex.test(email) && password !== '') {
        alert("Welcome back!");
        window.location.href = '../html/index.html'; 
    } 
    else if (emailRegex.test(email) || password === '') {
        alert("Incorrect email or password.");
    }
    else {
        alert("Incorrect email or password.");
    }
});  
});