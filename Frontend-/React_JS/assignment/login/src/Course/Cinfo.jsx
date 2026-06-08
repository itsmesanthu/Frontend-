import React from 'react'
import Ccard from './Ccard';
function Cinfo() {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <Ccard
        courseName="React JS"
        isAvailable={true}
      />

      <Ccard
        courseName="Python"
        isAvailable={false}
      />

      <Ccard
        courseName="Django"
        isAvailable={true}
      />
    </div>
  );
}


export default Cinfo
