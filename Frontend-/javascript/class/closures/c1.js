function Outer(){
var city="Banglore"
console. log("outer function "+city)
function inner(x,y){
var result=x+y
console.log(result)
console.log("inner function "+city)
}
return inner
}
var res=Outer()
res(10, 40)