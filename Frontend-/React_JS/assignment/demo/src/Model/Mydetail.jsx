import React from 'react'
import Photo from '../assets/Photo.jpg'; 
function Mydetail() {
  let handleclick = () => {
        alert("thank you")
    }
  return (
    <div>
      <center>
      <p>age : 22</p>
      <p>phone number: 8147422441</p>
      <p>current date:{ new Date().toLocaleDateString()}</p>
          <img src={Photo} alt="photo" width="200" /><br />
      <button onClick={handleclick}>click</button>
      </center>
    </div>

  )
}

export default Mydetail
