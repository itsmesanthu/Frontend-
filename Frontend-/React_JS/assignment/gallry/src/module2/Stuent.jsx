import React from 'react'
import './student.css'
function ProfileCard() {
       const imageURL="https://png.pngtree.com/png-clipart/20220206/original/pngtree-men-cartoon-id-photo-png-image_7262523.png";
    const name="santhu";
    const  role= "student";
    const age="34"
    const blood="B+"
    const  isOnline= true;
  return (
    <div>
      <h1 className="profile-card-heading">Student Card Component</h1>
      <div className="profile-card-content">
        <img src={imageURL} alt={name} 
        height={200} width={200}/>
        <h2>{name}</h2>
        <p>Role:{role}</p>
        <p>Age:{age}</p>
        <p>Blood:{blood}</p>
        <button className="follow-button">Follow</button>
        <p className={isOnline ? "online" : "offline"}>
          {isOnline ? "Online" : "Offline"}
        </p>
      </div>
   
      </div>

  )
}

export default ProfileCard