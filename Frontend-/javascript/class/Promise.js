// Promise in JavaScript
//     >These are the way to handle the asynchronous operations
//     > A promise is a JavaScript object that links producing code and consuming
//     code that represent a value may be available now or in the future or never
// The promise object can be in any 3 states
//             1.pending
//             2.fulfilled
//             3.reiected
// promises
//     |
// -----------------------------------------
// |                  |                   |
// fulfilled        pending            rejected
// |                                      |
// v                                      v
// resolve()                           reject()
// |                                      |
// v                                      v
// then()                              catch()
// Creating a Promise
// create a promise using promise constructor take a function with two parameter resolve and reject. Here the promise will be either be resolved or it will be rejected.
let promDemo = new Promise((resolve, reject) => {
    
    if (false) {
        resolve("Promise Fulfilled")
    }
    else {
        reject("Promise Rejected")
    }

}) //fetch()
// Handling promise result
// we can use .then() method to handle the promise result. If any error occurs, then we use .catch() method to handle the result.

promDemo.then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})
function step(message, time){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log(message)
            resolve()
        }, time)
    })
}

step("customer enters restaurant",1000)
.then(()=>step("waitor takes order",1000))
.then(()=>step("chief starts cooking",1000))
.then(()=>step("food is ready",1000))
.then(()=>step("waitor serves food",1000))
.then(()=>step("customer starts eating",1000))
.then(()=>step("customer pays the bill",1000))
.catch((error)=>console.error("Error",error))