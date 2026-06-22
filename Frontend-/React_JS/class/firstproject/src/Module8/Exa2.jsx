import React, { useEffect } from 'react'

function Exa2() {
    useEffect(()=>{
 console.log("component Mounted")
 return()=>{
    console.log("component unmounted")
 }
    })
  return (
    <div>
      <h1>hi hello</h1>
    </div>
  )
}

export default Exa2
