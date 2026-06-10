import React, { useState } from "react";


function EmployeeProfileCard() {
  const [data, setData] = useState({
    image: "",
    name: "",
    age: 22,
    city: "Bengaluru",
    email: "sanjayganesh.gk@gmail.com",
    dept: "ISE",
    status: "Single",
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "150px",
      }}
    >
      <h1 style={{ fontFamily: "monospace" }}>Employee Profile Card</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "600px",
          borderRadius: "10px",
          padding: "10px",
          boxShadow: "0px 0px 8px black",
        }}
      >
        <div>
          <img src={data.image} alt="no-image" height={300} width={250} />
        </div>

        <div style={{ marginLeft: "10px", width: "350px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "10px",
            }}
          >
            <p>
              <strong>Name:</strong> {data.name}
            </p>

            <p>
              <strong>Age:</strong> {data.age}
            </p>

            <p>
              <strong>City:</strong> {data.city}
            </p>

            <p>
              <strong>Dept:</strong> {data.dept}
            </p>

            <p>
              <strong>Status:</strong> {data.status}
            </p>
          </div>

          <p>
            <strong>Email:</strong> {data.email}
          </p>

          <button
            onClick={() =>
              setData({
                ...data,
                status: "Single",
              })
            }
            style={{
              padding: "8px 16px",
              marginRight: "10px",
              borderRadius: "5px",
              cursor: "pointer",
              marginTop: "10px",
              width: "40%",
            }}
          >
            Male
          </button>

          <button
            onClick={() =>
              setData({
                ...data,
                status: "Mingle",
              })
            }
            style={{
              padding: "8px 16px",
              marginRight: "10px",
              borderRadius: "5px",
              cursor: "pointer",
              marginTop: "10px",
              width: "40%",
            }}
          >
            Female
          </button>
        </div>
      </div>
    </div>
  );
}

export default EmployeeProfileCard;