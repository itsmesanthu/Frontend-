// var obj={
//     name:"virat",
//     age:35,
//     city:"mumbai",
//     grnder:"male"}
// //old approach
// var name=obj.name
// var age=obj.age
// var city=obj.city
// console.log(name)
// console.log(age)
var obj = {
    name: "virat",
    age: 35,
    city: "mumbai",
    gender: "male"
};

// New approach
var { name, age, city, gender } = obj;

console.log(name);
console.log(age);
console.log(city);
console.log(gender);