// chp 21-25

// question-1

// let first= prompt("write your first name !")
// let last =  prompt("write your last name !")
// let fullname= console.log(first+ " " +last)

// question-2

// let mobile= prompt("tell your favourite mobile company")
// console.log(mobile)
// var lenght= console.log(mobile.length)

// question-3

let strr = "pakistani"
console.log(strr)
var strr2 = strr.charAt(7);
console.log(strr2)

// question-4

let text = "Hello world"
console.log(text)
let text2 = text.indexOf("ld");
console.log("the last index of l " + " " + text2)

// question-5

let TEXT3 = "pakistan"
console.log(TEXT3)
var text4 = TEXT3.indexOf("n");
console.log(text4)

// question-6

// let first= prompt("write your first name !");
// let last =  prompt("write your last name !");
// var fullName = first.concat(" ", last);
// console.log(fullName);

// question-7
let city = "hyderabad";
console.log(city);
var city2 = city.replace("hyder", "islam");
console.log(city2);

// question-8
let text5 = "Ali and Sami are bestfriend and they play football together";
console.log(text5);
const text6 = text5.replace(/and/g, "&");
console.log(text6);

// question-9
let num = "536";
console.log(num)
let numarr = num.split()
console.log(numarr)

// question-10
// const text7= prompt("Write any thing");
// console.log(text7.toUpperCase());

// question-11
// let text8= prompt("Write some thing");
// var result= text8.charAt(0).toUpperCase() + text8.slice(1).toLowerCase();
// console.log(result);

// question-12
let num2 = "36.52";
let num3 = num2.replace(".", "");
console.log(num3);

// question-13
// let user = prompt("write your username");

// var isvalid = true;
// for (let i = 0; i < user.length; i++) {
//     var code = user.charCodeAt(i)
//     if (code === 33 || code === 44 || code === 46 || code === 64) {
//         isvalid = false;
//         break
//     }
// }

// if (isvalid){
//     alert("your username is valid")
// }
// else{
//     alert("enter a invalid username")
// }

// question-14
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// var userInput = prompt("Welcome! What do you want to order?");
// var found = false;

// var search = userInput.toLowerCase();

// for (var i = 0; i < A.length; i++) {
//   if (A[i].toLowerCase() === search) {
//     found = true;
//     console.log(search + " is available at index " + i);
//     break;
//   }
// }

// if (!found) {
//   console.log(search+" is not available");
// }

// question-15
// let password = prompt("enter a password")
// var match = false;
// var aplhabet = false;
// var numbers = false;
// var lenght = false;
// if (password.length < 6) {
//     password = prompt("password should be at least 6 characters long");
// }
// var firstcode = password.charCodeAt(0)
// if (firstcode >= 48 && firstcode <= 57) {
//     password = prompt("password can not start with numbers")
// }
// for (var i = 0; i < password.length; i++) {
//     var code = password.charCodeAt(i);
//     if (code >= 48 && code <= 57) {
//         numbers = true
//     }
//     else if (code >= 65 && code <= 90 && code >= 97 && code <= 122) {
//         aplhabet = true
//     }
//     if(password==numbers && aplhabet){
// console.log("password is valid")
// }
// }

   