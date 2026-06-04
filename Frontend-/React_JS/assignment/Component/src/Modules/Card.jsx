import React from 'react';

function Card({ arrowImage }) {
  return (
    <div className="card">
      <p>LOREM IPSUM</p>

      <h2>
        LOREM IPSUM
        <br />
        SET ADEMIR
      </h2>

      <button>
        Click <img src={arrowImage} alt="arrow" />
      </button>
    </div>
  );
}

export default Card;