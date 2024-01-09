import ParticleText from "./_components/canvas/particle_text/particle_text";
import { metadata as meta } from "@/config/metadata";
import "./style.css";
import ScrollBtn from "./_components/btns/scroll/scrollBtn";
import GridAM from "./_components/grid/about_me/grid";
import TextSlider from "./_components/text_slider/text_slider";
import CardSm from "./_components/card/work/scroll_smoother/card_sm";
import Card3D from "./_components/card/work/3d_card/card_3d";
import CardCB from "./_components/card/work/chat_bubbles/card_cb";
import CardPE from "./_components/card/work/particle_effect/card_pe.js";
import CardFrame from "./_components/card/work/frame/work_card_frame";
import CardProject from "./_components/card/project/project_card";

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
              <span className="tvl about-me__text">
                Hi, I&#39;m <i className="about-me__text-highlight">Wonje</i>. A{" "}
                <i className="about-me__text-highlight">front-end</i> developer
                based in{" "}
                <i className="about-me__text-highlight">SEOUL, KOREA</i>. I
                pursue impressive <i className="about-me__text-highlight">UX</i>{" "}
                through{" "}
                <i className="about-me__text-highlight">
                  solid and scalable code
                </i>
              </span>
            </div>
            <GridAM />
          </section>
          <section className="projects">
            <h2 hidden>projects</h2>
            <TextSlider text={"projects"} />
            <CardProject projectData={projectData} />
            <CardProject projectData={projectData} />
          </section>
          <section className="works">
            <h2>••• play ground •••</h2>
            <div className="works__container">
              <CardSm />
              <Card3D />
              <CardCB />
              <CardPE />
              <CardFrame />
              <CardFrame />
            </div>
          </section>
        </section>
      </main>
      <footer></footer>
    </>
  );
}

const projectData = {
  title: "CLIPmARKET",
  detail: "Community website for anything",
  imgSrc: "/images/project/clipmk/clipmk_home.png",
  icons: ["html", "css", "js", "react", "next", "aws"],
  keyConcepts: [
    {
      imgSrc: "/images/project/clipmk/clipmk_home.png",
      detail: "Basic CRUD system",
    },
    {
      imgSrc: "/images/project/clipmk/clipmk_barter.png",
      detail: "P2P barter section",
    },
    {
      imgSrc: "/images/project/clipmk/clipmk_chat.png",
      detail: "Real-time chat using Web Socket",
    },
  ],
};
