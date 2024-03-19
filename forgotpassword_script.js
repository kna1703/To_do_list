
const button = document.querySelector(".buttonsubmit");
const email = document.querySelector("input");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

button.addEventListener("click", () => {
    
if (email === emailRegex.test(email)){
    alert("In a few minutes, you'll receive an email with a link to reset your password");}
else {alert("Please enter a valid email adress.") }

});






