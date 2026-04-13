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
