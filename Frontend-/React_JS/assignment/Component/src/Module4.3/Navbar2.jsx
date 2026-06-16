import React,{ useState } from "react";
import { FaSearch, FaBell } from "react-icons/fa";

function Navbar2() {

  const [notification, setNotification] = useState(5);

  return (
    <div style={{
      height:"70px",
      background:"#1877f2",
      display:"flex",
      justifyContent:"space-around",
      alignItems:"center",
      color:"white"
    }}>

      <h2>facebook</h2>

      <div style={{
        background:"white",
        padding:"10px",
        borderRadius:"20px"
      }}>
        <FaSearch color="black"/>

        <input
          placeholder="Search"
          style={{
            border:"none",
            marginLeft:"10px"
          }}
        />
      </div>

      <button
        onClick={() => setNotification(notification + 1)}
      >
        <FaBell /> {notification}
      </button>

    </div>
  );
}

export default Navbar2;