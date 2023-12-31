import TechCard from "./_components/card/tech/tech_card";
import ParticleText from "./_components/canvas/particle_text/particle_text";
import { metadata as meta } from "@/config/metadata";
import "./style.css";
import ScrollBtn from "./_components/btns/scroll/scrollBtn";

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
          </section>
        </section>
      </main>
      <footer></footer>
    </>
  );
}
