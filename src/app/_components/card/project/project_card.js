"use client";
import Image from "next/image";
import usePCardObserver from "@/hook/usePCardObserver";
import "./style.css";
import { useEffect, useRef } from "react";

function ProjectCard(props) {
  const observer = usePCardObserver();
  const cardRef = useRef();

  useEffect(() => {
    if (cardRef.current && observer) {
      observer.observe(cardRef.current);
    }
  }, [observer]);

  return (
    <div
      ref={cardRef}
      className={
        "p-card" + (props.isReverse ? " p-card--reverse" : " p-card--default")
      }
    >
      <div className="p-card__img-wrapper">
        <Image
          className="p-card__img"
          src={props.src}
          alt={props.title}
          width={280}
          height={210}
        />
      </div>
      <div className="p-card__text-data">
        <h3 className="ht p-card__title">{props.title}</h3>
        <p className="hm p-card__descr">{props.description}</p>
      </div>
      <div className="p-card__icon-wrapper">{props.children}</div>
      <div className="p-card__btn-wrapper">
        <button className="btn p-card__btn">
          <span>visite</span>
          <span className="p-card__btn-dir">➜</span>
        </button>
        <button className="btn p-card__btn">
          <span>detail</span>
          <span className="p-card__btn-dir">➜</span>
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;
