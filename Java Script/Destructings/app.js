console.log("js is runing");


const fruits = ["Apple", "Banana", "Orange"];
let [one, two,] = fruits
console.log(one, two);


const colors = ["Red", "Green", "Blue"];
let [c1, , c3] = colors
console.log(c1, c3);


const numbers = [10, 20, 30, 40, 50];
let [ten, ...others] = numbers
console.log(ten, others);


let a = 5;
let b = 10;

[a, b] = [b, a]
console.log(a, b);


const names = ["Ali"];
let expected = [0, 1].map(index => names[index] || "Ahmed")
console.log(expected[0]);
console.log(expected[1]);

const data = ["HTML", ["CSS", "JavaScript"]];
let [d1, d2] = data
console.log(d1, d2);


const marks = [80, 90, 95];
let calu = [...marks]
console.log(calu);




const user = {
    namee: "Hasan",
    age: 23,
    city: "Lahore"
};
let { namee, age } = user
console.log(namee, age);


const student = {
    nname: "Ayesha",
    classs: "10th"
};
let { nname: studentname, classs: studentclass } = student
console.log(studentname, studentclass);



const employee = {
    employeename: "Ahmed"
};
let { employeename, salray = 500000 } = employee
console.log(employeename, salray);


const person = {
    name: "Ali",
    address: {
        city: "Karachi",
        country: "Pakistan"
    }
};
let { address } = person
console.log(address);


const product = {
    title: "Laptop",
    price: 80000,
    brand: "Dell"
};
let details = { ...product }
console.log(details);


const account = {
    username: "coder123",
    email: "coder@gmail.com",
    password: "12345"
};
let { email, ...otherdetails } = account
console.log(email);


const company = {

    employees: ["Ali", "Ahmed", "Sara"]

}
    ;
let { employees: [n1, n2, n3] } = company
console.log(n1, n2, n3);


const numberss = [1, 2, 3, 4, 5];
let [nu1, nu2, ...numberrs] = numberss
console.log(nu1, nu2, numberrs);



const user2 = {
    name3: "Hasan",
    age: 22,
    city: "Lahore",
    country: "Pakistan"
};
let { name3, ...remining } = user2
console.log(name3, remining);


function plus(...calculations) {
  
    return calculations.reduce((total , current) => total + current , 0 )
}

console.log(plus(10, 20, 30, 40))


const frontend = ["HTML", "CSS"];
const backend = ["Node", "MongoDB"];

let merge = [...frontend , ...backend]
console.log(merge);

const fruitss = ["Apple","Banana","Orange"];
let merge2 = [...fruitss]
console.log(merge2);


const user3 = {
name: "Hasan"
};

const details2 = {
age: 22,
city: "Lahore"
};

let mergefinal = {...user3 , ...details2}
console.log(mergefinal);



