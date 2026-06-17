window.onload = function () {

    var signupBtn = document.querySelector(".loginbutton button");

    var firstName = document.querySelector(".first input");
    var surname = document.querySelector(".SUR input");
    var dobDay = document.querySelector("#dob-day");
    var dobMonth = document.querySelector("#dob-month");
    var dobYear = document.querySelector("#dob-year");
    var eemail = document.querySelector(".emalbox input");
    var ppassword = document.querySelector(".password input");




    signupBtn.onclick = function () {

        if (firstName.value === "") {
            alert("First name is required.");
        } else if (surname.value === "") {
            alert("Surname is required.");
        } else if (dobDay.value === "" || dobMonth.value === "00" || dobYear.value === "") {
            alert("Please select your full date of birth.");
        } else if (eemail.value === "") {
            alert("Email or phone number is required.");
        } else if (ppassword.value === "") {
            alert("Password is required.");
        }
        else if (!eemail.value.includes("@gmail.com") && !email.value.includes("@yahoo.com")) {
            alert("Please enter a valid email address.");
        }

        else if (ppassword.value.length < 6) {
            alert("Password must be at least 6 characters long.");
        }

        else {
            alert("Account created successfully!");
           

        }

        let userarr = {
            first_Name: firstName.value,
            sur_name: surname.value,
            day: dobDay.value,
            month: dobMonth.value,
            year: dobYear.value,
            emaill: eemail.value,
            pass_word: ppassword.value,

        }

        localStorage.setItem(eemail.value, JSON.stringify(userarr))

        console.log("Email:", eemail.value)
        console.log("Password:", ppassword.value)

    }




    signupBtn.addEventListener("mouseover", function () {
        if (firstName.value === "" && surname.value === "" && dobDay.value === "" && email.value === "" && password.value === "") {
            alert("please fill in all the fields");
        }

    }
    );







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

