"use client";
import Link from "next/link";
import topics from "@/config/topic";
import ToggleBtn from "@comp/btns/toggle/toggleBtn";
import { memo, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import "./style.css";

function Menu(props) {
  console.log("MENU");
  const nav = useRef();
  const path = usePathname().slice(1);

  useEffect(() => {
    if (nav.current) {
      nav.current.addEventListener("scroll", () => {
        console.log("scroll");
      });
      nav.current.addEventListener("wheel", () => {
        console.log("wheel");
      });
    }
  }, []);

  return (
    <>
      <div className="menu-btn__pre">
        <ToggleBtn isClk={props.isMenuShow} setIsClk={props.setIsMenuShow} />
      </div>
      <nav
        ref={nav}
        className={"menu" + (props.isMenuShow ? " menu--show" : "")}
      >
        <div className="menu__section-wrapper">
          <section className={`menu__section`}>
            <div
              className={
                "menu__topic" + (path === "" ? " menu__topic--focus" : "")
              }
            >
              <Link href={"/"}>
                <p>home</p>
              </Link>
            </div>
          </section>
          {Object.entries(topics).map((entry) => {
            const topic = entry[0];
            const subTopics = entry[1];

            return (
              <section key={`menu-${topic}`} className={`menu__section`}>
                <div
                  className={
                    "menu__topic" +
                    (path === topic ? " menu__topic--focus" : "")
                  }
                >
                  <Link href={`/${topic}`}>
                    <p>{topic}</p>
                  </Link>
                </div>
                {subTopics.map((subTopic) => {
                  return (
                    <div
                      key={`menu-${topic}-${subTopic}`}
                      className={
                        "menu__subTopic" +
                        (path === `${topic}/${subTopic}`
                          ? " menu__subTopic--focus"
                          : "")
                      }
                    >
                      <Link href={`/${topic}/${subTopic}`}>
                        <p>{subTopic}</p>
                      </Link>
                    </div>
                  );
                })}
              </section>
            );
          })}
        </div>
      </nav>
    </>
  );
}

export default memo(Menu);
