import React from 'react'

function Card({id,title,price,description,category}) {
  return (
    <div style={styles.card}>
        <p>id: <b>{id}</b></p>
        <p>title: <b>{title}</b></p>
        <p>price: <b>{price}</b></p>
        <p>description: {description}</p>
        <p>category: {category}</p>

    </div>
  )
}
const styles={
    card:{
        width:"300px",
        backgroundColor:"white",
        padding:"20px",
        borderRadius:"15px",
        boxShadow:"0px 0px 10px black",
        textAlign:"center",
        display:"flex",
        flexDirection:"column"
    },
    image:{
        width:"100px",
        height:"100px",
        borderRadius:"50%",
        marginBottom:"15px",
        float:"left"
    }
}

export default Card
