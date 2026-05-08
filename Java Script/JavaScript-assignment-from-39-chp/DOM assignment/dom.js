let part_1= document.getElementById("main-content")
console.log(part_1.children)

let part2 = document.getElementsByClassName("render")
console.log(part2[0].innerHTML)
console.log(part2[1].innerHTML)
console.log(part2[2].innerHTML)
console.log(part2[3].innerHTML)

let nameFill = document.getElementById("first-name")
nameFill.value = "ali"


let lastnameFill = document.getElementById("last-name")
lastnameFill.value = "khan"


let emailFill = document.getElementById("email")
emailFill.value = "ali@example.com"

let formContent = document.getElementById("form-content")
console.log(formContent.nodeType)

let lastFill = document.getElementById("lastName")
console.log(lastFill.childNodes[0].nodeType)

console.log(lastFill.children.textContent = "khan");

console.log(part_1.firstChild.nextSibling)
console.log(part_1.lastChild.previousSibling)

console.log(emailFill.parentNode)
console.log(emailFill.nodeType)