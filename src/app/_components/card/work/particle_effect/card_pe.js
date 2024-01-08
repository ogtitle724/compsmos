"use client";

import CardFrame from "../frame/work_card_frame";
import CanvasPT from "./canvas/particle_text/particle_text";
import "./style.css";

function CardPE() {
  return (
    <CardFrame title={"rub !t"}>
      <section className="work-card__content card-pe">
        <CanvasPT />
      </section>
    </CardFrame>
  );
}

export default CardPE;
