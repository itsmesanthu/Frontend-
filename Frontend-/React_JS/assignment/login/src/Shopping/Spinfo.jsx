import React from 'react'
import CartItem from './CartItem';
function Sinfo()  {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <CartItem
        productName="Laptop"
        price={50000}
        quantity={2}
      />

      <CartItem
        productName="Mouse"
        price={500}
      />

      <CartItem
        productName="Keyboard"
        price={1500}
        quantity={3}
      />
    </div>
  );
}


export default Sinfo
