import React from 'react'

function Eample1(props) {
    const {name,age,city,isstudent}=props
  return (
    <>
        <h1>my name is{name}</h1>
      <p>i am {age} years old</p>
      <h2> i am from {city}</h2>
      <h3>{isstudent?"i am student":"not a student"}</h3>
    </>
  )
}

export default Eample1
