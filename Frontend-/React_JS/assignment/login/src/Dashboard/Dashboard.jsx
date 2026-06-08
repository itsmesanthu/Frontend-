function Dashboard({ username, isLoggedIn }) {
  return (
    <div className="app-card">
      <div className="app-card__content">
        <h3 className="app-card__title">
          {isLoggedIn
            ? `Welcome, ${username}`
            : "Please Login"}
        </h3>
      </div>
      <div className="app-card__footer">
        <span className={`app-badge ${isLoggedIn ? 'app-badge--success' : 'app-badge--warning'}`}>
          {isLoggedIn ? "Active" : "Inactive"}
        </span>
        <button className="btn btn-primary">
          {isLoggedIn ? "Dashboard" : "Sign In"}
        </button>
      </div>
    </div>
  );
}

export default Dashboard;