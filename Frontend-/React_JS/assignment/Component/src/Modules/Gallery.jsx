import React from 'react';

function Gallery({ image1, image2, image3 }) {
  return (
    <div className="gallery">
      <div className="left-images">
        <img src={image1} alt="Restaurant" />
        <img src={image2} alt="Street" />
      </div>

      <div className="middle-image">
        <img src={image3} alt="Food" />
      </div>
    </div>
  );
}

export default Gallery;