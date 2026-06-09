import React, { useState } from 'react'

function Ex4() {

  const[state, setState] = useState(100)
  const [name, setName] = useState("Virat")
  const [isplaced, setIsplaced] = useState(false)
  const [data, setData] = useState({name: "raj",age: 27})
  const [num, setNum] = useState([200, 300, 400, 500, 600])
  const [image, setImage] = useState(
    "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQd1yqo8dTQySkTKN63RrUm53OiLebM9SShwyYC4h677AkjbDfgyphV0gUeqFqYDbUQkwCaEjKVyqbzf7AJNMkQGZV3dl8U6dawIRTbHBlmeXnC4qJOEj6iqg"
  )

  return (
    <div>

      <h1>{state}</h1>

      <h3>My name is {name}</h3>

      <p>{isplaced ? "yes" : "no"}</p>

      <h4>
        My name is {data.name} I am {data.age} years old
      </h4>

      <h5>
        The array value is {num[2]}
      </h5>

      <img
        src={image}
        alt="no image"
        height={200}
        width={200}
      />

    </div>
)}
export default Ex4