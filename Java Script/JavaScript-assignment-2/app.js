// chp 12 to 13 Question

//question-2
// var num1 = +prompt("Enter a number")
// var num2 = +prompt("Enter a second number")
// if (num1 > num2) {
//     alert("Larger number is " + num1)
// }
// if (num2 > num1) {
//     alert("Larger number is " + num2)
// }
// else{
//     alert("Both are equal")
// }

//question-3

// var num = +prompt("Enter a number:");

// if (num > 0) {
//     alert("This number is positive");
// }
// else if (num < 0) {
//     alert("This number is negative");
// }
// else {
//     alert("Number is zero");
// }

//question-5

// var pass= prompt("Enter your password")
// var password ="skiix1123";
// if (pass=password){
//     alert("Password is correct")
// }
// else {
//     alert("Password is incorrect")
// }


// chp 14 to 16 Question

//question-1
let student = ["Sahil", "Umair", "Durrani", "Zufar", "Omar", "Hasan"]

//question-2
let student2 = {
    name1:"Sahil",
    name2:"Umair",
    name3: "Hasan",
    name4:"Zufar",
}

//question-3

var string=[""]

//question-4

var numbers=[4,5,2,3,7,8,9]

//question-5

var boolean=[true,false]

//question-6

var mixed=["ashhad", 3,5,6,8, true,false]

//question-7
console.log("Qualifications")
var Qualifications =["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "PhD"]

//question-8

var studentNames = ["Michael", "John", "Tony"];
var scores = [320, 230, 480];
var totalMarks = 500;

var percentage0 = (scores[0] / totalMarks) * 100;
var percentage1 = (scores[1] / totalMarks) * 100;
var percentage2 = (scores[2] / totalMarks) * 100;

// document.write("Score of " + studentNames[0] + " is " + scores[0] + ". Percentage: " + percentage0 + "%<br>");
// document.write("Score of " + studentNames[1] + " is " + scores[1] + ". Percentage: " + percentage1 + "%<br>");
// document.write("Score of " + studentNames[2] + " is " + scores[2] + ". Percentage: " + percentage2 + "%<br>");

//question-9
let colours=["yellow","red","white"]
// he want to add black colour
colours.unshift("black")
// he want to add pink colour
colours.push("pink")
// now to colours in the begining
colours.unshift("green","grey")
// delete first colour
var returnvalue=colours.shift()
// delete last colour
var returnvalue2=colours.pop()
// add a colour to index
colours.splice(2,0, "brown")
// delete 3  colour to index
var returnvalue3 = colours.slice(0,4);

//question-10
var scores=[310,201,567,200,10,800,55,]
scores.sort()

//question-11
let citylist=["karachi","Islamabad", "Lahore", "Quetta", "Peshawar"]
let selectedcity=citylist.slice(1,3)

//question-12
let cat=["This", "is", "my", "cat"]
let join=cat.join(" ")

//question-13
var devices=[]
devices.push("keyboard");
devices.push("mouse");
devices.push("moniter");
var return1=devices.shift();
var return2=devices.shift();
 
//question-14
var devices2=[]
devices2.push("keyboard");
devices2.push("mouse");
devices2.push("moniter");
var return3=devices2.pop();
var return4=devices2.pop();

//question-15
var companies=["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// document.write("<select>")
// document.write("<option>" + companies[0] + "</option>")
// document.write("<option>" + companies[1] + "</option>")
// document.write("<option>" + companies[2] + "</option>")
// document.write("<option>" + companies[3] + "</option>")
// document.write("<option>" + companies[4] + "</option>")
// document.write("<option>" + companies[5] + "</option>")
// document.write("</select>")

// chp 17 Question

//question-1
var new0=[
    [],
    [],
];

//question-2
var matrix=[
    [0,1,2,3],
    [1,0,1,2],
    [2,1,0,1]
];