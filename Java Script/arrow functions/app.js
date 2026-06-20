console.log("js is running")




let practice = () => {
    console.log(this);
    
}

practice()


let arrow = (a = 5 , b = 7) => {
    console.log(a + b);
    
}

arrow()


const mins = (x , y) => {
     console.log(x - y)
}

mins(8 , 14)

var oneline = () => 2 + 9

console.log(oneline())


let obj = {
    printname : () => {
        console.log(this)
    },

    normal : function(){
        console.log(this)
    }
}

obj.printname()
obj.normal()