"use client";
import CTX from "../effect/particle_text";
import { useEffect, useRef } from "react";
import { blockScroll } from "@/util/scroll";
import { isMobileDevice } from "@/util/util";
import "./style.css";

function CanvasPT() {
  const canvasRef = useRef();
  const ctx = useRef();

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const container = canvas.parentNode;
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;

      if (!ctx.current) {
        if (isMobileDevice()) {
          blockScroll(container);
        }

        ctx.current = new CTX(
          canvas.getContext("2d", { willReadFrequently: true }),
          container.offsetWidth,
          container.offsetHeight
        );

        container.addEventListener(
          "mousemove",
          (e) => {
            ctx.current.mouse.x = e.offsetX;
            ctx.current.mouse.y = e.offsetY;
          },
          { passive: true }
        );

        container.addEventListener(
          "touchmove",
          (e) => {
            const touch = e.touches[0];
            const rect = e.target.getBoundingClientRect();
            const offsetX = touch.clientX - rect.left;
            const offsetY = touch.clientY - rect.top;

            if (ctx.current.isTextArea(offsetX, offsetY)) {
              e.preventDefault();
            }

            ctx.current.mouse.x = offsetX;
            ctx.current.mouse.y = offsetY;
          },
          { passive: true }
        );

        container.addEventListener(
          "mouseleave",
          () => {
            ctx.current.mouse.x = null;
            ctx.current.mouse.y = null;
          },
          { passive: true }
        );

        window.addEventListener(
          "touchend",
          () => {
            ctx.current.mouse.x = null;
            ctx.current.mouse.y = null;
          },
          { passive: true }
        );

        window.addEventListener(
          "resize",
          () => {
            canvas.width = container.offsetWidth;
            canvas.height = container.offsetHeight;
            ctx.current.resize(container.offsetWidth, container.offsetHeight);
          },
          { passive: true }
        );
      }
      ctx.current.generateParticles("🤣");
      ctx.current.animate();
    }
  }, []);

  return <canvas ref={canvasRef} className="canvas-pt"></canvas>;
}

export default CanvasPT;
