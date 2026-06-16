import React, { useState } from "react";
import "./UserProfile.css";

function UserProfile() {
  const [isOnline, setIsOnline] = useState(false);

  return (
    <div className="up-container">
      <h2 className="up-title">User Profile</h2>
      <p className="up-name">Name: Santhu</p>

      <h3 className="up-status">
        Status: <span className="up-badge">{isOnline ? "🟢 Online" : "🔴 Offline"}</span>
      </h3>

      <button
        className={`up-button ${isOnline ? '' : 'offline'}`}
        onClick={() => setIsOnline(!isOnline)}
      >
        Toggle Status
      </button>
    </div>
  );
}

export default UserProfile;