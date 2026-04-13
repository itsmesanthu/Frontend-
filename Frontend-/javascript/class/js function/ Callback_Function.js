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
