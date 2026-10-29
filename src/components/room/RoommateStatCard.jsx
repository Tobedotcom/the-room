// RoommateStatCard.jsx
function RoommateStatCard({ name, completed, colorKey }) {
  const initial = name.charAt(0).toUpperCase();

  return (
    <article className={`roommate-stat-card roommate-stat-card--${colorKey}`}>
      <div className="roommate-stat-card__avatar">{initial}</div>

      <div className="roommate-stat-card__info">
        <h3>{name}</h3>
        <p>{completed} done</p>
      </div>
    </article>
  );
}

export default RoommateStatCard;