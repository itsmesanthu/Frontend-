import React, { useState } from "react";

function Student() {
  const students = {
    student1: {
      image:
        "data:image/jpeg;base64,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",
      name: "Raj",
      age: 18,
      class: "12th",
      city: "Mysore",
      state: "Karnataka",
      email: "raj@gmail.com",
      school: "ABC School",
    },

    student2: {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjh1pjLdm_hmwm1AV6WIWXvxPGVB-w8UQJLA&s",
      name: "Priya",
      age: 17,
      class: "11th",
      city: "Bengaluru",
      state: "Karnataka",
      email: "priya@gmail.com",
      school: "XYZ School",
    },
  };

  const [currentStudent, setCurrentStudent] = useState("student1");

  const stu = students[currentStudent];

  return (
    <div
      style={{
        width: "900px",
        border: "2px solid black",
        margin: "20px auto",
        padding: "20px",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Student Profile Card</h1>

      <div style={{ display: "flex", gap: "30px" }}>
        {/* Left Side Image */}
        <div>
          <img
            src={stu.image}
            alt={stu.name}
            width="250"
            height="250"
          />
        </div>

        {/* Right Side Details */}
        <div style={{ flex: 1 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "15px",
            }}
          >
            <p><b>Name:</b> {stu.name}</p>
            <p><b>State:</b> {stu.state}</p>

            <p><b>Age:</b> {stu.age}</p>
            <p><b>Email:</b> {stu.email}</p>

            <p><b>Class:</b> {stu.class}</p>
            <p><b>School:</b> {stu.school}</p>

            <p><b>City:</b> {stu.city}</p>
          </div>

          <div
            style={{
              marginTop: "30px",
              display: "flex",
              gap: "20px",
            }}
          >
            <button onClick={() => setCurrentStudent("student1")}>
              Student 1
            </button>

            <button onClick={() => setCurrentStudent("student2")}>
              Student 2
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Student;