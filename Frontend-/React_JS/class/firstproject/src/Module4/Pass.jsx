import React, { useState } from "react";
import Child from "./Child";

function Pass() {
  const [message, setMessage] = useState(
    "Hello from Parent Component"
  );

  return (
    <div>
      <h1>Parent Component</h1>

      {/* Passing state as props */}
      <Child text={message} />
    </div>
  );
}

export default Pass;