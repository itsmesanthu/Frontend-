function greet() {
    console.log("Hello World");
}
greet();

//named function

function myfunction(){
var x=10
var y=90
console.log (x+y)
}
myfunction()

// Parameterized function
function add(a, b){
    console.log(a + b)
}
add(10, 20)

// Return function
function name1(){
    return "santhu"
}
var res=name1()
console.log(res)

function add(a,b){
    return a*b
}
var res=add(20,30)
console.log(res)

//Anonymous Function (JavaScript)
//Example: Normal Anonymous Function
let fun = function () {
    console.log("I am anonymous");
}

fun()
//Example: Parameterized Anonymous Function
let add1 = function (a, b) {
    return a + b;
}

let multiply = function (a, b) {
    return a * b;
}

console.log(add1(10, 20))
console.log(multiply(10, 20))
//Example: Return Anonymous Function
let greet1 = function () {
    return "welcome"
}

console.log(greet1())
//Example: Parameterized Return Anonymous Function
let mul = function (a, b) {
    let res = a * b
    return res
}

console.log(mul(10, 2))