import React from 'react'

function Child({sub="non",name="non",click}) {
  
  return (
    <div>
      <h1>welcome {sub} class</h1>
      <p>my name is {name}</p>
      <button onClick={click}>lode more</button>
    </div>
  )
}

export default Child
