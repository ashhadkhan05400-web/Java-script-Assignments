console.log("js is running -->");
let email = document.getElementById("email")


let emailtester = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,}$/;

document.getElementById("submit").addEventListener("click", function () {
    if (emailtester.test(email.value) == false) {
        alert("enter a valid email address")
    }
    else{
        alert("Form submitted!")
        email.value = ""
    }
})
