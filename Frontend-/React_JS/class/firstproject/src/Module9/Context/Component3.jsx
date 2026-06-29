import React, { useContext } from "react";
import { ContextData } from "./Component1";
import Component4 from './Component4'

function Component3() {
   const { content, imageSrc } = useContext(ContextData);
  return (
   <div style={{height:"300px",width:"400px",
        boxShadow:"0px 0px 10px black",padding:"20px"
    }}>
      <h1>Component3</h1>
      <h1>{content}</h1>
      <Component4/>
       </div>
  )
}

export default Component3