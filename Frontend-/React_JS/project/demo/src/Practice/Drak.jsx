import React, { useState } from "react";


function Dark() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const themeStyles = {
    backgroundColor: darkMode ? "#121212" : "#f4f4f4",
    color: darkMode ? "#ffffff" : "#333333",
    minHeight: "100vh",
    padding: "2rem",
    transition: "all 0.3s ease-in-out",
  };

  const cardStyles = {
    backgroundColor: darkMode ? "#1e1e1e" : "#ffffff",
    color: darkMode ? "#f0f0f0" : "#222222",
    borderRadius: "12px",
    padding: "20px",
    maxWidth: "350px",
    margin: "0 auto",
    textAlign: "center",
    boxShadow: darkMode
      ? "0 0 10px rgba(255,255,255,0.1)"
      : "0 0 10px rgba(0,0,0,0.1)",
  };

  return (
    <div style={themeStyles}>
      <div className="toggle-container">
        <label className="switch">
          <input type="checkbox" onChange={toggleTheme} />
          <span className="slider round"></span>
        </label>

        <span>{darkMode ? "Dark Mode" : "Light Mode"}</span>
      </div>

      <div style={cardStyles}>
        <img
          src="https://randomuser.me/api/portraits/men/75.jpg"
          alt="profile"
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            objectFit: "cover",
            marginBottom: "15px",
          }}
        />

        <h2>John Doe</h2>
        <p>Frontend Developer</p>
        <p>Bangalore, India</p>
      </div>
    </div>
  );
}

export default Dark;