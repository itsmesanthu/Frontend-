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

let multiply = function (a, b) {
    return a * b;
};

console.log(add1(10, 20));
console.log(multiply(10, 20));


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
