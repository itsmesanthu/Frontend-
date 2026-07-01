import React from 'react'
import { MdBorderColor } from 'react-icons/md'

function Card({id,title,image,price,description,category}) {
  return (
    <div style={styles.card}>
        <p>id: <b>{id}</b></p>
        <p>title: <b>{title}</b></p>
        <p><img src={image} alt="" height="300px" width="200px"/></p>
        <p>price: <b>{price}</b></p>
        <p>description: {description}</p>
        <p>category: {category}</p>
        <button style={styles.button}>Add to cart</button>

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
    },
    button:{
        height:"30px",
        backgroundColor:"blue",
        color:"white",
        borderRadius:"20px"
    },
    
}

export default Card

