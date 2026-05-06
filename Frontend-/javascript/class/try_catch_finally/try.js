//syntax:
    // try{
    //code
    //}
    // catch(err){
    //     // to get the errar 
    // }
// try{
//     var num=20;
//     fname="viart"
//     console.log('num'/num)
//     console.log(fname)
// }
// catch(err){
//     console.log(err)
// }
// finally{
//     console.log("finallay executed")
// }
try {
    var num = 20;
    fname = "sachin";
    
    // Capitalize 'Error' to make it work
    throw new Error("product id no"); 
} 
catch(err) {
    // This will now catch the error object and log it
    console.log(err.message); 
} 
finally {
    // This runs no matter what happens above
    console.log("finally executed");
}
