import React, { useContext } from "react";
import { contextTheme } from "./ThemeContext";

function Navbar() {
const { isDarkMode, toogleTheme } = useContext(contextTheme);
  return (
    <div
      style={{
        background:isDarkMode?"#222":"#fff",
        color:isDarkMode ? "#fff" : "#222",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 30px",
        border: "2px inset yellow",
      }}
    >
      <div>
        <h2>Logo</h2>
      </div>
      <div
        style={{
          display: "flex",
          gap: "20px",
          color:isDarkMode ? "#fff" : "#222",

        }}
      >
        <a href="#" style={{textDecoration:'none', color:isDarkMode ? "#fff" : "#222",
}}>Home</a>
        <a href="#" style={{textDecoration:'none', color:isDarkMode ? "#fff" : "#222",
}}>Dashboard</a>
        <a href="#" style={{textDecoration:'none', color:isDarkMode ? "#fff" : "#222",
}}>Contact Us</a>
        <a href="#" style={{textDecoration:'none', color:isDarkMode ? "#fff" : "#222",
}}>Items</a>
      </div>

      <div>
       <button
  onClick={toogleTheme}
  style={{
    height: "45px",
    width: "100px",
    border: "2px solid black",
    borderRadius: "25px",
    backgroundColor: isDarkMode ? "#fff" : "#222",
    color: isDarkMode ? "#222" : "#fff",
    cursor: "pointer",
  }}
>
  {isDarkMode ? "Light ☀️" : "Dark 🌙"}
</button>
      </div>
    </div>
  );
}

export default Navbar;