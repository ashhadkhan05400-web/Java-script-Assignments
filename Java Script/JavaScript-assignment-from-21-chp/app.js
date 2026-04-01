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

//question-16
let univercity="University of karachi";
console.log(univercity.split("").join("\n"));



// chp 26-30

//question-1

// let input=prompt("write a positive integers")
// console.log(input);
// var input2= Math.round(input);
// console.log(input2);
// var input3= Math.floor(input);
// console.log(input3);
// var input4= Math.ceil(input);
// console.log(input4);

//question-2

// let input=prompt("write a negative integers")
// console.log(input);
// var input2= Math.round(input);
// console.log(input2);
// var input3= Math.floor(input);
// console.log(input3);
// var input4= Math.ceil(input);
// console.log(input4);

//question-3
// let number= prompt("write a number")
// console.log(Math.abs(number))

//question-4

console.log(Math.round(Math.random() * 6))

//question-5

console.log(Math.round(Math.random() * 2))

//question-6

console.log(Math.random() * 100);

//question-7

// let userweight= prompt("what is your body weight ?");
// console.log(parseInt(userweight));

//question-8
// var numberguess = console.log(Math.round(Math.random() * 10))
// let challenge = prompt("guess the number between 1-10")
// if (challenge === numberguess) {
//     alert("you won the challenge");
// }
// else {
//     challenge = prompt("try again");
// }

// chp 31-34

//question-1
var current= new Date();
console.log(current);

//question-2

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
var d=new Date();
let month=d.getMonth();
const getwords=months[month];
console.log(getwords);

//question-3
var days=["monday","tuesday","wednesday","thursday","friday","saturday","sunday"]
let date=new Date();
let currentday=date.getDay();
var current2=days[currentday];
console.log(current2.slice(0,3))

//question-4
// var days2=["monday","tuesday","wednesday","thursday","friday","saturday","sunday"]
// let ask=prompt("What day is it ?")
// if (ask==days2[5]){
//     alert("it's funday")
// }
// if (ask==days2[6]){
//     alert("it's funday")
// }

// else{
//     alert("it's a normal day")
// }

//question-5
let Dates=new Date();
// let get=Dates.setDate(16)
let get=Dates.getDate();
console.log(get) 
if(get <= 15){
    console.log("The first fifteen days of the month")
}
if(get >= 15){
    console.log("The last fifteen days of the month")
}

//question-6

let date3=new Date();
console.log("Current Date = " + date3);
var later=new Date("jan-1-1970 0:30:50:975")
console.log(later)
var get2=later.getMinutes();
console.log("Minutes from jan 1 1970 " + get2)
let get3=later.getMilliseconds();
console.log("Miliseconds from jan 1 1970 " + get3)

//question-7
let time=new Date();
let ans =time.getHours();

let check = ans >= 12 ? 'PM' : 'AM';
console.log(check)

//question-8
let currentdate=new Date();
let laterdate=new Date("Thuesday-Dec-31-2020 00:00:00");
console.log(laterdate);

//question-9
let after=new Date();
let before = new Date("June-18-2015");
let different= after  - before;
let ans2=Math.round(different/ (1000 * 60 * 60 * 24));
console.log(ans2 + " Days passed")

//question-10
let after2=new Date();
let before2 = new Date("Saturday-Dec-5-2015 22:50:16");
let calculate= after2 - before2;
let result= Math.round( calculate / (1000 ) );
console.log("Seconds passed = " + result);

//question-11
let after3=new Date();
let before3= after3.setHours("1")
console.log(after3)

//question-12
// let reset=new Date();
// let reset2= reset.setTime("Wed Apr 01 1926 14:50:40 GMT+0500 (Pakistan Standard Time)")
// alert("time reset for 100 years")

//question-13
let ask5=prompt("which you born ?")
let time2=new Date();
let age=time2.setFullYear("2026")
let calculat4=age - ask5;
console.log(calculat4) 