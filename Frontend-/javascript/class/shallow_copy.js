// shallow copy
//     •A shallow copy is a copy of an object where only first level of the object is duplicated but the nested(inner) 
//     objects or references are not copied, they are just referenced.
let original={
    name:"virat",
    address:{
        city:"bengaluru"
    }
}
//shallow copy using object assign
let shallowcapy=Object.assign({},original)
console.log(shallowcapy)
shallowcapy.name="raj"
console.log(shallowcapy)
console.log(original)
 
shallowcapy.address.city="matikere"
console.log(shallowcapy)
console.log(original)
 

// shallow capy for array
let numbers=[1,2,3,[4,5]]
let shallowcapy1=numbers.slice()
shallowcapy1[3][0]=32
console.log(numbers)
console.log(shallowcapy1)