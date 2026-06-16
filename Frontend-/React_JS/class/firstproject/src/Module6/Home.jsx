import React from 'react'
import { FaHome } from "react-icons/fa";
import { SiSimplelogin } from "react-icons/si";
function Home() {
  return (
     <div ><div style={{height:"200px",width:"80",border:'2px sloid none'}}>
        <center><h1><FaHome />welcome to home</h1>
        <p><SiSimplelogin />logout successfully</p></center></div>
    </div>
  )
}

export default Home
