async function fetchData() {

    // Fetch the data from the URL
    let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');

    // Convert the response to JSON
    let jsonData = await response.json();

    // Log the JSON data
    console.log(jsonData);

    // You can also assign jsonData to a variable if you want to use it later
    let result = jsonData;

    // Log the result
    console.log(result);
}

// Call the async function
fetchData();