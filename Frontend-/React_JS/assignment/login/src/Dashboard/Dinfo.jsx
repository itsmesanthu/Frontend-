import React from 'react'
import Dashboard from './Dashboard';
function Dinfo()  {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <Dashboard
        username="Raj"
        isLoggedIn={true}
      />

      <Dashboard
        username="Priya"
        isLoggedIn={false}
      />

      <Dashboard
        username="Arun"
        isLoggedIn={true}
      />
    </div>
  );
}

export default Dinfo
