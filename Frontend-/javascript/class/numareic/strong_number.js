function strong(n){
  let temp =n;
  let sum=0;
  while (n>0){
    let a=n%10;
    let f=1;
   for (let i=1;i<=a;i++)
    { f=f*i;}
   sum+=f;
   n=Math.floor(n/10);
}
return temp==sum;
}
const prompt = require("prompt-sync")();
let n=Number(prompt('Enter a number: '))
let flag = strong(n); 

if (flag==true) {     
    console.log("This is a strong number"); 
} else {
    console.log("This is  not  a strong number");
}