import React from 'react'

function Ccard({ courseName, isAvailable }) {
  return (
    <div className="app-card">
      <div className="app-card__content">
        <h3 className="app-card__title">{courseName}</h3>
        <p className="app-card__text">
          Status: {isAvailable ? 'Enroll Now' : 'Course Full'}
        </p>
      </div>
      <div className="app-card__footer">
        <span className={`app-badge ${isAvailable ? 'app-badge--success' : 'app-badge--warning'}`}>
          {isAvailable ? 'Open' : 'Closed'}
        </span>
        <button className="btn btn-primary" disabled={!isAvailable}>
          {isAvailable ? 'Join' : 'Notify'}
        </button>
      </div>
    </div>
  );
}

export default Ccard
