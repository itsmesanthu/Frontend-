function CourseCard({
  courseName,
  trainerName,
  price,
  duration = "4 Weeks",
  isLive,
  onEnroll,
}) {
  return (
    <div className="app-card">
      <div className="app-card__content">
        <h3 className="app-card__title">{courseName}</h3>
        <div className="app-card__meta">
          <p className="app-card__text">Trainer: {trainerName}</p>
          <p className="app-card__text">Price: ₹{price}</p>
          <p className="app-card__text">Duration: {duration}</p>
          <p className="app-card__text">Status: {isLive ? "Live Now" : "Recorded Course"}</p>
        </div>
      </div>
      <div className="app-card__footer">
        <span className={`app-badge ${isLive ? 'app-badge--success' : ''}`}>
          {isLive ? "Live" : "Recorded"}
        </span>
        <button className="btn btn-primary" onClick={onEnroll}>
          Enroll
        </button>
      </div>
    </div>
  );
}

export default CourseCard;