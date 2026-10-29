import "../../css/landing/step-card.css";
function StepCard({ number, title, description }) {
  return (
    <article className="step-card">
      <span className="step-card__number">{number}</span>
      <h3 className="step-card__title">{title}</h3>
      <p className="step-card__description">{description}</p>
    </article>
  );
}

export default StepCard;