import React, {useRef} from 'react'

function Ex1() {
    let refContainer=useRef(0)
    let handleClick=()=>{
        let res=refContainer.current++
        console.log(res)
    }
  return (
    <div>
      <h1>Example for useRef hook</h1>
      <p>Ref value is {refContainer.current}</p>
      <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default Ex1