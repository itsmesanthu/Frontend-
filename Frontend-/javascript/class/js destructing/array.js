// Example: Array destructuring

var productDetails = [
  "i phone 15 pro",
  "Samsung s24 ultra",
  "Samsung s24 fe",
  "vivo A34",
  "oppo f9 pro"
];

// Old approach
// var ele1 = productDetails[0];
// var ele2 = productDetails[1];
// var ele3 = productDetails[2];
// var ele4 = productDetails[3];
// var ele5 = productDetails[4];

// console.log(ele1);
// console.log(ele2);
// console.log(ele3);
// console.log(ele4);
// console.log(ele5);

// New approach (Array Destructuring)
let [ele1, ele2, ele3, ele4, ele5] = productDetails;

console.log(ele1);
console.log(ele2);
console.log(ele3);
console.log(ele4);
console.log(ele5);