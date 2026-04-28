//chp 38-44

//question-1

function plus(a, b) {
    console.log(a + b)

}
plus(4, 15);

//question-2

// function leap() {
//     var leapp = prompt("write a year ")
//    var leap_1 = prompt("and it's total days")
//     if (leap_1 == 365) {
//         console.log("it's a normal year")
//     }
//     if (leap_1 == 366) {
//         console.log("it's a leap year")
//     }

// }

// leap();

//question-4

function mark() {
    var eng = 70;
    var math = 50;
    var science = 89;

    function mark_average() {
        console.log(Math.floor((eng + math + science) / 3));
    }

    function mark_percentage() {
        console.log(Math.ceil(((eng + math + science) / 300) * 100) + " %");
    }

    mark_average();
    mark_percentage();
}

mark();

//question-5

// function indexof(){
//     let fruit = ["apple", "mango" , "orange", "banana", "kiwi"]
//     let choose = prompt("chose a fuirt from apple , banana , mango , kiwi, orange")
//     console.log(fruit.indexOf(choose));
// }

// indexof();

//question-6

// function deletee() {
//   let write = prompt("write a word or sentence");
//     for (let i = 0; i < write.length; i++) {
//         if (write == "a" || "e" || "o" || "u" || "i" ) {
//             console.log("it has vowels")
//         }
//     }

// }
// deletee();

//question-7

function countVowelPairs(sentence) {
    var count = 0;
    var vowels = "aeiou";

    for (var i = 0; i < sentence.length - 1; i++) {
        switch (sentence[i]) {
            case 'a': case 'e': case 'i': case 'o': case 'u':
                if (vowels.includes(sentence[i + 1])) {
                    count++;
                    console.log("Pair found: " + sentence[i] + sentence[i + 1]);
                }
        }
    }

    console.log("Total pairs: " + count);
}

countVowelPairs("Pleases read this application and give me gratuity");

//question-8

function cities() {
    var karachi = 50;
    var lahore = 50;
    function feet() {
        var distance = karachi + lahore;
        var result_feet = distance * 3.28084;
        console.log("Feet : " + result_feet);
    }
    function centimeters() {
        var distance = karachi + lahore;
        var result2 = distance * 1000;
        console.log("centimeters : " + result2);
    }
    function meters() {
        var distance = karachi + lahore;
        var result3 = distance * 3;
        console.log("meters : " + result3);
    }
    function inches() {
        var distance = karachi + lahore;
        var result4 = distance * 39.3701;
        console.log("distance : " + result4);
    }
    inches();
    feet();
    centimeters();
    meters();
}

cities();

//question-9

var employee_salary = 30450
var work_hours= 40;
var overtime = 14;

let pay= overtime * 12;
console.log(pay + employee_salary);

//question-10

// let amount = parseInt(prompt("Enter amount to withdraw!!"));

// let hundreds = Math.floor(amount / 100);
// let rem = amount % 100;

// let fifties = Math.floor(rem / 50);
// rem = rem % 50;

// let tens = Math.floor(rem / 10);

// alert("you will have " + hundreds + " hundred notes " + fifties + " fifty notes " + tens + " ten notes.");


//chp 45-48

//question-1-4
 
//done in html file


//question-5

var count=0;
function changeCount(val){
    count = count + val;
    document.getElementById("display").innerHTML=count
}


//chp 49-52

//question-1

let email = document.getElementById("email");
let password = document.getElementById("password");

function submitForm(Event) {
  event.preventDefault();
    console.log("Form submitted!");
    console.log(email.value);
    console.log(password.value);
  
}

//question-2

let text = document.getElementById("text");
let btn = document.getElementById("btn");

let shorttext = text.innerText.slice(0, 50) + "....";
let fulltext = text.innerText;

text.innerText = shorttext;

function toggle(){
if (btn.innerText == "show more"){
    text.innerText = fulltext;
    btn.innerText = "show less"
}
else{
    text.innerText = shorttext;
    btn.innerText = "show more"
}

}