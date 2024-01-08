"use client";

import { useRef, useEffect } from "react";
import set3dCardEffect from "./3d_card_effect.js";
import CardFrame from "../frame/work_card_frame";
import "./style.css";

function Card3D() {
  const cardRef = useRef();
  const cardWrapperRef = useRef();

  useEffect(() => {
    if (cardWrapperRef.current && cardRef.current) {
      set3dCardEffect(cardRef.current, cardWrapperRef.current);
    }
  }, []);

  return (
    <CardFrame title={"3d card"}>
      <section className="work-card__content card-3d">
        <div ref={cardWrapperRef} className="card-3d__card-wrapper">
          <div ref={cardRef} className="card-3d__card">
            <div className="card-3d__overlay"></div>
            <div className="card-3d__deco">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </section>
    </CardFrame>
  );
}

export default Card3D;
