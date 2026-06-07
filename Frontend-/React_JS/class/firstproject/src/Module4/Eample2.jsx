import React from 'react'

function Eample2({name,age,city,student}) {
    return (
    <>
      <h1>my name is{name}</h1>
      <p>i am {age} years old</p>
      <h2> i am from {city}</h2>
      <h3>{student?"i am student":"not a student"}</h3>
    </>
  )
}

export default Eample2
