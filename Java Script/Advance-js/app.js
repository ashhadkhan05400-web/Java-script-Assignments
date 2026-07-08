console.log("js is running -->");


// CLOSURES

// question 1-4

function counter() {
    let count = 0


    function increment() {
        count++
        console.log(count);

    }

    function decrement() {
        count--
        console.log(count);

    }

    // console.log(count);
    return {
        increment: increment,
        decrement: decrement
    }
}
let callcounter = counter()
callcounter.increment()
callcounter.decrement()
callcounter.decrement()
callcounter.increment()
callcounter.increment()


function id_generator() {
    let name = "skiix";

    function generator() {
        let make = Math.floor(Math.random() * 100000)
        console.log(`${name}  ${make}`);



    }

    return generator()
}
id_generator()


function creategreeter(name) {


    function greeter() {
        console.log(`Hello and welcome to our web ${name} `);

    }

    return greeter;

}
const greetthem = creategreeter("sahil")
greetthem()

function putpass() {
    let pass = "Skiix05400"
    // let tryy = prompt("Put your password");
    let attmepts = 3

    // function checktry() {


    //     while (tryy !== pass && attmepts !== 0) {
    //         attmepts--
    //         console.log(`${attmepts} attempts left`)
    //         // tryy = prompt("try again")
    //     }

    //     if (tryy == pass) {
    //         console.log("log in");

    //     }
    //     else {
    //         console.log("try after 1 hour");

    //     }
    // }
    // return checktry();

}
let callthem = putpass();

// Deep vs Shallow Copy

// question 1-5

let obj = {
    name: "Sahil",
    sahilwork: ["student", "doomscroller", "artist"]
}
let shallowobj = { ...obj };
shallowobj.sahilwork[0] = "stu";
console.log(shallowobj);
console.log(obj.sahilwork[0]);


let deep = structuredClone(obj)
deep.sahilwork[1] = "GM"
console.log(`${JSON.stringify(deep.sahilwork)}  ${JSON.stringify(obj.sahilwork)}`);

let deep2 = JSON.parse(JSON.stringify(obj))
deep2.sahilwork[2] = "gamer"
console.log(deep2);
console.log(deep2.sahilwork);
console.log(obj.sahilwork);


let userArr = [
    {

        name: "James Müller",
        location: "Berlin, DE",

    },
    {

        name: "Sofia Reyes",
        location: "Madrid, ES",
    },
    {
        name: "Lucas Bennett",
        location: "London, UK",

    },


]
let shallowuser = [...userArr]
shallowuser[0].name = "Durrani"
shallowuser[1].name = "Umair"
shallowuser[2].name = "Zufar"
console.log(shallowuser);
console.log(userArr);



const originaluser = {
    name: "ali",
    status: "suspended",
    prefre: {
        themes: "light",
        activity: "doomscroller"
    }
}
let updateit = Object.assign({}, originaluser)
updateit.name = "sara";
updateit.prefre.themes = "dark",
    updateit.prefre.activity = "learner",
    console.log(updateit);
console.log(originaluser);



const company = {

    name: "Tech Solutions",
    location: "Karachi",

    department: {
        title: "Development",
        manager: "Asif",

        team: {
            lead: "Ali",
            membersCount: 5,
            project: "Mobile App"
        }
    }
};

let companydeepcopy = JSON.parse(JSON.stringify(company))
companydeepcopy.location = "Berlin";
companydeepcopy.department.manager = "shani";
companydeepcopy.department.team.membersCount = 10;
console.log(companydeepcopy);
console.log(company);


// Map vs Set
// question 1-5

let map = new Map()
var userdetails1 = { name: "sahil", activity: "doomscroller" }
var userdetails2 = { name: "umair", activity: "artist" }
var userdetails3 = { name: "zufar", activity: "gamer" }

map.set(userdetails1, { status: "active", theme: "light" })
map.set(userdetails2, { status: "suspended", theme: "light" })
map.set(userdetails3, { status: "banned", theme: "dark" })
console.log(map);



let duplicatearr = new Set([2, 4, 2, 5, 4, 5, 3, 6, 8, 9, 6, 8, 1])
console.log(duplicatearr);
console.log(duplicatearr.add(10));
console.log(duplicatearr.has(12));
console.log(duplicatearr.size);
console.log(duplicatearr.has(3))


let findcompanysize = Object.keys(company).length
console.log(findcompanysize);
console.log(map.size);


let visitors = new Set(["user156" , "user456" , "user120" , "user560" , "user345" , "user156" , "user120"])
console.log(visitors);
console.log(visitors.has("user456"));
console.log(visitors.size);
visitors.add("user456")
console.log(visitors.size)
visitors.add("user486")
console.log(visitors.size)


let chache = new Map()
let offchache = "off"
let onchache = "on"
chache.set(offchache , "chache is off")
chache.set(onchache , "chache is on")
console.log(chache);
console.log(chache.has("on"));
console.log(chache.get(onchache));
chache.delete(offchache)
console.log(chache);



// Object Keywords & Methods
// question 1-5

let laptop = {
name : "Dell latitude 5470",
company : "Dell",
processor : "Intel i7",
gen : "8th gen",
ram : "8gb ram",
storage : "256gb",
}
console.log(laptop);
console.log(Object.keys(laptop));
console.log(Object.values(laptop));
console.log(Object.entries(laptop));

// console.log(Object.freeze(laptop));
// laptop.gpu = "2gb nividia card"
// laptop.ram = "16gb"
// console.log(laptop);

// console.log(Object.seal(laptop));
// laptop.gpu = "2gb nividia card"
// laptop.ram = "16gb"
// console.log(laptop);
// delete laptop.company
// console.log(laptop);

// console.log(Object.isSealed(laptop));

delete laptop.gen
console.log(Object.hasOwn(laptop , "gen"));
  
console.log( Object.assign({} , laptop , {} , company));
 


