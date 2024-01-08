"use client";

import { useRef, useEffect } from "react";
import setSmoothScroll from "./scrollsmoother";
import CardFrame from "../frame/work_card_frame";
import "./style.css";

function CardSm() {
  const railRef = useRef();

  useEffect(() => {
    if (railRef.current) {
      setSmoothScroll(railRef.current);
    }
  }, []);

  return (
    <CardFrame title={"scroll smoother"}>
      <section className="work-card__content card-sm">
        <div ref={railRef} className="card-sm__container">
          <div className="card-sm__wrapper">
            <div className="card-sm__indicator"></div>
            <div className="card-sm__indicator"></div>
            <div className="card-sm__indicator"></div>
            <div className="card-sm__indicator"></div>
          </div>
        </div>
      </section>
    </CardFrame>
  );
}

export default CardSm;
