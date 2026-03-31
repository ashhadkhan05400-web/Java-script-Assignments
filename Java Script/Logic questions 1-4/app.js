//Maximum number

let num = [24, 110, 67, 1500, 89, 230,5000, 800]
var Maxnum = [0]
for (let i = 0; i < num.length; i++) {
    if (num[i] > Maxnum) {
        Maxnum = num[i]
    }
}
console.log(Maxnum)

//Minimum-number

let num2 = [24, 110, 67, 1500, 89, 230,5000, 800,5]
var mininum = num2[0]
for(let i=0; i < num2.length; i++){
    if(num2[i] < mininum){
        mininum = num2[i]

    }
}
console.log(mininum)


//Password

var passcode="rygfhvhfgywfhcvwhdhcd%#$*%C@kjoi";
let password=" "
for(let i =0; i < 9; i++){
    let index= Math.floor(Math.random()*passcode.length)
password += passcode[index]
}
console.log(password)

//Ramadan-logic

let today_time= new Date();

let ramadan2027 = new Date(" Feb 7, 2027");
// console.log(ramadan2027)
let calculate=ramadan2027  - today_time ;
// console.log(calculate);
var diff= calculate/ (1000 * 60 * 60 * 24)
console.log(Math.floor(diff)+ " Days remaining")