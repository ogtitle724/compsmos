"use client";
import Link from "next/link";
import Logo from "@comp/logo/logo";
import Menu from "@comp/menu/menu";
import { useEffect, useRef } from "react";
import "./style.css";

export default function Headers() {
  const header = useRef();

  /* useEffect(() => {
    if (header.current) {
      window.addEventListener("wheel", (e) => {
        if (e.deltaY >= 0) {
          header.current.style.top = "-50px";
        } else {
          header.current.style.top = "0px";
        }
      });
    }
  }, []); */

  return (
    <header ref={header} className="header cx">
      <Link href={"/"} className="header__logo">
        <Logo />
        <span className="tl header__title">compsmos</span>
      </Link>

      <Menu header={header} />
    </header>
  );
}
