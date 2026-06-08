import React from 'react'
import ProductCard from './ProductCard';
function Productinfo() {
  return (
        <div
      style={{
        display: "flex",
        gap: "20px",
        flexWrap: "wrap",
      }}
    >
      <ProductCard
        productName="Laptop"
        price={50000}
        discount={10}
        inStock={true}
      />

      <ProductCard
        productName="Mouse"
        price={500}
        inStock={false}
      />

      <ProductCard
        productName="Keyboard"
        price={1500}
        discount={5}
        inStock={true}
      />

      <ProductCard
        productName="Monitor"
        price={12000}
        inStock={true}
      />
    </div>
  );
}

export default Productinfo
