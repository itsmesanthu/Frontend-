// Synchronous Programming
//     • A synchronous function is one that runs in a single thread and completes its execution before moving on to the next task.
//     • It will block other operations until the current task is completed.
//     • synchronous programming means code execute line by line, that is one task at at a a time time and each line waits for the previous line to complete before executing.
//note:>only one operation happen at a time.
//>no parallel execution allowed.
//>if any task takes time to complete, it will block the entire program until that task is finished.
console.log("start")
function demo(){
    console.log("demo function is running")
}
demo()
console.log("end")
