"use client";
import Link from "next/link";
import topics from "@/config/topic";
import ToggleBtn from "@comp/btns/toggle/toggleBtn";
import { memo, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import "./style.css";

function Menu(props) {
  const [isShow, setIsShow] = useState(false);
  const marker = useRef();
  const nav = useRef();
  const path = usePathname().slice(1);

  console.log(path);

  useEffect(() => {}, [isShow, props.header]);

  useEffect(() => {
    if (nav.current) {
      nav.current.addEventListener("mousemove", (e) => {
        console.log(e);
        marker.current.style.top = `${e.pageY}px`;
      });
    }
  }, [nav]);

  return (
    <>
      <div className="menu-btn__pre">
        <ToggleBtn isClk={isShow} setIsClk={setIsShow} />
      </div>

      <nav ref={nav} className={"menu" + (isShow ? " menu--show" : "")}>
        <section className={`menu__section`}>
          <Link
            href={"/"}
            className={
              "menu__topic" + (path === "" ? " menu__topic--focus" : "")
            }
          >
            <p className="tt">home</p>
          </Link>
        </section>
        {Object.entries(topics).map((entry) => {
          const topic = entry[0];
          const subTopics = entry[1];

          return (
            <section key={`menu-${topic}`} className={`menu__section`}>
              <Link
                href={`/${topic}`}
                className={
                  "menu__topic" + (path === topic ? " menu__topic--focus" : "")
                }
              >
                <p className="tt">{topic}</p>
              </Link>
              {subTopics.map((subTopic) => {
                return (
                  <Link
                    key={`menu-${topic}-${subTopic}`}
                    href={`/${topic}/${subTopic}`}
                    className={
                      "menu__subTopic" +
                      (path === `${topic}/${subTopic}`
                        ? " menu__subTopic--focus"
                        : "")
                    }
                  >
                    <p className="tt">{subTopic}</p>
                  </Link>
                );
              })}
            </section>
          );
        })}
        <section className={`menu__section`}></section>
        <div ref={marker} className="menu__marker" hidden={!isShow}></div>
      </nav>
    </>
  );
}

export default memo(Menu);
