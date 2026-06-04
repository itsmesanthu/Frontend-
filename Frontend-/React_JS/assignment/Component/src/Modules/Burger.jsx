import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Gallery from "./Gallery";
import Card from "./Card";

import im1 from "../assets/arrow.png";
import im2 from "../assets/burger.jpg";
import im3 from "../assets/image1.jpg";
import im4 from "../assets/image2.jpg";
import im5 from "../assets/image3.jpg";
import im6 from "../assets/menu.png";

import "./Burger.css";

function Burger() {
  return (
    <>
      <Navbar menuImage={im6} />

      <Hero burgerImage={im2} />

      <section className="gallery-section">
        <Gallery
          image1={im5}
          image2={im3}
          image3={im2}
        />

        <Card arrowImage={im1} />
      </section>
    </>
  );
}

export default Burger;