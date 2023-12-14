"use client";

import threebg from "./3d_bg";
import { useEffect, useRef } from "react";
import "./style.css";

function Container3D() {
  const container = useRef();

  useEffect(() => {
    if (container.current) {
      threebg(container.current);
    }
  }, [container]);
  return <div ref={container} className="container-3d"></div>;
}

export default Container3D;
