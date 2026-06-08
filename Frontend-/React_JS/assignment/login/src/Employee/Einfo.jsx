import React from 'react'
import Ecard from './Ecard';
function Einfo(){
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <Ecard
        name="Raj"
        department="React Developer"
        location="Mysore"
      />

      <Ecard
        name="Priya"
        department="UI Designer"
      />

      <Ecard
        name="Arun"
        department="Backend Developer"
        location="Chennai"
      />
    </div>
  );
}

export default  Einfo
