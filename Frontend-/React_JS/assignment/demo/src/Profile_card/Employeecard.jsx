import React, { useState } from "react";

function Employeecard() {
  const employees = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxMcHDSZX9LfFNnFUvyEq0LKfHa9JWYaX70Q&s",
      name: "Raj",
      age: 25,
      city: "Mysore",
      email: "raj@gmail.com",
      department: "React Developer",
      gender: "male",
    },
    {
      image:
        "https://www.shutterstock.com/image-illustration/business-woman-vector-female-employee-260nw-2645848211.jpg",
      name: "Priya",
      age: 23,
      city: "Mysore",
      email: "priya@gmail.com",
      department: "UI Designer",
      gender: "female",
    },
  ];

  const [gender, setGender] = useState("male");

  const filteredEmployees = employees.filter(
    (emp) => emp.gender === gender
  );

  return (
  <div
    style={{
      width: "900px",
      margin: "20px auto",
      border: "2px solid black",
      padding: "20px",
    }}
  >
    <h1 style={{ textAlign: "center" }}>
      Employee Profile Card
    </h1>

    {filteredEmployees.map((emp, index) => (
      <div
        key={index}
        style={{
          display: "flex",
          gap: "30px",
          alignItems: "center",
        }}
      >
        <div>
          <img
            src={emp.image}
            alt={emp.name}
            width="300"
            height="300"
            style={{
              border: "1px solid gray",
            }}
          />
        </div>
        <div style={{ flex: 1 }}>
          <p>
            <b>Name:</b> {emp.name}
          </p>

          <p>
            <b>Age:</b> {emp.age}
          </p>

          <p>
            <b>City:</b> {emp.city}
          </p>

          <p>
            <b>Email:</b> {emp.email}
          </p>

          <p>
            <b>Department:</b> {emp.department}
          </p>

          <p>
            <b>Gender:</b> {emp.gender}
          </p>
        </div>
      </div>
    ))}
    <div
      style={{
        marginTop: "20px",
        display: "flex",
        justifyContent: "center",
        gap: "20px",
      }}
    >
      <button
        onClick={() => setGender("male")}
        style={{
          padding: "10px 20px",
          cursor: "pointer",
        }}
      >
        Male Employee
      </button>

      <button
        onClick={() => setGender("female")}
        style={{
          padding: "10px 20px",
          cursor: "pointer",
        }}
      >
        Female Employee
      </button>
    </div>
  </div>
)}
export default Employeecard;