/*
====================================
JavaScript Arrays 
====================================
Topics Covered:
1. Access elements from an array
2. Get array size using length
3. Create 1D, 2D, 3D arrays
4. Access nested array and object values
*/
// 1. Access Elements from an Array

let arr = [100,true,"virat","Z",{ age: 40, city: "Bangalore" },false, 27.98];

console.log("Full Array:", arr);

console.log("Index 1:", arr[1]); // true
console.log("Index 3:", arr[3]); // Z
console.log("Object:", arr[4]); // { age: 40, city: "Bangalore" }
console.log("Age:", arr[4].age); // 40
console.log("City:", arr[4].city); // Bangalore

// 2. Get the Size of an Array

console.log("Array Length:", arr.length);     // 7
console.log("Last Index:", arr.length - 1);   // 6

// 3. Create 1D, 2D, and 3D Arrays

    // 1D Array
let arr1D = [10, 20, 30];
console.log("1D Array:", arr1D);

    // 2D Array
let arr2D = [[10, 20],[30, 40]];
console.log("2D Array:", arr2D);


    // 3D Array
let arr3D = [[[10, 20],[30, 40]]];
console.log("3D Array:", arr3D);

// 4. 2D Array Example with Object
let arrExample2D = ["virat",true,20,[40, 50],{ home: "B" },false];

console.log("2D Example:", arrExample2D);

console.log("Value:", arrExample2D[2]);        // 20
console.log("Nested Value:", arrExample2D[3][1]); // 50
console.log("Object Property:", arrExample2D[4].home); // B

// 5. 3D Array Example
let arrExample3D = [[10, 20, 30],[40, 50, 60],[70, 80, 90],[100]];
console.log("3D Example:", arrExample3D);
console.log("Row:", arrExample3D[3]);       // [100]
console.log("Value:", arrExample3D[1][1]);  // 50
console.log("Value:", arrExample3D[2][0]);  // 70


//  methods in array
    
    //push()
let arr1=[]
arr1.push(18)
arr1.push("nothing")
arr1.push(true)
arr1.push({age:21, city:"bengaluru"})
console.log(arr1)
    //pop()
let arr2=["hi",11,"hello","y",false]
console.log(arr2)
arr2.pop()
console.log(arr2)
arr2.pop()
arr2.pop()
console.log(arr2)
    //unshift()
let arr3=[10,20,"raj",true,"z"]
console.log(arr3)
arr3.unshift(100)
arr3.unshift("ehhhhhh")
console.log(arr3)
    //indexof
let arr4=[10,30,40,50,60,70,80]
console.log(arr4.indexOf(40))
console.log(arr4.indexOf(70))
console.log(arr4.indexOf(110))
    
