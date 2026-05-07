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