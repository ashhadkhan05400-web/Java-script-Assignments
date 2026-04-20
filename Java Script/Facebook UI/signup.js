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
        } else {
            alert("Account created successfully!");
        }

    }

}