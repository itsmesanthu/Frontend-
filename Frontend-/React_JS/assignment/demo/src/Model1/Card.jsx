import React from "react";

function Card(props) {
  return (
    <div
      style={{
        width: "250px",
        padding: "20px",
        borderRadius: "12px",
        textAlign: "center",
        boxShadow: "0px 0px 10px gray",
      }}
    >
      <img
        src={props.image}
        alt={props.name}
        style={{ width: "150px", height: "150px", objectFit: "contain" }}
      />

      <h2>{props.name}</h2>

      <p><b>Category:</b> {props.category}</p>
      <p><b>Price:</b> ₹{props.price}</p>
      <p><b>Brand:</b> {props.brand}</p>
      <p><b>Rating:</b> ⭐ {props.rating}</p>

      <p>
        <b>Stock:</b>{" "}
        <span style={{ color: props.inStock ? "green" : "red" }}>
          {props.inStock ? "Available" : "Out of Stock"}
        </span>
      </p>

      <button>Buy Now</button>
    </div>
  );
}

export default Card;