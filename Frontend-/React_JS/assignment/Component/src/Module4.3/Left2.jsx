import React,{ useState } from "react";

function Left2() {

  const [selected,setSelected] = useState("");

  const menu = [
    "Feed",
    "Chat",
    "Videos",
    "Groups",
    "Jobs",
    "Events"
  ];

  return (
    <div style={{
      width:"20%",
      padding:"20px"
    }}>

      {
        menu.map((item,index)=>(
          <h3
            key={index}
            onClick={() => setSelected(item)}
            style={{
              cursor:"pointer",
              color:
              selected===item
              ? "blue"
              : "black"
            }}
          >
            {item}
          </h3>
        ))
      }

      <h4>
        Selected : {selected}
      </h4>

    </div>
  );
}

export default Left2;