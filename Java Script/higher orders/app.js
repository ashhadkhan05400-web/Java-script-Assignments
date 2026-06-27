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

let arr = [12 , 34 , 67 , 899]

arr.forEach((element) => {
    console.log(element + element)
   return element
})

// question 4

function add ( a , b , operation){
    console.log( a * b)
    operation()
}

add(34 , 89 , function(){
    console.log("numbers added")
})

// question 5

// callback func ek func hota jo as a arguement dosre func ke pass passed hota he 
    

// question 6
function greet (user , callback){
    console.log(user)
    callback()
}

greet("ashhad" , function(){
    console.log("user founded");
    
})