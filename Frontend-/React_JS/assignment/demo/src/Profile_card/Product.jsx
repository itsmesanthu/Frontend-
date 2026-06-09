import React, { useState } from "react";

function Product() {
  const products = {
    product1: {
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
      productName: "Nike Shoes",
      price: 2999,
      rating: 4.5,
      stock: 20,
      available: true,
      description: "Comfortable running shoes for daily use.",
    },

    product2: {
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
      productName: "Smart Watch",
      price: 4999,
      rating: 4.8,
      stock: 10,
      available: false,
      description: "Advanced smartwatch with health tracking.",
    },
  };

  const [currentProduct, setCurrentProduct] = useState("product1");

  const product = products[currentProduct];

  return (
    <div
      style={{
        width: "900px",
        margin: "20px auto",
        border: "2px solid black",
        padding: "20px",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Product Profile Card</h1>
      <div style={{ display: "flex", gap: "30px" }}>
        <div>
          <img
            src={product.image}
            alt={product.productName}
            width="300"
            height="300"
          />
        </div>
        <div>
          <p>
            <b>Product Name:</b> {product.productName}
          </p>

          <p>
            <b>Price:</b> ₹{product.price}
          </p>

          <p>
            <b>Rating:</b> ⭐ {product.rating}
          </p>

          <p>
            <b>Stock:</b> {product.stock}
          </p>

          <p>
            <b>Available:</b>{" "}
            {product.available ? "In Stock" : "Out of Stock"}
          </p>

          <p>
            <b>Description:</b> {product.description}
          </p>

          <div
            style={{
              marginTop: "30px",
              display: "flex",
              gap: "20px",
            }}
          >
            <button onClick={() => setCurrentProduct("product1")}>
              Product 1
            </button>

            <button onClick={() => setCurrentProduct("product2")}>
              Product 2
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;