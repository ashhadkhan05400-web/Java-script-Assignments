console.log("js is running");

let favcities = ["Rome", "Berlin", "Tokyo", "munich", "Madrid"]
for (city of favcities) {
    console.log(city);

}

let student = {
    name: "Ayesha", age: 16,
}
function intro(hobby) {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old. and ${hobby} is my hobby `);

}
intro.call(student, "art")
intro.apply(student, ["football"])
let bindtry = intro.bind(student, "writing")
bindtry()


const employees = [
    { name: "Ali", salary: 50000 },
    { name: "Sara", salary: 65000 },
    { name: "Usman", salary: 48000 }
];
for (calculate of employees) {
    console.log(`${calculate.name} earns ${calculate.salary}`);

}


function totalnums(a, b, c) {
    console.log(a + b + c);

}
totalnums.apply(null, [12, 56, 98])


let car = {
    brand: "Toyota",
    model: "Corolla"
}
function infodisplay(color, worth) {
    console.log(`This is a ${color} ${this.brand} ${this.model} worth ${worth}`);
}
infodisplay.call(car, "50 lakhs", "black")
infodisplay.apply(car, ["47 lakhs", "white"])


const person1 = { name: "Bilal", city: "Lahore" };
const person2 = { name: "Ayesha", city: "Karachi" };
function greeting(greet) {
    console.log(`${greet}, my name is ${this.name} and I live in ${this.city}.`);

}
greeting.call(person1, "Hello")
greeting.call(person2, "Hello")


let btnincrs = {
    count: 0,

    increment: function () {
        this.count++;
        console.log(this.count);

    }
}
document.getElementById("btn").addEventListener("click", btnincrs.increment.bind(btnincrs))


let totalcalcu = [5, 10, 15, 20, 25];
let sum = 0;
for (nums of totalcalcu){
    sum += nums
}
function printresult(message , total){
console.log(`${message} ${total}`);
}
printresult.apply(null, ["This is the total" , sum])


const calculator = {
  factor: 2,
  multiply: function(a, b) {
    console.log((a * b) * this.factor);
  }
};
calculator.multiply.apply(calculator , [5 , 9])
