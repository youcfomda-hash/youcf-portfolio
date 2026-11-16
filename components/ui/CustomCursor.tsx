"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const dotX = useMotionValue(0);
  const dotY = useMotionValue(0);
  const ringXRaw = useMotionValue(0);
  const ringYRaw = useMotionValue(0);

  const ringX = useSpring(ringXRaw, { stiffness: 150, damping: 15 });
  const ringY = useSpring(ringYRaw, { stiffness: 150, damping: 15 });

  useEffect(() => {
    setIsTouch("ontouchstart" in window || navigator.maxTouchPoints > 0);
    setMounted(true);

    const onMouseMove = (e: MouseEvent) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      ringXRaw.set(e.clientX);
      ringYRaw.set(e.clientY);
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.getAttribute("role") === "button"
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseover", onMouseOver);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
    };
  }, [dotX, dotY, ringXRaw, ringYRaw]);

  if (!mounted || isTouch) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <div
          className="cursor-dot rounded-full"
          style={{
            width: 8,
            height: 8,
            background: "var(--accent-rust)",
            boxShadow:
              "0 0 6px var(--accent-rust), 0 0 12px rgba(140,61,26,0.4)",
          }}
        />
      </motion.div>
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovering ? 48 : 32,
          height: isHovering ? 48 : 32,
        }}
        transition={{ duration: 0.2 }}
      >
        <div
          className="cursor-ring rounded-full opacity-60"
          style={{
            width: "100%",
            height: "100%",
            border: "1px solid var(--accent-rust)",
          }}
        />
      </motion.div>
    </>
  );
}

