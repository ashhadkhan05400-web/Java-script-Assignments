console.log("js is running")



// objects constructors

function User_object(name, nationality, professsion, gender) {
    this.name = name;
    this.nationality = nationality;
    this.professsion = professsion;
    this.gender = gender;
}

let megan = new User_object("Megan", "UK", "UI/UX designer", "female")
let micheal = new User_object("Micheal", "Nigeria", "Frontend Developer", "male")
console.log(megan, micheal)



function Laptop(brand, processor, GPU, OS, storage) {
    this.brand = brand;
    this.processor = processor;
    this.GPU = GPU;
    this.OS = OS;
    this.storage = storage;
}

let laptop = new Laptop("Acer", "AMD RYEZN 5", "RTX 3090", "Window 11", "500 SSD")
console.log(laptop)


function Shoe(brand, category, price) {
    this.brand = brand;
    this.category = category;
    this.price = price;
}

let samba = new Shoe("Adidas Samba", "Casual Wearing", 5000)
let vamero = new Shoe("Nike Vomero", "Running", 9000)
console.log(samba, vamero)


function Apps(name, category, published_year, ceo_name) {
    this.name = name;
    this.category = category;
    this.published_year = published_year;

   this.ceo_name_print = function () {
        this.ceo_name = ceo_name
       
    };

    this.ceo_name_print();n
}

let insta = new Apps("Insta", "Entertainment", "2012", "Adam mosseri")
console.log(insta) 
