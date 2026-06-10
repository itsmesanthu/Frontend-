import React from 'react'
import Logo from '../assets/Logo.png'
import './Nve.css'
import { IoLogoWhatsapp } from "react-icons/io5";
import { CiFacebook } from "react-icons/ci";
function Nve() {
    let image={
        im:Logo
    }
  return (
    <div>
     <header>
    <div>
        <img src={image.im} alt="Hotel Logo" className='hi'/>
    </div>

    <nav>
        <a href="#">Home</a>
        <a href="#room">Rooms</a>
        <a href="#dining">Dining</a>
        <a href="#pool">Pool</a>
        <a href="#cont">Contact</a>
        <a href=""><CiFacebook /></a>
        <a href=""><IoLogoWhatsapp /></a>
    </nav>
</header>
    </div>
  )
}

export default Nve
