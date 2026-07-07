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