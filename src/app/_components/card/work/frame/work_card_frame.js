import "./style.css";

function CardFrame(props) {
  return (
    <section className="work-card">
      {props.children ?? <div className="work-card__content"></div>}
      <p className="work-card__title">{props.title ?? "• • • •"}</p>
    </section>
  );
}

export default CardFrame;
