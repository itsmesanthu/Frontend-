// Basic Arithmetic operator

let pos = 4;
let neg = -4;

console.log(2 + 2);
console.log(2 - 3);
console.log(pos - neg);
console.log(pos + neg);
console.log(pos * 2);
console.log(20 / 10);
console.log(20 % 10);

var a = 10;

console.log(a++);
console.log(a--);


// Type coercion with numbers and strings
console.log("Type coercion with numbers and strings")

console.log(1 + "3");
console.log(1 - "3");
console.log("1" * 3);
console.log("1" + 3);
console.log("1" - 3);


// Complex coercion chains
console.log("Complex coercion chains")

console.log(1 + "1" + 2 + "2" + 3);
console.log(1 + "1" * 3);
console.log("3" * 3 + 2);


// Unique and interesting coercion cases
console.log("Unique and interesting coercion cases")

console.log("5" + []);
console.log("5" - [2]);
console.log("5" * [2, 3]);
console.log(null + 1);
console.log(undefined + 1);
console.log(true + 1);
console.log(false + 1);