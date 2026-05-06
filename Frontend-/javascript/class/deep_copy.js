// Deep Copy
//      >deep copy means creating a new completely independent copy of an object (or array), including all of its nested object/arrays
//      > In deep copy all the levels of the original object are copied the new object does not share references with the original changes made in the copy do not affect the original and vice versa
let original={
    name:"virat",
    address:{
        city:"bengaluru"
    }
}
// deep copy using json 
let deepcopy=JSON.parse(JSON.stringify(original))
deepcopy.address.city="matikere"
console.log(original)
console.log(deepcopy)
// deepcopy for array
let numbers=[1,2,3,[4,5]]
let deepcopy1=JSON.parse(JSON.stringify(numbers))
deepcopy1[3][0]=45
console.log(numbers)
console.log(deepcopy1)