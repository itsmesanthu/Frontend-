import React from 'react'
import img from '../assets/heroimg.jpg'
function Main() {
      let image={
          im:img
      }
  return (
    <div>
      <div style={{height:'500px',width:'100%'}}>
        <img src={image.im} alt=""style={{height:'500px',width:'100%'}}/>
      </div>
      <div style={{ display:'flex',justifyContent:'center',alignItems:'center',gap:'10px',backgroundColor:'#e5e6ea',height:'200px',width:'100%'}}>
      <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo illum placeat quia tempore a consequuntur asperiores perferendis inventore obcaecati soluta ipsam minima, enim deleniti voluptate ratione hic porro! Voluptas, maxime!</p></div>
      <div><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, saepe veniam? Deleniti quam tempora earum natus asperiores provident totam aperiam id! Voluptates saepe adipisci eaque voluptate, labore beatae earum temporibus?</p></div>
      <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quod aspernatur, sed velit similique temporibus placeat odio repellat molestias doloribus sint, architecto earum tempore cumque quas praesentium laudantium impedit ex.</p></div>
    </div>
    </div>
  )
}

export default Main
