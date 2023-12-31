"use client";

import { useEffect, useRef } from "react";
import "./style.css";

function ScrollBtn() {
  const scrollBtnRef = useRef();

  useEffect(() => {
    if (scrollBtnRef.current) {
      const scrollBtn = scrollBtnRef.current;
      const main = scrollBtn.parentNode.parentNode.parentNode;

      scrollBtn.addEventListener("click", () => {
        console.log("clk", main);
        const height = main.offsetHeight;
        main.scrollTo({
          top: height,
          behavior: "smooth",
        });
      });
    }
  }, []);

  return (
    <button ref={scrollBtnRef} className="icon-scroll__wrapper">
      <div className="icon-scroll">
        <div className="icon-scroll__wheel"></div>
      </div>
      <div className="icon-scroll__dir"></div>
    </button>
  );
}

export default ScrollBtn;
