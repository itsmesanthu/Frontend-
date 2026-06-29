import React, { useContext } from "react";
import { ContextData } from "./Component1";

function Component4() {
  const { content, imageSrc } = useContext(ContextData);

  return (
    <div
      style={{
        height: "350px",
        width: "300px",
        boxShadow: "0px 0px 10px black",
        padding: "20px",
      }}
    >
      <h1>Component4</h1>

      <h4 style={{ textAlign: "center" }}>{content}</h4>

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
    </div>
  );
}

export default Component4;