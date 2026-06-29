import React, { useContext } from "react";
import { ContextData } from "./Component1";
import Component3 from './Component3'

function Component2() {
    const { content, imageSrc } = useContext(ContextData);
  return (
    <div style={{height:"400px",width:"500px",
        boxShadow:"0px 0px 10px black",padding:"20px"
    }}>
      <h1>Component2</h1>
       <img
        src={imageSrc}
        alt="Context Data"
        style={{
          width: "150px",
          height: "150px",
          borderRadius: "8px",
          marginTop: "10px",
        }}
      />
      <Component3/>

    </div>
  )
}

export default Component2