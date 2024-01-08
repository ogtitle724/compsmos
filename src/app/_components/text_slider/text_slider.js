"use client";

import { useRef, useEffect } from "react";
import "./style.css";
import useObserver from "@/hook/useTextObserver";

function TextSlider({ text }) {
  const textRef = useRef();
  const observer = useObserver();

  useEffect(() => {
    if (textRef.current && observer) {
      observer.observe(textRef.current);
    }
  }, [observer]);

  return (
    <span ref={textRef} className="text-slider__text">
      {text}
    </span>
  );
}

export default TextSlider;
