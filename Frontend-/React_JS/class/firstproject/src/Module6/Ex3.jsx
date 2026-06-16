import React from 'react'

function Ex3(condtion) {
    let content=<h1>Welcome to react class</h1>
  return (
    <div>
      <h1>eample for logical and opretor</h1>
      {condtion&& content}
    </div>
  )
}

export default Ex3
