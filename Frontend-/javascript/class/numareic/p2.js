function auto(n){
    let s=n*n
    let d=0
    let temp=n
    while (temp > 0) {
        d += 1;
        temp = Math.floor(temp / 10); 
    }
    l=(s%(10**d))
    return l==n
}
const prompt = require("prompt-sync")();
let n=Number(prompt('Enter a number: '))
let flag = auto(n); 

if (flag==true) {     
    console.log("This is a auto number"); 
} else {
    console.log("This is  not  a auto number");
}