window.onload = function() {

    var loginBtn = document.querySelector(".loginbutton button");
    var emailInput = document.querySelector(".emalbox input");
    var passwordInput = document.querySelector(".password input");

    loginBtn.onclick = function() {
        var email = emailInput.value;
        var password = passwordInput.value;

        if (email === "" && password === "") {
            alert("Both fields are required.");
        } else if (email === "") {
            alert("Email is required.");
        } else if (password === "") {
            alert("Password is required.");
        } else {
            alert("Logged in!");
        }
    }

}