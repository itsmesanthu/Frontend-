    //loop

// for loop
for (var i=0;i<10;i++){console.log(i)}
for (var i=0;i<=10;i++){console.log(i*i)}

//while loop
let count1 = 0;

while (count1 < 11) {
  console.log("the count value is " + count1);
  count1++;
}

let count2 = 0;

while (count2 < 11) {
  console.log("the count value is " + count2 * 2);
  count2++;
}

//do while loop
let cont = 0;

do {
  console.log("counting is " + cont);
  cont++;   // increment
} while (cont < 5);

//for in loop
var obj={
    name:"virat",
    id:101,
    city:"mum",
    emial:"v@gamil.com"
}
for (var x in obj){
    console.log(x);
    console.log(obj[x]);
}
// for of loop
var arr=[10,20,30,40,50]
for(var a of arr){
    console.log(a);
}