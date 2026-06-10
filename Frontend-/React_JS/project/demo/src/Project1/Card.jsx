import React from 'react'
function Card({ image, name, details }) {
  return (
    <div style={{ height: '500px', width: '300px', border: '2px  none' ,margin:'20px'}}>
      <div style={{
        display:'flex',justifyContent:'center',alignItems:'center'
      }}>
        <img
          src={image}
          alt={name}
          style={{ width: '200px', height: '150px' }}
        />
      </div>

      <p>
        <b>{name}</b>
        <br />
        {details}
      </p>
      <center>
      <button
        style={{
          height:'30px',width:'100px',
          border: '2px solid black',
          backgroundColor: 'black',
          color: 'white'
        }}
      >
        Learn More
      </button>
      </center>
    </div>
  )
}

export default Card