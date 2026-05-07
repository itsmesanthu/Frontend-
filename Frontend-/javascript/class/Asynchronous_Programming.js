// Asynchronous Programming
//     • Asynchronous programming in js is a non-blocking execution model where long-running tasks can be executed in the background without blocking the main thread. Means while other operations can continue to run.
//     • Asynchronous programming is used with long-running tasks like network requests, file operations, timers, etc.
// note:
// • In js asynchronous programming execution take care by the event loop
// • Event loop is part of the js runtime environment it is not part of is engine
// • In is setTimeout and setinterval are the built-in functions that allow us to perform asynchronous operations.
// • but we can also use Promises, async/await for better handling of async code.
// • Asynchronous programming can be done by using timers, promises, async and await.
console.log("start")
function demo(){
    setTimeout(() => {
        console.log("demo fucntion is running")
    }, 2000);
}
demo()
console.log("end")