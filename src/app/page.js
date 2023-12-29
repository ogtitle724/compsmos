import AboutMe from "@comp/chat/chat";
import TechStack from "@comp/tech_stack/tech_stack";
import ProjectList from "@comp/project_list/project_list";
import Comps from "@comp/comps/comps";
import Posts from "@comp/posts/posts";
import { metadata as meta } from "@/config/metadata";
import "./style.css";
import TSCard from "./_components/card/tech_stack/tech_stack";
import Image from "next/image";
import TechCard from "./_components/card/tech/tech_card";
import ParticleText from "./_components/canvas/particle_text/particle_text";

meta.title.absolute = `< ${process.env.title} > | daily log | web dev basic | web component | fix error`;
export const metadata = meta;

export default function Page() {
  const size = 18;

  return (
    <>
      <main className="main">
        <h1 hidden>{"fe developer wonje's portfolio"}</h1>
        <section className="hero">
          <h2 hidden>hero section</h2>
          <ParticleText />
          <div className="icon-scroll">
            <div className="icon-scroll__wheel"></div>
          </div>
        </section>
        <section className="about-me">
          <h2 hidden>about me</h2>
          <div className="about-me__text-wrapper">
            <p className="tl">{"Hi I'm Wonje."}</p>
            <p className="tl">A FE developer based in Seoul, Korea.</p>
            <p className="tl">
              I pursue impressive UX through solid and scalable code
            </p>
            <p className="tl">So, Check my main tech stack right below</p>
          </div>
          <TechCard />
        </section>
        <section className="projects">
          <h2 hidden>projects</h2>
          {/* <ProjectList /> */}
        </section>
        <section className="components">
          <h2 hidden>components</h2>
          {/* <Comps /> */}
        </section>
        <section className="posts">
          <h2 hidden>popular posts</h2>
          {/* <Posts title="popular posts" /> */}
        </section>
        <section className="posts">
          <h2 hidden>recent posts</h2>
          {/* <Posts title="recent posts" /> */}
        </section>
      </main>
      <footer></footer>
    </>
  );
}
