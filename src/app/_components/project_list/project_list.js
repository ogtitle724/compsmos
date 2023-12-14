"use client";

import ProjectCard from "@comp/card/project/project_card";
import { useState, useEffect } from "react";
import {
  MemoIconAws,
  MemoIconGit,
  MemoIconJs,
  MemoIconNext,
  MemoIconReact,
  MemoIconVercel,
  MemoIconGithub,
} from "@/util/icons";
import "./style.css";

export default function ProjectList() {
  const [iconSize, setIconSize] = useState(32);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 768 && window.innerWidth >= 480) {
        setIconSize(20);
      } else if (window.innerWidth < 480) {
        setIconSize(16);
      } else {
        setIconSize(32);
      }
    });
  }, []);

  return (
    <ul className="project-list">
      <li>
        <ProjectCard
          isReverse={false}
          src={"/images/sample/clipmk.png"}
          title="Title here"
          description="description simple and clear expression recommended ha and here are some button by background color"
        >
          <MemoIconJs size={iconSize} />
          <MemoIconReact size={iconSize} />
          <MemoIconNext size={iconSize} />
          <MemoIconAws size={iconSize} />
          <MemoIconVercel size={iconSize} />
          <MemoIconGit size={iconSize} />
          <MemoIconGithub size={iconSize} />
        </ProjectCard>
      </li>
      <li>
        <ProjectCard
          isReverse={true}
          src={"/images/sample/clipmk.png"}
          title="Title here"
          description="description simple and clear expression recommended ha and here are some button by background color"
        >
          <MemoIconJs size={iconSize} />
          <MemoIconReact size={iconSize} />
          <MemoIconNext size={iconSize} />
          <MemoIconAws size={iconSize} />
          <MemoIconVercel size={iconSize} />
          <MemoIconGit size={iconSize} />
          <MemoIconGithub size={iconSize} />
        </ProjectCard>
      </li>
      <li>
        <ProjectCard
          isReverse={false}
          src={"/images/sample/clipmk.png"}
          title="Title here"
          description="description simple and clear expression recommended ha and here are some button by background color"
        >
          <MemoIconJs size={iconSize} />
          <MemoIconReact size={iconSize} />
          <MemoIconNext size={iconSize} />
          <MemoIconAws size={iconSize} />
          <MemoIconVercel size={iconSize} />
          <MemoIconGit size={iconSize} />
          <MemoIconGithub size={iconSize} />
        </ProjectCard>
      </li>
      <li>
        <ProjectCard
          isReverse={true}
          src={"/images/sample/clipmk.png"}
          title="Title here"
          description="description simple and clear expression recommended ha and here are some button by background color"
        >
          <MemoIconJs size={iconSize} />
          <MemoIconReact size={iconSize} />
          <MemoIconNext size={iconSize} />
          <MemoIconAws size={iconSize} />
          <MemoIconVercel size={iconSize} />
          <MemoIconGit size={iconSize} />
          <MemoIconGithub size={iconSize} />
        </ProjectCard>
      </li>
      <li>
        <ProjectCard
          isReverse={false}
          src={"/images/sample/clipmk.png"}
          title="Title here"
          description="description simple and clear expression recommended ha and here are some button by background color"
        >
          <MemoIconJs size={iconSize} />
          <MemoIconReact size={iconSize} />
          <MemoIconNext size={iconSize} />
          <MemoIconAws size={iconSize} />
          <MemoIconVercel size={iconSize} />
          <MemoIconGit size={iconSize} />
          <MemoIconGithub size={iconSize} />
        </ProjectCard>
      </li>
    </ul>
  );
}
