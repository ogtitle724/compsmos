"use client";

import useCompObserver from "@/hook/useCompObserver";
import CompCard from "../card/comp/comp_card";
import { useRef, useEffect } from "react";
import "./style.css";

function Comps() {
  const observer = useCompObserver();
  const comps = useRef();

  useEffect(() => {
    if (comps.current && observer) {
      const compCards = comps.current.querySelectorAll(".comp-card");
      compCards.forEach((ele) => observer.observe(ele));
    }
  }, [observer]);

  return (
    <div ref={comps} className="comps">
      <CompCard idx={0} />
      <CompCard idx={1} />
      <CompCard idx={2} />
      <CompCard idx={0} />
      <CompCard idx={1} />
      <CompCard idx={2} />
    </div>
  );
}

export default Comps;
