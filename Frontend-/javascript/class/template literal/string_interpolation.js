// OLD WAY (ES5) - String Concatenation
const name = "John";
const age = 25;
const oldWay = "My name is " + name + " and I am " + age + " years old.";
console.log(oldWay); // My name is John and I am 25 years old.
// NEW WAY (ES6) - Template Literals with ${}
const newWay = `My name is ${name} and I am ${age} years old.`;
console.log(newWay); // My name is John and I am 25 years old.
// EXPRESSIONS INSIDE ${}
// You can put any JavaScript expression inside ${}

const price = 100;
const tax = 0.15;
console.log(`Total price: $${price + (price * tax)}`); 
// Total price: $115
// Function calls inside ${}
function getDiscount(price) {
    return price * 0.1;
}
console.log(`Discount: $${getDiscount(price)}`); 
// Discount: $10
// Ternary operator inside ${}
const score = 85;
console.log(`Result: ${score >= 50 ? "Pass" : "Fail"}`); 
// Result: Pass

// Object property access
const user = {
  firstName: 'santhu',
  lastName: 'gp',
  age: 21
};

console.log(`User: ${user.firstName} ${user.lastName}, Age: ${user.age}`);
// User: Alice Smith, Age: 28
console.log(`user: ${user.firstName}`)
//user: santhu
// Array methods inside ${}
const numbers = [1, 2, 3, 4, 5];
console.log(`Sum: ${numbers.reduce((a, b) => a + b, 0)}`);
// Sum: 15
// Complex expressions
const items = ['apple', 'banana', 'orange'];
console.log(`We have ${items.length} items: ${items.join(', ')}`);
// We have 3 items: apple, banana, orange
    //MULTI-LINE STRING
//old way (es5)-using \n or concatenation
const oldmultiline="this is line 1\n"+"this is line 2\n"+"this is line 3\n";
console.log(oldmultiline);
//new way (ES6)- template literals preserve line breaks
const newmultiline=`this is line 1
this is line 2
this is line 3`;
console.log(newmultiline);