window.onload = function () {

    var loginBtn = document.querySelector(".loginbutton button");
    var emailInput = document.querySelector(".emalbox input");
    var passwordInput = document.getElementById("passwordInput");

    loginBtn.onclick = function () {
        var email = emailInput.value;
        var password = passwordInput.value;

        if (email === "" && password === "") {
            alert("Both fields are required.");
        } else if (email === "") {
            alert("Email is required.");
        } else if (password === "") {
            alert("Password is required.");
        }

        else if (!emailInput.value.includes("@gmail.com") && !emailInput.value.includes("@yahoo.com")) {
            alert("Please enter a valid email address.");
        }

        else if (passwordInput.value.length < 6) {
            alert("Password must be at least 6 characters long.");
        }
        else {
            alert("Logged in!");
            window.location.href = "dashboard.html";

        }
    }



    loginBtn.addEventListener("mouseover", function () {
        var read_email = emailInput.value;
        var read_password = passwordInput.value;


        if (read_email === "" && read_password === "") {
            alert("please fill in all the fields");
        }
    });
}
function eyeclick() {
    var input = document.getElementById("passwordInput")

    if (input.type === "password") {
        input.type = "text"
    }
    else {
        input.type = "password"
    }
}