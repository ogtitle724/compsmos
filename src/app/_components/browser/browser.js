"use client";
import { IoCaretBack, IoCaretForward } from "react-icons/io5";
import { iconMapper } from "@/util/icons";
import { useState, useEffect } from "react";
import "./style.css";

function Browser() {
  const [focus, setFocus] = useState(0);

  useEffect(() => {}, []);

  const handleClkBtnTab = (e, idx) => {
    e.preventDefault();
    setFocus(idx);
  };

  const handleClkBtnLeft = (e) => {
    e.preventDefault();

    if (focus === 0) return;
    setFocus((focus) => focus - 1);
  };

  const handleClkBtnRight = (e) => {
    e.preventDefault();

    if (focus === projects.length - 1) return;
    setFocus((focus) => focus + 1);
  };

  return (
    <section className="browser">
      <section className="browser__tab-wrapper">
        <ul className="browser__tab">
          {projects.map((project, idx) => {
            return (
              <li
                onClick={(e) => handleClkBtnTab(e, idx)}
                key={"tab-" + idx}
                className={
                  "browser__tab-item" +
                  (idx === focus ? " browser__tab-item--focus" : "")
                }
              >
                <p>{project.title}</p>
              </li>
            );
          })}
        </ul>
        <div className="browser__tab-btn-wrapper">
          <button className="browser__tab-btn" onClick={handleClkBtnLeft}>
            <IoCaretBack color="black" size={16} />
          </button>
          <button className="browser__tab-btn" onClick={handleClkBtnRight}>
            <IoCaretForward color="black" size={16} />
          </button>
        </div>
      </section>
      <section className="browser__info">
        <div className="browser__url-wrapper">
          <span className="browser__url">{projects[focus].url}</span>
        </div>
        <ul className="browser__tech-stack">
          {projects[focus].tech_stack.map((icon, idx) => {
            return <li key={"browser-icon-" + idx}>{iconMapper(icon, 18)}</li>;
          })}
        </ul>
      </section>
      <section className="browser__main">
        <div></div>
      </section>
    </section>
  );
}

export default Browser;

const projects = [
  {
    title: "CLIPmARKET",
    url: "https://www.clipmk.com",
    detail: "community web site for barter",
    tech_stack: ["html", "css", "js", "react", "next", "aws", "git", "github"],
  },
  {
    title: "compsmos",
    url: "https://www.compsmos.com",
    detail: "community web site for barter",
    tech_stack: [
      "html",
      "css",
      "js",
      "react",
      "nextjs",
      "aws",
      "git",
      "github",
    ],
  },
  {
    title: "FINGERLY",
    url: "https://www.fingerly.com",
    detail: "community web site for barter",
    tech_stack: [
      "html",
      "css",
      "js",
      "react",
      "nextjs",
      "aws",
      "git",
      "github",
    ],
  },
];
