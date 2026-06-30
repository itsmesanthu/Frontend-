import React from "react";

function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 30px",
        border: "2px inset yellow",
      }}
    >
      {/* Logo */}
      <div>
        <h2>Logo</h2>
      </div>

      {/* Navigation Links */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          color:'black'
        }}
      >
        <a href="#" style={{textDecoration:'none'}}>Home</a>
        <a href="#" style={{textDecoration:'none'}}>Dashboard</a>
        <a href="#" style={{textDecoration:'none'}}>Contact Us</a>
        <a href="#" style={{textDecoration:'none'}}>Items</a>
      </div>

      {/* Button */}
      <div>
        <button
          style={{
            height: "45px",
            width: "100px",
            border: "2px solid black",
            borderRadius: "25px",
            backgroundColor: "black",
            color: "white",
            cursor: "pointer",
          }}
        >
          Dark 🌙
        </button>
      </div>
    </div>
  );
}

export default Navbar;