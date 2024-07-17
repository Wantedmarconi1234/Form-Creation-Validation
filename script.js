document.addEventListener("DOMContentLoaded", () =>{
    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback");
    
    // Input Retrieval and Trimming
    form.addEventListener("submit",function(event){
        event.preventDefault();
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        feedbackDiv.style.display = "block"
        const emailPattern = /^[^@\s]+@[^\s]+\.[^\s]+$/;
        
        // form validation
        let isValid = true;
        let messages = [];
        if (username.length < 3) {
            isValid = false;
            messages = [...messages,"Username is short"]
        }
        if (!emailPattern.test(email)) {
            isValid = false;
            messages = [...messages,"Email is invalid"]
        }
        if (password.length < 8) {
            isValid = false;
            messages = [...messages,"Password is short"]
        }
        if (isValid) {
            feedbackDiv.textContent = "Registration successful";
            feedbackDiv.style.color = "#28a745";
        }else {
            feedbackDiv.innerHTML = messages.join("<br>");
            feedbackDiv.style.color = "#dc3545";
        }
    
    })


});