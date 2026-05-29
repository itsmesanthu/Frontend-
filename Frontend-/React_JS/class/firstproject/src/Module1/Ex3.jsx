import React from 'react'

function Ex3() {
    let content="welcome to react js class"
    let handleclick = () => {
        alert("welcome to react js class")
    }
  return (
    <div>
      <h1>{content}</h1>
      <button onClick={handleclick}>submit</button>
    </div>
  )

}
export default Ex3;
