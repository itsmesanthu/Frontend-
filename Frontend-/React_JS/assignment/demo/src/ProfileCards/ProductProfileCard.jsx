import React, { useState } from "react";

function ProductProfileCard() {
  const [data, setData] = useState({
    pimage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSHmzhac7rGHHymY0qOluJRFFv4HgI8FQOjw&s",
    pname: "iPhone",
    price: 96969,
    rating: 4.5,
    description: "World's No.1 Smartphone Company",
    stock: true,
  });
  let Product2Change = () => {
    setData({
      pimage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_we8RXxo6fy9MJDGG7WZatvWBPUI4Fa4Xlg&s",
      pname: "Tablet",
      price: 10000,
      rating: 3.9,
      description: "More than a Mobile",
      stock: false,
    });
  };
  let Product1Change = () => {
    setData({
      pimage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSHmzhac7rGHHymY0qOluJRFFv4HgI8FQOjw&s",
      pname: "iPhone",
      price: 96969,
      rating: 4.5,
      description: "World's No.1 Smartphone Company",
      stock: true,
    });
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection:'column',
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <h1 style={{ fontFamily: "monospace" }}>Product Profile Card</h1>
      <div
        style={{
          width: "500px",
          boxShadow: "0px 4px 10px 0px black",
          borderRadius: "15px",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          padding: "0px 10px 10px 10px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "0px 10px 10px 0px",
          }}
        >
          <img src={data.pimage} alt="no image" height={300} width={200} />
          <div>
            <h3>Name: {data.pname}</h3>
            <h3>Price: {data.price}</h3>
            <h3>Rating: {data.rating}</h3>
            <p>
              <strong>Description: </strong>
              {data.description}
            </p>
            <h3>Stock:{data.stock ? "Yes" : "No"}</h3>
            <button
              style={{
                borderRadius: "5px",
                marginRight: "10px",
                padding: "3px",
                backgroundColor: "blue",
                color: "white",
              }}
              onClick={Product1Change}
            >
              Product 1
            </button>
            <button
              style={{
                borderRadius: "5px",
                padding: "3px",
                backgroundColor: "black",
                color: "white",
              }}
              onClick={Product2Change}
            >
              Product 2
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductProfileCard;