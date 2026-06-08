import React from 'react'

function Ecard({ name, department, location = 'Bangalore' }) {
  return (
    <div className="app-card">
      <div className="app-card__content">
        <h3 className="app-card__title">{name}</h3>
        <div className="app-card__meta">
          <p className="app-card__text">Department: {department}</p>
          <p className="app-card__text">Location: {location}</p>
        </div>
      </div>
      <div className="app-card__footer">
        <span className="app-badge app-badge--success">Team</span>
        <button className="btn btn-secondary">Contact</button>
      </div>
    </div>
  )
}

export default Ecard
