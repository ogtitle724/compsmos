"use client";

import { useEffect, useRef } from "react";
import "./style.css";

function ScrollBtn() {
  const scrollBtnRef = useRef();

  useEffect(() => {
    if (scrollBtnRef.current) {
      const scrollBtn = scrollBtnRef.current;
      const main = scrollBtn.parentNode.parentNode;

      scrollBtn.addEventListener("click", () => {
        const height = main.offsetHeight;
        main.scrollTo({
          top: height,
          behavior: "smooth",
        });
      });
    }
  }, []);

  return (
    <>
      <div ref={scrollBtnRef} className="icon-scroll">
        <div className="icon-scroll__wheel"></div>
      </div>
      <div className="icon-scroll__dir"></div>
    </>
  );
}

export default ScrollBtn;
