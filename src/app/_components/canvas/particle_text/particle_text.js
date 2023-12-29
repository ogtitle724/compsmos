"use client";
import CTX from "@/util/particle_text";
import { useEffect, useRef, useState } from "react";
import "./style.css";

function ParticleText() {
  const canvasRef = useRef();
  const containerRef = useRef();
  const ctx = useRef();

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      canvas.width = containerRef.current.offsetWidth;
      canvas.height = containerRef.current.offsetHeight;

      if (!ctx.current) {
        ctx.current = new CTX(
          canvas.getContext("2d", { willReadFrequently: true }),
          containerRef.current.offsetWidth,
          containerRef.current.offsetHeight
        );

        containerRef.current.addEventListener("mousemove", (e) => {
          ctx.current.mouse.x = e.offsetX;
          ctx.current.mouse.y = e.offsetY;
        });

        containerRef.current.addEventListener("touchmove", (e) => {
          const touch = e.touches[0];
          const rect = e.target.getBoundingClientRect();
          const offsetX = touch.clientX - rect.left;
          const offsetY = touch.clientY - rect.top;

          ctx.current.mouse.x = offsetX;
          ctx.current.mouse.y = offsetY;
        });

        containerRef.current.addEventListener("mouseleave", () => {
          ctx.current.mouse.x = null;
          ctx.current.mouse.y = null;
        });

        window.addEventListener("touchend", () => {
          ctx.current.mouse.x = null;
          ctx.current.mouse.y = null;
        });

        window.addEventListener("resize", () => {
          canvas.width = containerRef.current.offsetWidth;
          canvas.height = containerRef.current.offsetHeight;
          ctx.current.resize(
            containerRef.current.offsetWidth,
            containerRef.current.offsetHeight
          );
        });
      }

      ctx.current.generateParticles("FRONT-END JANG.WONJE DEVELOPER");
      ctx.current.animate();
    }
  }, []);

  return (
    <section ref={containerRef} className="particle-text">
      <canvas ref={canvasRef} className="particle-text__canvas"></canvas>
    </section>
  );
}

export default ParticleText;
