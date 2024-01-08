"use client";
import Image from "next/image";
import { iconMapper } from "@/util/icons";
import { useRef, useState } from "react";
import "./style.css";

function CardProject(props) {
  const size = useRef(20);
  const [cptIdx, setCptIdx] = useState(0);

  const handleClkConcept = (idx) => setCptIdx(idx);

  return (
    <section className="card-project__wrapper">
      <div className="card-project">
        <div className="card-project__img-wrapper">
          <Image
            className="card-project__img"
            alt="project card image"
            src={props.projectData.keyConcepts[cptIdx].imgSrc}
            width={360}
            height={270}
          />
        </div>
        <ul className="card-project__content-ul">
          <li className="card-project__ts">
            <span className="card-project__ts-prefix">Main tech stacks :</span>
            {props.projectData.icons.map((iconName, idx) => {
              return (
                <div key={"project-card-project-icon" + idx}>
                  {iconMapper(iconName, size.current)}
                </div>
              );
            })}
          </li>
          {props.projectData.keyConcepts.map((concept, idx) => {
            return (
              <li
                className={
                  "card-project__concept" +
                  (idx === cptIdx ? " card-project__concept--focus" : "")
                }
                key={"project-card-project-concept" + idx}
                onClick={() => handleClkConcept(idx)}
              >
                {"✔ " + concept.detail}
              </li>
            );
          })}
        </ul>
        <div className="card-project__title-wrapper">
          <h3 className="card-project__title">{props.projectData.title}</h3>
          <p className="card-project__description">
            {props.projectData.detail}
          </p>
        </div>
      </div>
    </section>
  );
}

export default CardProject;
