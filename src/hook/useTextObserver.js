"use client";
import { useEffect, useState } from "react";

export default function useTextObserver() {
  const [observer, setObserver] = useState(null);

  useEffect(() => {
    const observerInstance = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          entry.target.style.left = entry.isIntersecting ? "-100%" : "300px";
        }),
      { threshold: 0 }
    );

    setObserver(observerInstance);
  }, []);

  return observer;
}
