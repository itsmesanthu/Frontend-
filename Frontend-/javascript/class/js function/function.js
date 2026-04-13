// ===============================
//  Simple Function (Named Function)
// ===============================

function greet() {
    // This function prints a message
    console.log("Hello World");
}

// Calling the function
greet();


// ===============================
//  Named Function Example
// ===============================

function myfunction() {
    // Declaring variables
    var x = 10;
    var y = 90;

    // Printing sum
    console.log(x + y);
}

// Calling the function
myfunction();


// ===============================
// Parameterized Function
// ===============================

function add(a, b) {
    // a and b are parameters
    console.log(a + b);
}

// Passing arguments
add(10, 20);


// ===============================
//  Return Function
// ===============================

function name1() {
    // Returning value
    return "santhu";
}

// Storing returned value
var res = name1();

// Printing result
console.log(res);


// ===============================
// Return Function with Calculation
// ===============================

function multiplyNumbers(a, b) {
    // Returning multiplication result
    return a * b;
}

var result = multiplyNumbers(20, 30);
console.log(result);


// ===============================
//  Anonymous Function
// ===============================

// Function without a name
let fun1 = function () {
    console.log("I am anonymous");
};

// Calling anonymous function
fun1();


// ===============================
//Parameterized Anonymous Function
// ===============================

let add1 = function (a, b) {
    return a + b;
};

let multiply1 = function (a, b) {
    return a * b;
};

console.log(add1(10, 20));
console.log(multiply1(10, 20));


// ===============================
// Return Anonymous Function
// ===============================

let greet1 = function () {
    return "welcome";
};

console.log(greet1());


// ===============================
// Parameterized Return Anonymous Function
// ===============================

let mul = function (a, b) {
    let res = a * b;
    return res;
};

console.log(mul(10, 2));


// ===============================
// Callback Function
// ===============================

function print() {
    console.log("welcome to js class");
}

function add3(x, y) {
    let z = x + y;
    console.log(z);
}

function greet2() {
    return "good morning";
}

let i = function () {
    console.log("i am anonymous function");
};


// Function that accepts another function
function funct(f) {
    // Calling the function passed as argument
    f();
}

// Correct way to pass callback
funct(print);


// ===============================
// Parameterized Return Anonymous Function Callback
// ===============================

function greet3(name) {
    // Returning anonymous function
    return function () {
        console.log(name);
        return "good morning";
    };
}

function fun4(fn) {
    // Calling returned function
    console.log(fn());
}

// Passing function as argument
fun4(greet3("santhu"));


// ===============================
//  Arrow Function
// ===============================

// Normal Arrow Function
let arrowFun = () => {
    console.log("I am Arrow function");
};

arrowFun();


// ===============================
//  Parameterized Arrow Function
// ===============================

let addArrow = (x, y) => {
    let z = x + y;
    console.log(z);
};

addArrow(10, 30);


// ===============================
//  Return Arrow Function
// ===============================

let greetArrow = () => {
    return "welcome";
};

console.log(greetArrow());


// ===============================
//  Parameterized Return Arrow Function
// ===============================

let resArrow = (x, y) => {
    let z = x + y;
    return z;
};

console.log(resArrow(10, 10));


// ===============================
// Arrow Function as Callback
// ===============================

// Function calling another function
function funCallback(f) {
    f();
}

// Passing arrow function as callback
funCallback(() => {
    console.log("Hello world");
});

// ===================================
//Immediately Invoked Function (IIFE)
// ===================================
    // (function(){
    //     var a=100
    //     var b=10
    //     console.log(a+b)
    // })();
(function(name,age,city){
    console.log("my name is "+ name+ " i am "+age+"year old")
    console.log("i am from "+city)
})("santhu",21,"mandy");
// ===================================
// Currying Function:
// ===================================
// 1. Normal Function
function add(a, b, c) {
    return a + b + c;
}

console.log("Normal Function Output:");
console.log(add(10, 20, 30)); // 60


// 2. Currying Function (Normal function style)
function sum(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        };
    };
}

console.log("Currying Function Output:");
console.log(sum(10)(20)(30)); // 60


// 3. Arrow Function (Normal)
let yes = (a, b) => {
    return a + b;
};

console.log("Arrow Function Output:");
console.log(yes(10, 20)); // 30


// 4. Currying using Arrow Function
let curriedFunc = (a) => {
    return (b) => {
        return (c) => {
            return a + b + c;
        };
    };
};

console.log("Curried Arrow Function Output:");
console.log(curriedFunc(10)(20)(30)); // 60


// 5. Short Arrow Function Currying (Interview Style)
let shortCurried = a => b => c => a + b + c;

console.log("Short Curried Function Output:");
console.log(shortCurried(10)(20)(30)); // 60
//Benefits of Currying
//1.Reuseability: you can create specilized functions by flixing some arguments.

//example
const multiply=a=>b=>a*b
const double=multiply(2)
const triple=multiply(3)
console.log(double(5))//10
console.log(triple(5))//5