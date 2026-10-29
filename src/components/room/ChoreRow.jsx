// ChoreRow.jsx
function ChoreRow({ chore, onToggle }) {
  return (
    <article
      className={`chore-row ${chore.completed ? "chore-row--completed" : ""}`}
    >
      <div className="chore-row__name-cell">
        <button
          type="button"
          className="chore-row__check"
          onClick={() => onToggle(chore.id)}
          aria-label={
            chore.completed
              ? `Mark ${chore.name} as incomplete`
              : `Mark ${chore.name} as complete`
          }
        >
          {chore.completed ? "✓" : ""}
        </button>
        <h3 className="chore-row__name">{chore.name}</h3>
      </div>

      <div className="chore-row__assignee">
        <span className="chore-row__avatar">
          {chore.assignedTo.charAt(0).toUpperCase()}
        </span>
        <span>{chore.assignedTo}</span>
      </div>

      <span className="chore-row__schedule">{chore.schedule}</span>

      <div className="chore-row__status-cell">
        <span
          className={`chore-row__status chore-row__status--${
            chore.completed ? "complete" : "open"
          }`}
        >
          {chore.completed ? "COMPLETE" : "OPEN"}
        </span>

        <button type="button" className="chore-row__swap" aria-label="Swap chore">
          ⟳
        </button>
      </div>
    </article>
  );
}

export default ChoreRow;