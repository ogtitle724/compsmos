"use client";
import { useEffect, useState } from "react";

export default function useCompObserver() {
  const [observer, setObserver] = useState(null);

  useEffect(() => {
    const observerInstance = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, idx) => {
          if (entry.isIntersecting) {
            entry.target.style.translate = "0 0";
            observerInstance.unobserve(entry.target);
          }
        });
      },
      { threshold: 0 }
    );

    setObserver(observerInstance);
  }, []);

  return observer;
}
