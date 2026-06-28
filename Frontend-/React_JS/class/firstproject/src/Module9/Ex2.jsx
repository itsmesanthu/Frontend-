import React from 'react'

function Ex2() {
    let refContainer=useRef(0)
    let handleClick=()=>{
        let res=refContainer.current++
        console.log(res)
    }
  return (
    <div>
        <h1>example for storing nutable value</h1>
      
    </div>
  )
}

export default Ex2
