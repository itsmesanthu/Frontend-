function porfect(n){
    let i=1;
    let sum=0;
    while(i*i<=n){
        if (n%i==0){
            sum=sum+i;
            if (i!=(n/i)){
                sum+=(n/i);
                }
        }
        i+=1
    }
    if (sum-n==n){
        return true;
    }
    return false;
}
const prompt = require("prompt-sync")();
let n=Number(prompt('Enter a number: '))
let flag = porfect(n); 

if (!flag) {     
    console.log("This is not a perfect number"); 
} else {
    console.log("This is a perfect number");
}