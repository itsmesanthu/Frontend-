import React from 'react'
import Pcard from './Pcard';
function Pinfo(){
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <Pcard
        name="iPhone 15"
        price={79999}
        category="Mobile"
        rating={4.8}
      />

      <Pcard
        name="MacBook Air"
        price={99999}
        category="Laptop"
        rating={4.9}
      />

      <Pcard
        name="Boat Headphones"
        price={1999}
        category="Accessories"
        rating={4.5}
      />
    </div>
  );
}

export default Pinfo
