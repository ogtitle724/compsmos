"use client";
import { useEffect, useState } from "react";

export default function useChatObserver() {
  const [observer, setObserver] = useState(null);

  useEffect(() => {
    const observerInstance = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target;
          const id = entry.target.id;

          setTimeout(() => {
            element.classList.add("chatbox--loading");

            setTimeout(() => {
              const [loadingNode, chatNode] = element.childNodes;
              element.classList.remove("chatbox--loading");
              element.classList.add("chatbox--showtext");
              loadingNode.classList.add("loading--hide");
              chatNode.classList.add("chat--show");
            }, 700 * id);
          }, 1000 * id + (id - 1) * 600);

          observerInstance.unobserve(element);
        }
      });
    });

    setObserver(observerInstance);
  }, []);

  return observer;
}
