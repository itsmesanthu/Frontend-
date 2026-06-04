import React from "react";
import im1 from '../assets/arrow.png'
import im2 from '../assets/burger.jpg'
import im3 from '../assets/image1.jpg'
import im4 from '../assets/image2.jpg'
import im5 from '../assets/image3.jpg'
import im6 from '../assets/menu.png'
import './Burger.css'
function Burger() {
  let images={
    image1:im1,
    image2:im2,
    image3:im3,
    image4:im4,
    image5:im5,
    image6:im6

  }
  return (
    <>
      <nav className="navbar">
        <ul className="nav-links">
          <li>Home</li>
          <li>Order</li>
          <li>Food</li>
          <li>Restaurant</li>
          <li>Testimonials</li>
          <li>Contact Us</li>
          <li><img src={images.image6} alt="" height="50px" /></li>
        </ul>

        <div className="menu-icon">
        </div>
      </nav>
      <section className="hero">
        <div className="hero-content">
          <h1>LOREM IPSUM</h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Vivamus id est vitae dolor rhoncus tristique.
            Maecenas metus quam, rhoncus euismod lorem in,
            sollicitudin viverra eros.
          </p>

          <button>Click Me</button>
        </div>

        <div className="hero-image">
          <img
            src={images.image2}
            alt="Burger"
          />
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section">
        <div className="gallery">
          <div className="left-images">
            <img
              src={images.image5}
              alt="Restaurant"
            />

            <img
              src={images.image3}
              alt="Street"
            />
          </div>

          <div className="middle-image">
            <img
              src={images.image2}
              alt="Food"
            />
          </div>
        </div>

        <div className="card">
          <p>LOREM IPSUM</p>

          <h2>
            LOREM IPSUM
            <br />
            SET ADEMIR
          </h2>

          <button>
            Click <img src={images.image1} alt="" />
          </button>
        </div>
      </section>
    </>
  );
}

export default Burger;