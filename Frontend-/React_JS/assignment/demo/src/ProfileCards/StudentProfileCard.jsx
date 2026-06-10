import React, { useState } from "react";


function StudentProfileCard() {
    const[data,setData]=useState({
        image:"",
        name:"Sanjay G K",
        age : 22,
        classs : "12std",
        city : "Bengaluru",
        status : "online",
        email : "sanjayganesh@gmail.com",
        school:"Atreya Vidyaniketan",
        state:"Karnataka"
    })
let changeStudent1=()=>{
    setData({
        ...data,
        image:"",
    })
}
let changeStudent2=()=>{
    setData({
        ...data,
        image:"",
    })
}
  return (
    <div
      style={{
        display: "flex",
        flexDirection:'column',
        justifyContent: "center",
        alignItems: "center",
        marginTop: "150px",
      }}
    >
      <h1 style={{ fontFamily: "monospace" }}>Student Profile Card</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          boxShadow: "0px 0px 10px black",
          borderRadius: "10px",
          padding: "15px",
          width: "700px",
        }}
      >
        <div>
          <img src={data.image} alt="no-image" height={400} width={300} />
        </div>
        <div style={{ margin: "10px", widows: "450px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "10px",
            }}
          >
            <p>
              <strong>Name:</strong>
              {data.name}
            </p>
            <p>
              <strong>Status:</strong>
              {data.status}
            </p>

            <p>
              <strong>Age:</strong>
              {data.age}
            </p>
            <p>
              <strong>Email:</strong>
              {data.email}
            </p>

            <p>
              <strong>Class:</strong>
              {data.classs}
            </p>
            <p>
              <strong>School:</strong>
              {data.school}
            </p>

            <p>
              <strong>City:</strong>
              {data.city}
            </p>
            <p>
              <strong>State:</strong>
              {data.state}
            </p>
<button
  onClick={changeStudent1}
  style={{
    padding: "5px 10px",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
  }}
>
  Student 1
</button>

<button
  onClick={changeStudent2}
  style={{
    padding: "5px 10px",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
  }}
>
  Student 2
</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentProfileCard;
