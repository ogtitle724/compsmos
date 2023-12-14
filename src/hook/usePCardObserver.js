"use client";
import { useEffect, useState } from "react";

export default function usePCardObserver() {
  const [observer, setObserver] = useState(null);

  useEffect(() => {
    const observerInstance = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.translate = "0 0";
            entry.target.style.opacity = 1;
            observerInstance.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );

    setObserver(observerInstance);
  }, []);

  return observer;
}
