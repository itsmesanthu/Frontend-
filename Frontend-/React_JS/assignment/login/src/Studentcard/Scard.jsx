import React from 'react'

function Scard({ name, Course, Batch, Profile }) {
  return (
    <div className="app-card app-card--compact">
      <div className="app-card__content">
        <h3 className="app-card__title">{name}</h3>
        <div className="app-card__meta">
          <p className="app-card__text">Course: {Course}</p>
          <p className="app-card__text">Batch: {Batch}</p>
          <p className="app-card__text">Profile: {Profile}</p>
        </div>
      </div>
    </div>
  )
}

export default Scard
