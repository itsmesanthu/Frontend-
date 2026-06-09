import React from "react";

function Child1(props) {
  return (
    <div>
      <h2>Child Component</h2>
      <p>{props.text}</p>
    </div>
  );
}

export default Child1;