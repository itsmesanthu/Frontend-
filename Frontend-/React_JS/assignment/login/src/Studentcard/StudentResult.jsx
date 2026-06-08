function StudentResult({ name, marks }) {
  const isPassed = marks >= 35;
  return (
    <div className="app-card">
      <div className="app-card__content">
        <h3 className="app-card__title">{name}</h3>
        <div className="app-card__meta">
          <p className="app-card__text">Marks: {marks}</p>
          <p className="app-card__text">Result: {isPassed ? "Pass" : "Fail"}</p>
        </div>
      </div>
      <div className="app-card__footer">
        <span className={`app-badge ${isPassed ? 'app-badge--success' : 'app-badge--warning'}`}>
          {isPassed ? "Passed" : "Failed"}
        </span>
      </div>
    </div>
  );
}

export default StudentResult;