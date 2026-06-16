import React from 'react'

function ProductCard({keys,image,uname,age,role,status}) {
  return (
    <div style={styles.card}>
      <img src={image}
    alt='no image' style={styles.image}/>
    <h2>{uname}</h2>
    <p>Age:{age}</p>
    <p>Role:{role}</p>
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
  )
}

const styles={
    card:{
        width:"250px",
        backgroundColor:"white",
        borderRadius:"12px",
        padding:"20px",
        boxShadow:"0px 0px 10px black",
        textAlign:"center"
    },
    image:{
        width:"100%",
        height:"180px",
        objectFit:"cover",
        borderRadius:"10px"
    },
    deletBtn:{
        marginTop:"10px",
        padding:"10px 15px",
        border:"none",
        backgroundColor:"red",
        color:"white",
        borderRadius:"5px",
        cursor:"pointer"
    },
    addBtn1:{
        padding:"10px 15px",
        border:"none",
        backgroundColor:"orange",
        color:"white",
        borderRadius:"5px",
        cursor:"pointer"
    }
}

export default ProductCard