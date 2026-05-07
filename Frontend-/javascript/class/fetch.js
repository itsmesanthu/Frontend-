// Fetch()
// fetch is a method which works internally as a promise. fetch method is used to make a network request or to call an API in JavaScript.
// Fetch will return a promise in JavaScript.

fetch('https://fakestoreapi.com/products/1') // fake api call

.then((res) => res.json()) // return promise fulfilled

.then((jsondata) => {
    console.log(jsondata)
}) // fulfill

.catch((error) => {
    console.log(error + " promise failed")
}) // rejected