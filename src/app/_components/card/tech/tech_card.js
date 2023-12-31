"use client";

import {
  MemoIconAws,
  MemoIconCss,
  MemoIconEx,
  MemoIconGit,
  MemoIconGithub,
  MemoIconHtml,
  MemoIconJs,
  MemoIconMongo,
  MemoIconNext,
  MemoIconNode,
  MemoIconReact,
} from "@/util/icons";
import "./style.css";
import { useEffect, useRef } from "react";

function TechCards() {
  const cardContainer = useRef();
  const size = useRef(20);
  const color = useRef("#c2d6bf");

  useEffect(() => {
    if (cardContainer.current) {
      Array.from(cardContainer.current.children).forEach((cardWrapper) => {
        const card = cardWrapper.children[0];

        cardWrapper.addEventListener("mousemove", (e) => {
          const halfWidth = cardWrapper.offsetWidth / 2;
          const halfHeight = cardWrapper.offsetHeight / 2;
          const rect = cardWrapper.getBoundingClientRect();
          const offsetX = e.clientX - rect.left;
          const offsetY = e.clientY - rect.top;
          const degreeX = halfWidth - offsetX;
          const degreeY = halfHeight - offsetY;

          requestAnimationFrame(() => {
            card.style.scale = 1.1;
            card.style.transform = `perspective(300px) rotateY(${
              -(degreeX / halfWidth) * 20
            }deg) rotateX(${(degreeY / halfHeight) * 20}deg)`;

            const overlay = card.children[0];
            overlay.style = `background: radial-gradient(
              circle at ${
                (1 - offsetX / (cardWrapper.offsetWidth / 1.2)) * 100
              }% ${(1 - offsetY / (cardWrapper.offsetHeight / 1.2)) * 100}%,
              rgba(171, 194, 208, 0.7) 0%,
              rgba(171, 194, 208, 0.5) 30%,
              rgba(171, 194, 208, 0.2) 60%,
              rgba(171, 194, 208, 0) 100%,
              transparent,
              transparent
            )`;
          });
        });

        cardWrapper.addEventListener("mouseleave", (e) => {
          requestAnimationFrame(() => {
            const overlay = card.children[0];

            card.style.scale = 1;
            card.style.transform = `rotateY(0) rotateX(0)`;
            overlay.style = `radial-gradient(
              circle at -50% 50%,
              rgba(171, 194, 208, 0.8) 0%,
              rgba(171, 194, 208, 0.4) 10%,
              rgba(171, 194, 208, 0.1) 60%,
              transparent,
              transparent
            );`;
          });
        });

        cardWrapper.addEventListener("touchmove", (e) => {
          e.preventDefault();

          const touch = e.touches[0];
          const touchRect = e.target.getBoundingClientRect();
          const offsetX = touch.clientX - touchRect.left;
          const offsetY = touch.clientY - touchRect.top;
          const halfWidth = cardWrapper.offsetWidth / 2;
          const halfHeight = cardWrapper.offsetHeight / 2;
          const degreeX = halfWidth - offsetX;
          const degreeY = halfHeight - offsetY;

          requestAnimationFrame(() => {
            const overlay = card.children[0];

            card.style.scale = 1.1;
            card.style.transform = `perspective(300px) rotateY(${
              -(degreeX / halfWidth) * 20
            }deg) rotateX(${(degreeY / halfHeight) * 20}deg)`;
            overlay.style = `background: radial-gradient(
              circle at ${
                (1 - offsetX / (cardWrapper.offsetWidth / 1.2)) * 100
              }% ${(1 - offsetY / (cardWrapper.offsetHeight / 1.2)) * 100}%,
              rgba(171, 194, 208, 0.7) 0%,
              rgba(171, 194, 208, 0.5) 30%,
              rgba(171, 194, 208, 0.2) 60%,
              rgba(171, 194, 208, 0) 100%,
              transparent,
              transparent
            )`;
          });
        });

        cardWrapper.addEventListener("touchend", () => {
          requestAnimationFrame(() => {
            const overlay = card.children[0];

            card.style.transform = `rotateY(0) rotateX(0)`;
            card.style.scale = 1;
            overlay.style = `radial-gradient(
              circle at -50% 50%,
              rgba(171, 194, 208, 0.8) 0%,
              rgba(171, 194, 208, 0.4) 10%,
              rgba(171, 194, 208, 0.1) 60%,
              transparent,
              transparent
            );`;
          });
        });
      });
    }
  }, []);

  return (
    <div ref={cardContainer} className="tech-cards">
      <div className="tech-card__wrapper">
        <div className="tech-card">
          <div className="overlay"></div>
          <p className="tech-card-title">front-end</p>
          <ul className="tech-card-body">
            <li>Html</li>
            <li>Css</li>
            <li>Javascript</li>
            <li>NextJS</li>
          </ul>
          <div className="about-me__icon-wrapper">
            <MemoIconHtml size={size.current} color={color.current} />
            <MemoIconCss size={size.current} color={color.current} />
            <MemoIconJs size={size.current} color={color.current} />
            <MemoIconReact size={size.current} color={color.current} />
          </div>
        </div>
      </div>
      <div className="tech-card__wrapper">
        <div className="tech-card">
          <div className="overlay"></div>
          <p className="tech-card-title">back-end</p>
          <ul className="tech-card-body">
            <li>NodeJS</li>
            <li>Express</li>
            <li>NextJS</li>
          </ul>
          <div className="about-me__icon-wrapper">
            <MemoIconNode size={size.current} color={color.current} />
            <MemoIconEx size={size.current} color={color.current} />
            <MemoIconNext size={size.current} color={color.current} />
          </div>
        </div>
      </div>
      <div className="tech-card__wrapper">
        <div className="tech-card">
          <div className="overlay"></div>
          <p className="tech-card-title">etc</p>
          <ul className="tech-card-body">
            <li>AWS</li>
            <li>MongoDB</li>
            <li>Git</li>
            <li>Github</li>
          </ul>
          <div className="about-me__icon-wrapper">
            <MemoIconAws size={size.current} color={color.current} />
            <MemoIconMongo size={size.current} color={color.current} />
            <MemoIconGit size={size.current} color={color.current} />
            <MemoIconGithub size={size.current} color={color.current} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechCards;
