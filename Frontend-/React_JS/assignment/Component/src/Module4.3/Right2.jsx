import React,{ useState } from "react";

function Right2(){

  const [showFriends,
  setShowFriends] =
  useState(true);

  return(

    <div style={{
      width:"20%",
      padding:"20px"
    }}>

      <button
        onClick={() =>
        setShowFriends(!showFriends)}
      >
        Online Friends
      </button>

      {
        showFriends &&
        <>
          <p>🟢 MS Dhoni</p>
          <p>🟢 Sachin</p>
          <p>🟢 Rohit Sharma</p>
          <p>🟢 KL Rahul</p>
        </>
      }

    </div>
  );
}

export default Right2;