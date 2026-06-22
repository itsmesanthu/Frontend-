import React, { useEffect, useState } from 'react'

function Eax3() {
    const [count,setCount]=useState(0)
    let incerment=()=>{
        setCount((prev)=>prev+1)
    }
    let decerment=()=>{
        if (count>0){
        setCount((prev)=>prev-1)
    }}
    let reset=()=>{
        setCount(0)
    }
    useEffect(()=>{
        document.title=`count is ${count}`
    },[count])
  return (
    <div>
      <h1>count is :{count}</h1>

        <button onClick={incerment}>incerment</button>
        <button onClick={reset}> reset</button>
        <button onClick={decerment}> decerment</button>
    </div>
  )
}

export default Eax3
