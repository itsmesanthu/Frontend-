import React, { useEffect, useState } from 'react'

function Exa1() {
    const [count, setCount] = useState(0);
    const [add, setAdd]=useState(0);
useEffect(()=>{
  console.log('hi welcome')
},[add])

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Clicked {count} times
      </button>
      <button onClick={() => setAdd(add + 1)}>
        add {add} times
      </button>
    </div>
  )
}

export default Exa1
