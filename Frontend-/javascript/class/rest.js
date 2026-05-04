// Function using Rest Parameters
function greet(greeting, ...names) {
  for (let name of names) {
    console.log(`${greeting}, ${name}`);
  }
}

// Function Call
greet("Hello", "Raj", "Virat", "Riya", "Aditya");
//rest parameter for array
const numbers=[1,2,3,4,5,6,7,8,9]
const[first,second,...rest]=numbers
console.log(first)
console.log(second)
console.log(...rest)

//rest parameter for object
//> rest parameter collect the remaining element of properties or elements
var person={
    name:"virat",
    age:32,
    gender:"male"
}
const{name,age,...data}=person
console.log(name)
console.log()