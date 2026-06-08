import React from 'react'

function Pcard({ name, price, category, rating }) {
  return (
    <div className="app-card">
      <div className="app-card__content">
        <h3 className="app-card__title">{name}</h3>
        <div className="app-card__meta">
          <p className="app-card__text">Price: ₹{price}</p>
          <p className="app-card__text">Category: {category}</p>
          <p className="app-card__text">Rating: ⭐ {rating}</p>
        </div>
      </div>
      <div className="app-card__footer">
        <span className="app-badge">Product</span>
        <button className="btn btn-primary">View</button>
      </div>
    </div>
  );
}

export default Pcard
