// Using fetch() with POST Request

fetch("https://api.example.com/data", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        name: "Pavan",
        age: 25
    })
})
.then(res => res.json())
.then(data => console.log(data));