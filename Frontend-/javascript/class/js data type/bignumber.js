let bigNumber = 1234567890;
console.log(bigNumber);

let bignumber = BigInt("1234567890");
console.log(bignumber);

console.log(typeof bigNumber);
console.log(typeof bignumber);

let num1 = 1234567890n;   // BigInt
let num2 = 10n;           // BigInt

console.log(num1 + num2);


let sym1=Symbol("id");
console.log(typeof sym1);
let sym2 =Symbol("id");
console.log(typeof sym2);
console.log(sym1==sym2);