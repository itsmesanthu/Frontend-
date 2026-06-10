import React from 'react'
import Card from './Card'
import im1 from '../assets/rooms.jpg'
import im2 from '../assets/dining.jpg'
import im3 from '../assets/pool.jpg'

function Cardinfo() {
  let images={
    i1:im1,
    i2:im2,
    i3:im3
  }
  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'100px'}}>
      <Card
        image={images.i1}
        name="ROOMS"
        details="Lorem ipsum dolor sit amet, consectetur
adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua.."
      />
        <Card
        image={images.i2}
        name="DINING"
        details="Lorem ipsum dolor sit amet, consectetur
adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua."
      />
        <Card
         image={images.i3}
        name="POOLS"
        details="Lorem ipsum dolor sit amet, consectetur
adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua."
      />
    </div>
  )
}

export default Cardinfo