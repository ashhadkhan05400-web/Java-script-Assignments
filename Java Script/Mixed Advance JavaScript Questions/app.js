// objects


// question 1
// object js me key value pairs collection hote he real world user ye entity ko represent karne ke lie

// question 2
const user = {
    name: "Hasan",
    age: 22
};
console.log(user.name);
console.log(user["name"]);

// question 3
let student = {
    name: "Ali",
    city: "Lahore"
}
student.age = 15;
delete student.city;
console.log(student);

// question 4
//object.keys() object ki keys return karti he
//object.value() object ki keys ki values return karti he
//object.entries()  array return karti he

//question 5
function countobjectproperties() {
    let keys = Object.keys(student);
    console.log(keys.length);
}

countobjectproperties()


//Arrays

//question 1
//array ek tarteeb me data store karte he jisse hum index khete he or object keys ke name se sttore karta he data

//question 2
const arr = [10, 20, 30];
arr.pop()
arr.push(50)
console.log(arr);

//question 3
console.log(arr.indexOf(10));
console.log(arr.findIndex(x => x === 20));
console.log(arr.lastIndexOf(50));
console.log(arr.findLastIndex(y => y === 50));

//question 4
let sum = [10, 20, 30]
num = 0;
for (i = 0; i < sum.length; i++) {
    num += sum[i]
    console.log(num);

}

//question 5
let removedulpicate = [1, 2, 2, 3, 4, 4, 5]
let unique = [...new Set(removedulpicate)]
console.log(unique);


//Destructing

//question 1
//destructing js feature he jo array ya object ki value ko variable me store karne ke lie use hota  he 

//question 2
//log me blue ae ga

//question 3
const userr = {
    name: "Hasan",
    age: 22
};
let { name, age } = userr
console.log(age);

//question 4
const user3 = {
    name: "Ali",
    address: {
        city: "Karachi"
    }
};
let { city } = user3.address
console.log(city);



//Shallow and Deep copy

//question 2 
//ye shallow copy he nested original me chnage nhi hoga 

//question 3 
//1st structuredclone se
//2nd json.parse(json.strigify(obj name))
//3rd maunel function bana ke

//question 4
let we = { ...user3 }
we.address.city = "berlin"
console.log(we);
console.log(user3);



//Rest & Spread Operator

//question 1 
//rest = ke phele ... ke stah ata he or spread = ke baad ... ke stah ata he

//question 2
let neww = [...sum, 50]
console.log(neww);

//question 3
function calculated(...numbers) {
    console.log(numbers);

}
calculated(20, 6, 78, 98, 10)

//question 4
const obj1 = {
    name: "Ali"
};
const obj2 = {
    age: 20
};
let merge = { ...obj1, ...obj2 }
console.log(merge);



//Array Higher Order Methods

//question 1
//dono mhethods array per loop cahalate he likun foreach return nhi karta kuch or map har elemnt ko transform karke naya array return karta he

//question 2
let numberss = [1, 2, 3, 4, 5, 6]
numberss.filter(harry => {
    if (harry % 2 == 0) {
        console.log(harry);
    }
}
)

//question 3
let sums = numberss.reduce( (numbers , currentvalue) => {
    return numbers + currentvalue
    
}, 0)
console.log(sums);

//question 4
//find condition match karne wala first element return kar ta he or filter sare element jo condition match kare



//call(), apply(), bind()

//question 1
//call imidiate fucntion call karta he or indiviaul arguement deta he , apply bhi imidiate function call karta he or arry ki surat me arguement deta he , bind imidiate function call nhi karta or indiviual arguement deta he

//question 2
//log me hassan and karachi ae ga

//question 3
//log me  ali pakistan ae ga



//Final Mixed Question

const user4 = {
name: "Hasan",
skills: ["HTML", "CSS"]
};
const copy = JSON.parse(JSON.stringify(user4))
copy.skills.push("JavaScript");
console.log(user4.skills);
console.log(copy.skills);

//isme shallow copy hui he
//deep copy me change hoga data likun original me nhi