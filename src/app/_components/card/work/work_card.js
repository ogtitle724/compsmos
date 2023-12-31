import "./style.css";

function WorkCard(props) {
  return (
    <div className="work-card">
      <div className="work-card__icon"></div>
      <p className="tl work-card__title">{props.title ?? "- - -"}</p>
    </div>
  );
}

export default WorkCard;
