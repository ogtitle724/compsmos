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
  const cardWrapperRef = useRef();
  const rotateFlag = useRef(true);

  useEffect(() => {
    if (cardWrapperRef.current) {
      Array.from(cardWrapperRef.current.children).forEach((card) => {
        card.addEventListener("mousemove", (e) => {
          if (!rotateFlag.current) return;

          const halfWidth = card.offsetWidth / 2;
          const halfHeight = card.offsetHeight / 2;
          const rect = card.getBoundingClientRect();
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
              circle at ${(1 - offsetX / (card.offsetWidth / 1.5)) * 100}% ${
              (1 - offsetY / halfHeight) * 100
            }%,
              rgba(171, 194, 208, 0.8) 0%,
              rgba(171, 194, 208, 0.6) 10%,
              rgba(171, 194, 208, 0.5) 20%,
              rgba(171, 194, 208, 0.3) 60%,
              transparent,
              transparent
            )`;
          });
        });

        card.addEventListener("mouseleave", (e) => {
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

            rotateFlag.current = false;
            setTimeout(() => {
              rotateFlag.current = true;
            }, 50);
          });
        });

        card.addEventListener("touchmove", (e) => {
          if (!rotateFlag.current) return;

          e.preventDefault();

          const touch = e.touches[0];
          const touchRect = e.target.getBoundingClientRect();
          const offsetX = touch.clientX - touchRect.left;
          const offsetY = touch.clientY - touchRect.top;
          const halfWidth = card.offsetWidth / 2;
          const halfHeight = card.offsetHeight / 2;
          const degreeX = halfWidth - offsetX;
          const degreeY = halfHeight - offsetY;

          requestAnimationFrame(() => {
            const overlay = card.children[0];

            card.style.scale = 1.1;
            card.style.transform = `perspective(300px) rotateY(${
              -(degreeX / halfWidth) * 20
            }deg) rotateX(${(degreeY / halfHeight) * 20}deg)`;
            overlay.style = `background: radial-gradient(
              circle at ${(1 - offsetX / (card.offsetWidth / 1.5)) * 100}% ${
              (1 - offsetY / halfHeight) * 100
            }%,
              rgba(171, 194, 208, 0.8) 0%,
              rgba(171, 194, 208, 0.6) 10%,
              rgba(171, 194, 208, 0.5) 20%,
              rgba(171, 194, 208, 0.3) 60%,
              transparent,
              transparent
            )`;
          });
        });

        card.addEventListener("touchend", () => {
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

            rotateFlag.current = false;
            setTimeout(() => {
              rotateFlag.current = true;
            }, 50);
          });
        });
      });
    }
  }, []);

  const size = 18;
  return (
    <div ref={cardWrapperRef} className="tech-card__wrapper">
      <div className="tech-card">
        <div className="overlay"></div>
        <p className="tech-card-title">front-end</p>
        <ul className="tech-card-body">
          <li>• Html</li>
          <li>• Css</li>
          <li>• Javascript</li>
          <li>• NextJS</li>
        </ul>
        <div className="about-me__icon-wrapper">
          <MemoIconHtml size={size} />
          <MemoIconCss size={size} />
          <MemoIconJs size={size} />
          <MemoIconReact size={size} />
        </div>
      </div>

      <div className="tech-card">
        <div className="overlay"></div>
        <p className="tech-card-title">back-end</p>
        <ul className="tech-card-body">
          <li>• NodeJS</li>
          <li>• Express</li>
          <li>• NextJS</li>
        </ul>
        <div className="about-me__icon-wrapper">
          <MemoIconNode size={size} />
          <MemoIconEx size={size} />
          <MemoIconNext size={size} />
        </div>
      </div>

      <div className="tech-card">
        <div className="overlay"></div>
        <p className="tech-card-title">etc</p>
        <ul className="tech-card-body">
          <li>• AWS</li>
          <li>• MongoDB</li>
          <li>• Git</li>
          <li>• Github</li>
        </ul>
        <div className="about-me__icon-wrapper">
          <MemoIconAws size={size} />
          <MemoIconMongo size={size} />
          <MemoIconGit size={size} />
          <MemoIconGithub size={size} />
        </div>
      </div>
    </div>
  );
}

export default TechCards;
