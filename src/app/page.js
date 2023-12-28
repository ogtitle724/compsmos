import AboutMe from "@comp/chat/chat";
import TechStack from "@comp/tech_stack/tech_stack";
import ProjectList from "@comp/project_list/project_list";
import Comps from "@comp/comps/comps";
import Posts from "@comp/posts/posts";
import { metadata as meta } from "@/config/metadata";
import "./style.css";
import TSCard from "./_components/card/tech_stack/tech_stack";
import Image from "next/image";
import ParticleText from "./_components/canvas/particle_text/particle_text";

meta.title.absolute = `< ${process.env.title} > | daily log | web dev basic | web component | fix error`;
export const metadata = meta;

export default function Page() {
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
        <section className="profile">
          <h2 hidden>about me</h2>
          {/* <AboutMe />
          <TSCard /> */}
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
