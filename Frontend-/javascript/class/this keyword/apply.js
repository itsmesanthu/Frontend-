// the applay function it will take two argument frist argument is object and second argument is array we can give function argument inside the array 
var obj1={c:100}
var obj2={c:200}
function add(x,y){
    console.log(x+y+this.c)
}
add.apply(obj1,[20,34])
add.apply(obj2,[34,54])