var person={
    name:"tanu",
    age:21,
    skill:["sleeping","eating","sleeping"],
    height:"150cm",
    city:"matikere",
    play: function(){
        console.log(this.name+"is heigth is "+this.height)
    }
}
console.log(person)
console.log(person.age)
console.log(person.skill[1])
person.play()
var key=Object.keys(person)
console.log(key)
var value=Object.values(person)
console.log(value)
// Create object
var person = {
    name: "tanu",
    age: 21
};

// Seal the object
Object.seal(person);

// Modify existing property (Allowed)
person.age = 22;

// Try to add new property (Not Allowed)
person.city = "Bangalore";

// Try to delete property (Not Allowed)
delete person.name;
console.log(person)

// Object.assign() example

var person = {
    name: "tanu",
    age: 21
};

var details = {
    city: "Bangalore",
    height: "150cm"
};

// Merge objects
Object.assign(person, details);

console.log(person);
res=Object.entries(person)
console.log(res)

var person = {
    name: "tanu",
    age: 21
};

// Freeze the object
Object.freeze(person);
// Try to modify value (Not allowed)
person.age = 25;
// Try to add property (Not allowed)
person.city = "Bangalore";
// Try to delete property (Not allowed)
delete person.name;
console.log(person);
const user={name:"raj",age:39}
Object.freeze(user)
user.name="virat"
user.city="mumbai"
delete user.age
console.log(user)