import React from 'react'
import { useState } from "react";
function Ex6(){
  const [count, setCount] = useState(0);

//   const increment = () => {
//     setCount(count + 1);
//   };

//   const decrement = () => {
//     setCount(count - 1);
//   };
  return (
    <div>
      <h1>Count: {count}</h1>
    <div>
        <button onClick={()=>setCount((prev)=>prev+1)}>increment</button>
        <button onClick={()=>setCount(0)}>reset</button>
        <button onClick={()=>setCount((prev)=>prev-1)}>decrement</button>
    </div>
    </div>
  );
}

export default  Ex6
