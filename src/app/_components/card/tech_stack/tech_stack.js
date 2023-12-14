"use client";

import {
  MemoIconJs,
  MemoIconReact,
  MemoIconThree,
  MemoIconNext,
  MemoIconNode,
  MemoIconEx,
  MemoIconAws,
  MemoIconMongo,
  MemoIconVercel,
  MemoIconGit,
  MemoIconGithub,
  MemoIconHtml,
  MemoIconCss,
} from "@/util/icons";
import { useEffect, useRef, useState } from "react";
import "./style.css";

function TSCard() {
  const iconSize = 26;
  const feData = useRef({
    html: { gauge: 50, icon: <MemoIconHtml size={iconSize} /> },
    css: { gauge: 55, icon: <MemoIconCss size={iconSize} /> },
    js: { gauge: 65, icon: <MemoIconJs size={iconSize} /> },
    react: { gauge: 65, icon: <MemoIconReact size={iconSize} /> },
    three: { gauge: 20, icon: <MemoIconThree size={iconSize} /> },
    next: { gauge: 65, icon: <MemoIconNext size={iconSize} /> },
  });

  const beData = useRef({
    node: { gauge: 30, icon: <MemoIconNode size={iconSize} /> },
    ex: { gauge: 40, icon: <MemoIconEx size={iconSize} /> },
    next: { gauge: 50, icon: <MemoIconNext size={iconSize} /> },
  });

  const otherData = useRef({
    vercel: { gauge: 55, icon: <MemoIconVercel size={iconSize} /> },
    aws: { gauge: 30, icon: <MemoIconAws size={iconSize} /> },
    mongo: { gauge: 40, icon: <MemoIconMongo size={iconSize} /> },
    git: { gauge: 45, icon: <MemoIconGit size={iconSize} /> },
    github: { gauge: 45, icon: <MemoIconGithub size={iconSize} /> },
  });

  const info = useRef({
    fe: "Building on my comprehensive understanding of client-side development, I am actively enhancing my skills through various projects. My growing interest in 3D components has led me to explore and learn Three.js, broadening my technical capabilities in this exciting area.",
    be: "I have a good understanding and hands-on experience with the fundamental operations of servers using Node.js, Express.js and Next.js",
    other:
      "I have gained practical experience with a range of services necessary for website development and deployment, applying them in actual projects.",
  });

  const cardRef = useRef();
  const infoRef = useRef();
  const [sectionInfo, setSectionInfo] = useState("");

  useEffect(() => {
    if (infoRef.current && cardRef.current) {
      cardRef.current.addEventListener("mouseenter", (e) => {
        e.stopPropagation();
        console.log("enter", e.target);
        infoRef.current.style.opacity = 1;
      });
      cardRef.current.addEventListener("mouseleave", (e) => {
        e.stopPropagation();

        console.log("leave", e.target);
        infoRef.current.style.opacity = 0;
      });
      cardRef.current.addEventListener("mousemove", (e) => {
        console.log(e.pageY, e.pageX);
        infoRef.current.style.top = `${e.clientY}px`;
        infoRef.current.style.left = `${e.clientX}px`;
      });
    }
  }, []);

  return (
    <div ref={cardRef} className="ts-card">
      <TSSection
        title="front-end"
        info={info.current.fe}
        data={feData.current}
        setInfo={setSectionInfo}
      />
      <TSSection
        title="back-end"
        info={info.current.be}
        data={beData.current}
        setInfo={setSectionInfo}
      />
      <TSSection
        title="others"
        info={info.current.other}
        data={otherData.current}
        setInfo={setSectionInfo}
      />
      <p ref={infoRef} className="ts ts-card__section-info">
        {sectionInfo}
      </p>
    </div>
  );
}

function TSSection(props) {
  const sectionRef = useRef();

  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.addEventListener("mouseenter", (e) => {
        props.setInfo(props.info);
        console.log("seet");
      });
    }
  }, [props]);

  return (
    <section ref={sectionRef} className="ts-card__section">
      <h3>{props.title}</h3>
      <ul>
        {Object.values(props.data).map((data, idx) => {
          return (
            <TSItem key={"props.title" + idx} gauge={data.gauge}>
              {data.icon}
            </TSItem>
          );
        })}
      </ul>
    </section>
  );
}

function TSItem(props) {
  const barRef = useRef();

  useEffect(() => {
    if (barRef.current) {
      barRef.current.style.width = `${props.gauge}%`;
    }
  });
  return (
    <li className="ts-card__item">
      {props.children}
      <div className="gauge-bar">
        <div ref={barRef} className="gauge-bar__filled"></div>
      </div>
    </li>
  );
}

export default TSCard;
