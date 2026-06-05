import React from 'react'

function Child(props) {
  return (
    <div>
      <h2>Child Component</h2>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <pre>{props.condition ? "Adult" : "Teen"}</pre>

    </div>
  )
}

export default Child
