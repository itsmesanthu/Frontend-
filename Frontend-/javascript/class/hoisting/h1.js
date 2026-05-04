//Hoisting for var
console. log(a)//undefiend
var a=10
console.log(a)//10
var b//hosited 
console. log(b)//undefined
b=100
console. log (b)//100


let b1=20
 console.log(b1)
 //console.log(c)
let c=200

let d;
 console.log(d)
 d=999
 console.log(d)

 greet()
 function greet(){
    console.log("good morning")
 }

 //sayhello()
 var sayhello=()=>{
    console.log("hello word")
 }
 sayhello()