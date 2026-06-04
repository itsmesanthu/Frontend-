import React from 'react'
import car from '../assets/bmw.jpg'
function Ex2() {
  let a=1
  let b=1
  let higth="200px"
  let width="200px"
  let fun=()=>{alert("hello how are you!")}
  return (
    <>
      <header>
        <h1 className='title' id='heading'>welocome to react</h1>
        <img src="https://media.architecturaldigest.com/photos/66a914f1a958d12e0cc94a8e/4:3/w_2664,h_1998,c_limit/DSC_5903.jpg" alt="image" height={higth} width={width} />
      <br />
      <img src={car} alt="image" height={higth} width={width} />
      </header>
      <h1 className='title' id='heading'>welocome to ipl</h1>
      <abbr title='Royal challenges bengaluru'>RCB</abbr>
      <h3>rcb have {a+b} cups</h3>
      <img src="https://media.gettyimages.com/id/2218486449/photo/ahmedabad-india-virat-kohli-of-royal-challengers-bengaluru-lifts-the-ipl-trophy-alongside.jpg?s=612x612&w=gi&k=20&c=SBJyVTWAFl5JOf-SUXHTZPK6wH0aSsFrfPY-1FCBgu0=" alt="rcb" />
    </>
  )
} 

export default Ex2
