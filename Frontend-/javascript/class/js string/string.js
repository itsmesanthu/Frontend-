    //string 
var str="virat" //valid
//var str1=virat  //invalid

//string concatenation
var fname="santhu"
var sname="gp"
console.log(fname+" "+sname)

//how to find the lenth of a give string
let city="bengaluru"
console.log(city.length)

    //string methods

//charAt()
var str1="hello word"
console.log(str1.charAt(4))
console.log(str1.charAt(3))

//toLowerCase()
console.log(str1.toLowerCase())
console.log(str.toLowerCase())

//toUpperCase()
console.log(str1.toUpperCase())
console.log(str.toUpperCase())
 
//substring()
console.log(str1.substring(2))
console.log(str1.toUpperCase(-2))

//slice()
console.log(str1.slice(2))
console.log(str1.slice(-2))
console.log(str1.slice(2,8))
console.log(str1.slice(-5,-1))

//replace()
console.log(str1.replace("hello","wlecome to my"))
console.log(str1.replace("word","wlecome to javascript class"))

//replaceAll()
var words="hi hi hi hello hello it is a javascript class "
console.log(words.replaceAll("hi","namaskra"))
console.log(words.replaceAll("hello","idu"))

//trim()
var trim="        hello   word         "
console.log(trim)
console.log(trim.trim())
console.log(trim.trim()+"hello")

//concat()
let strr1="hello"
let strr2="world"
console.log(strr1.concat(strr2))