"use client";

import CardFrame from "../frame/work_card_frame";
import "./style.css";

function CardCB() {
  return (
    <CardFrame title={"chat bubbles"}>
      <section className="work-card__content card-cb">
        <div className="card-cb__chat">Hi, I&#39;m WONJE👋</div>
        <div className="card-cb__chat">I design memorable UX</div>
        <div className="card-cb__chat">
          And, very interested in 3d web comdivonents
        </div>
        <div className="card-cb__chat">So, take a look! 👀</div>
      </section>
    </CardFrame>
  );
}

export default CardCB;
