let obj1 = {
    name: "vivek",
    id: 18,
    email: "vivek@gmail.com"
};
console.log(obj1);
let obj2 = {
    ...obj1,
    city: "delhi",
    age: 35,
    gender: "male"
};
console.log(obj2);
let arr1 = [10, 20, 30, 40, 50];
console.log(arr1);
let arr2 = [60, 70, 80, 90];
console.log(arr2);

// Combine arrays using spread operator
let arr3 = [...arr1, ...arr2, "vivek", 19, true];
console.log(arr3);
function example(...numbers) {
    console.log(numbers);
}
example(10, 20, 30);