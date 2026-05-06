// let person{
//     fname="tanu",
//     lname="santhu",
//     age=21,
//     place="bengaluru"
//     detail:function(){
//         console.log("name is "+fname+""+lname+"age is"+age+ "place"+detail+"")
//     }
// }
// person.detail()
let person = { 
    fname: "tanu", 
    lname: "santhu", 
    age: 21, 
    place: "bengaluru", 
    detail: function() { 
        console.log("name is " + this.fname + " " + this.lname + ", age is " + this.age + ", place is " + this.place); 
    } 
};

person.detail();
