import "./style.css";

function CompCard(props) {
  return (
    <div ref={props.ref} className="comp-card" style={{ "--i": props.idx + 1 }}>
      <div className="comp-card__content"></div>
      <h3 className="ht comp-card__title">title here</h3>
    </div>
  );
}

export default CompCard;
