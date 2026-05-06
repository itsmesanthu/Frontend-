// the biind function will return same function by changing refereance of this keyword
// where as call() and apply() will not return any function.
// syntax:
        // var fnname=<fnname>.bind(objname):
        // fnname()
var obj1={c:100}
var obj2={c:200}
function add(x,y){
    console.log(x+y+this.c)
}
//1st way
let fu=add.bind(obj1)
fu(20,30)
//2n way
let fn=add.bind(obj2)(30,40)
//3rd way
add.bind(obj1)(40,50)