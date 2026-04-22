// if - else- if
function Greet(message) {
  let mes = message.toLowerCase();

  if (mes === "gm") {
    console.log("Good Morning");
  } else if (mes === "ga") {
    console.log("Good Afternoon");
  } else if (mes === "ge") {
    console.log("Good Evening");
  } else if (mes === "gn") {
    console.log("Good Night");
  } else {
    console.log("Invalid Message");
  }
}

Greet("gm"); 
Greet("GA");
// switch
function Greet(message) {
  let mes = message.toLowerCase();
  switch (mes) {
    case "gm":
      console.log("Good Morning");
      break;
    case "ga":
      console.log("Good Afternoon");
      break;
    case "ge":
      console.log("Good Evening");
      break;
    case "gn":
      console.log("Good Night");
      break;
    default:
      console.log("Invalid Message");
  }
}
Greet("gm"); 
Greet("GA"); 

//ternary operator
var firstname="sachin"
firstname.includes("viart")?
console.log("my name is virat"):
console.log("you are name is someting else")