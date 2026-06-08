import React from 'react'
import { useState } from "react";
import CounterButtons from './CounterButtons';
function Counter(){
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };


  return (
    <div>
      <h1>Count: {count}</h1>

      <CounterButtons
        increment={increment}
        decrement={decrement}
      />
    </div>
  );
}

export default  Counter
