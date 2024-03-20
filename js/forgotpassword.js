const button = document.querySelector(".buttonsubmit");
const emailInput = document.querySelector("input"); 
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

button.addEventListener("click", () => {
    const email = emailInput.value.trim(); 
    
    if (emailRegex.test(email)) {
        alert("In a few minutes, you'll receive an email with a link to reset your password.");
        window.location.href = '../html/index.html'; 
    } 
    else {
        alert("Please enter a valid email address.");
        
    }
});


