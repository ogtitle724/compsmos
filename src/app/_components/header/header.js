"use client";
import Link from "next/link";
import { MemoIconOpen, MemoIconCodepen, MemoIconGithub } from "@/util/icons";
import { useState, useEffect, useRef, memo } from "react";
import "./style.css";

function Header() {
  console.log("HEADER");
  const header = useRef();
  const [isMenuShow, setIsMenuShow] = useState(false);

  useEffect(() => {
    if (header && header.current) {
      const wheelEvent = (e) => {
        if (isMenuShow) return;

        if (e.deltaY >= 0) {
          header.current.style.transform = `translateY(-${header.current.offsetHeight}px)`;
          header.current.style.opacity = 0;
        } else {
          header.current.style.transform = `translateY(0px)`;
          header.current.style.opacity = 1;
        }
      };

      window.addEventListener("wheel", wheelEvent);

      return () => window.removeEventListener("wheel", wheelEvent);
    }
  }, [isMenuShow]);

  return (
    <header ref={header} className="header">
      <Link href={"#"} className="tm header__link">
        github
      </Link>
      <Link href={"#"} className="tm header__link">
        codepen
      </Link>
      <Link href={"#"} className="tm header__link">
        blog
      </Link>
      <Link href={"#"} className="tm header__link">
        contact
      </Link>
    </header>
  );
}
export default memo(Header);
