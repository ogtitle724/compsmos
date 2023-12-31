import ParticleText from "./_components/canvas/particle_text/particle_text";
import { metadata as meta } from "@/config/metadata";
import "./style.css";
import ScrollBtn from "./_components/btns/scroll/scrollBtn";
import dynamic from "next/dynamic";
import ProjectCard from "./_components/card/project/project_card";
import WorkCard from "./_components/card/work/work_card";

const TechCard = dynamic(() => import("@comp/card/tech/tech_card"), {
  ssr: false,
});

meta.title.absolute = `${process.env.TITLE} | Front-End | Web Developer`;
export const metadata = meta;

export default function Page() {
  return (
    <>
      <main className="main">
        <h1 hidden>{"fe developer wonje's portfolio"}</h1>
        <section className="hero">
          <h2 hidden>hero section</h2>
          <ParticleText />
          <div className="cx hero__scroll-btn-pre">
            <ScrollBtn />
          </div>
        </section>
        <section className="body">
          <section className="about-me">
            <h2 hidden>about me</h2>
            <div className="about-me__text-wrapper">
              <p className="tvl">{"Hi I'm Wonje."}</p>
              <p className="tvl">A FE developer based in Seoul, Korea.</p>
              <p className="tvl">
                I pursue impressive UX through solid and scalable code
              </p>
              <p className="tvl">Check my tech stack right below</p>
            </div>
            <TechCard />
          </section>
          <section className="projects">
            <h2 hidden>projects</h2>
          </section>
          <section className="border-gradient works">
            <WorkCard title={"Scroll Smoother"} />
            <WorkCard title={"3D Card"} />
            <WorkCard title={"Chat Effect"} />
            <WorkCard title={"Particle Effect"} />
            <WorkCard />
            <WorkCard />
          </section>
        </section>
      </main>
      <footer></footer>
    </>
  );
}
