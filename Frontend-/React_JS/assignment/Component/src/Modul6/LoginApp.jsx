import React, { useState } from "react";
import "./LoginApp.css";

function LoginApp() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="la-container">
      <button className="la-button" onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>

      {isLoggedIn ? (
        <h2 className="la-title">Welcome User 👋</h2>
      ) : (
        <h2 className="la-title">Thank You User 😊</h2>
      )}
    </div>
  );
}

export default LoginApp;