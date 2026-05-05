// function scope
// • Any thing which is defined inside function scope those thing we can access only inside the function scope
function f1(){
var name="virat" 
    function fn(){
    console.log(name)
    console.log("fn is called")
    }
console.log(name)
return fn
}
// console.log(name) //error
f1()
// fn() //error