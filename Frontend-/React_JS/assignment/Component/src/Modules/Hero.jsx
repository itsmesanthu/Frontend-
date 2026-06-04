import React from 'react';

function Hero({ burgerImage }) {
  return (
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
        <img src={burgerImage} alt="Burger" />
      </div>
    </section>
  );
}

export default Hero;