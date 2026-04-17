//advance array methods
    //forEach
let arr=["virat",100,true,200,777,false,'raj']
arr.forEach((ele,index)=>{
    console.log(ele+" "+index)
})

let data=[{name:"raj",age:30},{name:"virat",age:33},{name:"sachin",age:40},{name:"riya",age:27},{name:"vijay",age:50}
]
data.forEach((ele,index)=>{
    console.log(ele.name+" "+ele.age+" "+index)
})


 //map()
let num=[1,2,3,4,5,6,7,8,9]
let res=num.map((ele,index)=>{
    return ele*10
})
console.log(res)

let emp=[{id:101,salary:1000},{id:102,salary:3000},{id:103,salary:5000},{id:104,salary:7000}]//map()
let res1=emp.map((ele,index)=>{
    return {id:ele.id,salary:ele.salary*1.1}
})
console.log(res1)


    //filter
let number=[101,202,10,20,70,333,777,555]
let res2=number.filter((ele)=>{
    return ele>200
})
console.log(number)
console.log(res2)

let preson=[{name:"raj",age:22},{name:"virat",age:31},{name:"raki",age:41},{name:"teja",age:51},]
let res3=preson.filter((ele)=>{
    return ele.age<40
})
console.log(res3)

    //reduce()
let n=[10,20,30,40,50,60,70]
let res4=n.reduce((prev,curr)=>{
    return prev+curr
})
console.log(res4)


    //sort()
let names=["sachin","akash","virat","vijay"]
let result=names.sort()
console.log(result)

let arr1=[10,2,30,4,17]
let res5=arr1.sort((a,b)=>{
    return a-b
})
console.log(res5)

    //toString()
let bikes=["Yamha","Bajaj","Honda","Tvs"]
console.log(bikes.toString())

    //Delete
let fruits=["Banana","Apple","Grapes"]
delete fruits[2]
console.log(fruits)

    //isArray()
let arr2=["Banana","Apple","Grapes"]
let content="WELCOME TO JS CLASS"
console.log(Array.isArray(arr2))
console.log(Array.isArray(content))