"use client";

import "./style.css";
import { useEffect, useRef, useState } from "react";
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
  MemoIconVercel,
} from "@/util/icons";
import { set } from "mongoose";

function TechStack(props) {
  const line1Ref = useRef();
  const line2Ref = useRef();
  const speed = useRef(0.4);

  useEffect(() => {
    let animation1, animation2;

    const animation = (lineRef, direction, moveLen = 0) => {
      if (!lineRef.current) return;

      const lineLen = lineRef.current.childNodes[0].clientWidth;

      if (direction === 1) {
        moveLen += speed.current;
        if (moveLen >= 0) moveLen = -1 * lineLen;
        lineRef.current.style.transform = `translate(${moveLen}px)`;
      } else {
        moveLen -= speed.current;
        if (moveLen <= -1 * lineLen) moveLen = 0;
        lineRef.current.style.transform = `translate(${moveLen}px)`;
      }

      requestAnimationFrame(() => animation(lineRef, direction, moveLen));
    };

    if (line1Ref.current && line2Ref.current) {
      animation1 = requestAnimationFrame(() => animation(line1Ref, 1));
      animation2 = requestAnimationFrame(() => animation(line2Ref, -1));
    }

    return () => {
      cancelAnimationFrame(animation1);
      cancelAnimationFrame(animation2);
    };
  }, []);

  return (
    <div className={"tech-stack" + (props.isTypeB ? " tech-stack--b" : "")}>
      <Line lineRef={line1Ref} />
      <Line lineRef={line2Ref} />
    </div>
  );
}

function Line(props) {
  return (
    <div ref={props.lineRef} className="tech-stack__line">
      <LogoWrapper />
      <LogoWrapper />
    </div>
  );
}

function LogoWrapper() {
  const [logoSize, setLogoSize] = useState(100);

  useEffect(() => {
    window.addEventListener("resize", (e) => {
      if (window.innerWidth < 768) {
        setLogoSize(60);
      } else {
        setLogoSize(100);
      }
    });
  }, []);

  return (
    <div className="tech-stack__logo-wrapper">
      <MemoIconHtml size={logoSize} />
      <MemoIconCss size={logoSize} />
      <MemoIconJs size={logoSize} />
      <MemoIconReact size={logoSize} />
      <MemoIconNext size={logoSize} />
      <MemoIconNode size={logoSize} />
      <MemoIconEx size={logoSize} />
      <MemoIconMongo size={logoSize} />
      <MemoIconAws size={logoSize} />
      <MemoIconVercel size={logoSize} />
      <MemoIconGithub size={logoSize} />
      <MemoIconGit size={logoSize} />
    </div>
  );
}

export default TechStack;
