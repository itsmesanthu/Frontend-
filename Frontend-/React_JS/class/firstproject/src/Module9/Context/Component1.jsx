import React, { createContext, useState } from "react";
import Component2 from "./Component2";

export const ContextData = createContext();

function Component1() {
  const [content, setContent] = useState("Welcome to React Class");

  const [imageSrc, setImageSrc] = useState(
    "https://framerusercontent.com/images/N0xefN2fE6CCF4G2YhAg5exTHX8.png?width=1200&height=800"
  );
  const hand=()=>{
    setContent("hi this my bike")
    setImageSrc("https://i.pinimg.com/736x/77/7c/7b/777c7bf376a49545d794b109f3481725.jpg")
  }

  return (
    <div
      style={{
        height: "500px",
        width: "600px",
        boxShadow: "0px 0px 10px black",
        padding: "20px",
      }}
    >
      <h1>Component1</h1>

      <h4 style={{ textAlign: "center" }}>{content}</h4>
      <img src={imageSrc} alt=""  style={{
          width: "150px",
          height: "150px",
          borderRadius: "8px",
          marginTop: "10px",
        }} />
<button onClick={hand}>cleck</button>
      <ContextData.Provider
        value={{
          content,
          setContent,
          imageSrc,
          setImageSrc,
        }}
      >
        <Component2 />
      </ContextData.Provider>
    </div>
  );
}

export default Component1;