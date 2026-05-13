window.onload = function () {

    var signupBtn = document.querySelector(".loginbutton button");

    var firstName = document.querySelector(".first input");
    var surname = document.querySelector(".SUR input");
    var dobDay = document.querySelector("#dob-day");
    var dobMonth = document.querySelector("#dob-month");
    var dobYear = document.querySelector("#dob-year");
    var email = document.querySelector(".emalbox input");
    var password = document.querySelector(".password input");

    signupBtn.onclick = function () {

        if (firstName.value === "") {
            alert("First name is required.");
        } else if (surname.value === "") {
            alert("Surname is required.");
        } else if (dobDay.value === "" || dobMonth.value === "00" || dobYear.value === "") {
            alert("Please select your full date of birth.");
        } else if (email.value === "") {
            alert("Email or phone number is required.");
        } else if (password.value === "") {
            alert("Password is required.");
        } 
        else if (!email.value.includes("@gmail.com") && !email.value.includes("@yahoo.com")) {
            alert("Please enter a valid email address.");
        }

        else if (password.value.length < 6) {
            alert("Password must be at least 6 characters long.");
        }
        
        else {
            alert("Account created successfully!");
        }
       
    }
       

        signupBtn.addEventListener("mouseover", function () {
            if (firstName.value === "" && surname.value === "" && dobDay.value === "" && email.value === "" && password.value === "") {
                alert("please fill in all the fields");
            }

        }
        );









    }
