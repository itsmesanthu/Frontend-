var obj1={c:100}
var obj2={c:200}
function add(x,y){
    console.log(x+y+this.c)
}
add.call(obj1,20,34)
add.call(obj2,34,54)