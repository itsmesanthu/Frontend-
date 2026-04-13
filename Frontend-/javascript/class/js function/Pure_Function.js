const greeting=name=> `hello,${name}!`
console.log("alice")
//impure function

let count=0
const increaseCounter=value=>count += value
console.log(increaseCounter(1))//1
console.log(increaseCounter(1))//2
//Impure function is a function that may produce different output for //or has side effects (modifies external