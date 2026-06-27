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

let user = ["amalia" , "autumn " , "gerad" , "xabi"]

let loop = user.map((upper) => {
   let userw =  upper.toUpperCase();
  console.log(`MR ${userw}`)
})


// question 13

let price = [160 , 67 , 89 , 909]

price.map((add) => {
    console.log(add + 10)
})


// qustion 16

let number = [1,2,3,4,5,6]

number.filter((evens) => {
    
   if(evens % 2 == 0 ) {
    console.log(evens)
   }
})

// question 17
user.filter((long) => {
    if (long.length > 5){
        console.log(long)
    }
})

// question 18
price.filter((exp) => {
if (exp >= 100){
    console.log(exp)
}
})

// question 19 

let result = [
    {
        namee : "sahil",
        status : "passed",
    },
    {
        namee : "amaila",
        status : "failed",
    },
    {
        namee : "rodiguez",
        status : "passed",
    },
    {
        namee : "ayesha",
        status : "passed",
    },
]

result.filter((pass) => {
    if (pass.status == "passed"){
        console.log(pass.namee)
    }
})