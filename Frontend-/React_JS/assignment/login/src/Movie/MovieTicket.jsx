function MovieTicket({ movieName, isBooked }) {
  return (
    <div className="app-card">
      <div className="app-card__content">
        <h3 className="app-card__title">{movieName}</h3>
        <p className="app-card__text">
          {isBooked ? "Ticket Confirmed" : "Book Ticket"}
        </p>
      </div>
      <div className="app-card__footer">
        <span className={`app-badge ${isBooked ? 'app-badge--success' : ''}`}>
          {isBooked ? "Confirmed" : "Available"}
        </span>
        <button className="btn btn-primary">
          {isBooked ? "View Ticket" : "Book Now"}
        </button>
      </div>
    </div>
  );
}

export default MovieTicket;
