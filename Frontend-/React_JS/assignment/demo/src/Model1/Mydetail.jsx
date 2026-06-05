import React from 'react'
import Photo from '../assets/Photo.jpg'; 
function Mydetail() {
  let handleclick = () => {
        alert("thank you")
    }
  return (
    <div>
      <hr />
        <p><b>name:</b> santhosh g p</p>
      <p><b>age</b> : 22</p>
      <p><b>phone number:</b> 8147422441</p>
      <p><b>current date:</b>{ new Date().toLocaleDateString()}</p>
          <img src={Photo} alt="photo" width="200" /><br />
      <button onClick={handleclick}>click</button>
    </div>

  )
}

export default Mydetail
