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
console.log(triple(5))//15
//2. prtial appliction : you can create new function by pre filling some argument.
// Greeting function using currying
const greet = greeting => name => `${greeting}, ${name}!`;

const sayHello = greet("Hello");
console.log(sayHello("Alice")); 
// Output: Hello, Alice!

// Discount function using partial application
const discount = rate => price => price - (price * rate);

const tenPercentDiscount = discount(0.10);

console.log(tenPercentDiscount(100)); 
// Output: 90

console.log(tenPercentDiscount(200)); 
// Output: 180