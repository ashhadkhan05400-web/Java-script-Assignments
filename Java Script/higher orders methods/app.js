console.log("js is running");


// question 1
// hihger order func apne arguements me ek function lete he ya func return kar te he


function higher(name, callback) {
    console.log(name)
    callback()
}

higher("umair", function () {

    console.log("callback func call hua");

})


// question 2
//yes map() ek higher order function hai?


// question 3
// undefined

let arr = [12, 34, 67, 899]

arr.forEach((element) => {
    console.log(element + element)
    return element
})

// question 4

function add(a, b, operation) {
    console.log(a * b)
    operation()
}

add(34, 89, function () {
    console.log("numbers added")
})

// question 5

// callback func ek func hota jo as a arguement dosre func ke pass passed hota he 


// question 6
function greet(user, callback) {
    console.log(user)
    callback()
}

greet("ashhad", function () {
    console.log("user founded");

})

//  question 7
// filtration ke lie

// question 8
// iteration

// question 9
// find ek value deta he orf filter multiples value deta he

// question 10
// map har element ko badal kar ek naya arrr return karta he or for each har elemnt par ek function chalata he or kuvh reurn nhi karta 

// question 11

let num = [1, 2, 3, 4]
let double = num.map((nums) => {

    console.log(nums * nums)

})

// question 12 and 14

let user = ["amalia", "autumn ", "gerad", "xabi"]

let loop = user.map((upper) => {
    let userw = upper.toUpperCase();
    console.log(`MR ${userw}`)
})


// question 13

let price = [160, 67, 89, 909]

price.map((add) => {
    console.log(add + 10)
})


// qustion 16

let number = [1, 2, 3, 4, 5, 6]

number.filter((evens) => {

    if (evens % 2 == 0) {
        console.log(evens)
    }
})

// question 17
user.filter((long) => {
    if (long.length > 5) {
        console.log(long)
    }
})

// question 18
price.filter((exp) => {
    if (exp >= 100) {
        console.log(exp)
    }
})

// question 19 

let result = [
    {
        namee: "sahil",
        status: "passed",
    },
    {
        namee: "amaila",
        status: "failed",
    },
    {
        namee: "rodiguez",
        status: "passed",
    },
    {
        namee: "ayesha",
        status: "passed",
    },
    {
        namee: "hassan",
        status: "failed",
    },
]

result.filter((pass) => {
    if (pass.status == "passed") {
        console.log(pass.namee)
    }
})


let numbers = [9, -4, 78, 98, 67, -98, -5]
let negative = numbers.filter((nums) => {
    return nums < 0
})
console.log(negative);

let elem = ["ali", 98, "waterr", "tv"]
elem.forEach((all) => {
    console.log(all)

})

let fruits = ["apple", " banana", "mango", "kiwi"]
fruits.forEach((fri, index) => {
    console.log(`${index + 1} ${fri}`)
})


let users = ["aliaya", "omer", "ayesha", "gabriela", "juan", "ali"]
users.forEach((us) => {
    console.log(`Welcome ${us}`)
})

let total = [90, 9, 76, 56, 34, 13]

let resultt = 0

total.forEach((numss) => {
    resultt += numss

})

console.log(resultt)

users.forEach((upper) => {
    console.log(`${upper.toUpperCase()}`);

})

let nummbersfirst = [10, 20, 30, 40];
nummbersfirst.find((first) => {
    if (first > 20) {
        console.log(first)
    }
})

users.find((ali) => {
    if (ali === "Ali".toLowerCase()) {
        console.log(ali);

    }
})


let prices = [300, 500, 7800, 800, 67000, 578, 980]
prices.find((expensive) => {
    if (expensive > 10000) {
        console.log(expensive);

    }
})

let evenreturn = prices.find((even) => {
    return even % 2 == 0
})

console.log(evenreturn);


let returnfailed = result.find((failed) => {
    return failed.status == "failed"
})
console.log(returnfailed);


let reducesum = [1, 2, 3, 4];
reducesum.reduce((sum, value) => {
    let newsum = sum * value
    console.log(newsum);

    return newsum

})

reducesum.reduce((total, currvalue) => {

    let tot = total + currvalue
    console.log(tot);
    return tot

})

reducesum.reduce((greater, currentvalue) => {
    if (greater < currentvalue) {
        console.log(currentvalue);
        return currentvalue;
    }

})

let words = ["we", "are", "in", "europe"]
let merge = words.reduce((w, h) => w + " " + h)
console.log(merge);

const shoppingbill = [300 , 50 , 150 , 800 , 5000 , 400]
shoppingbill.reduce((totals , currentbill) => {
let calculate = totals + currentbill;
console.log(calculate);
return calculate
})

let last = [1,2,3,2,4,2];
let find = last.findLastIndex(x => x === 2)
console.log(find);

let lastevenfind = last.findLastIndex((even => even % 2 === 0))
console.log(lastevenfind);

let alifind = users.findIndex((ali => ali == "Ali".toLowerCase()))
console.log(alifind);

let findlastexp = prices.findIndex((exp) => exp > 10000)
console.log(findlastexp);

let lastnega = numbers.findLastIndex((n) => n < 0)
console.log(lastnega);

