import React from 'react'
import StudentResult from './StudentResult';
function StudentResultP() {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <StudentResult
        name="Raj"
        marks={78}
      />

      <StudentResult
        name="Priya"
        marks={32}
      />

      <StudentResult
        name="Arun"
        marks={45}
      />
    </div>
  );
}

export default StudentResultP
