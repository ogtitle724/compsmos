"use client";
import { useEffect, useState } from "react";

export default function useTextObserver() {
  const [observer, setObserver] = useState(null);

  useEffect(() => {
    const observerInstance = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          entry.target.style.left = entry.isIntersecting
            ? `-${entry.target.offsetWidth - window.innerWidth + 150}px`
            : "200px";

          if (entry.isIntersecting) observerInstance.unobserve(entry.target);
        }),
      { threshold: 0 }
    );

    setObserver(observerInstance);
  }, []);

  return observer;
}
