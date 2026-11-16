"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "@/components/ui/LanguageProvider";

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const { content: siteContent } = useLanguage();

  useEffect(() => {
    const start = performance.now();
    const tick = (now: number) => {
      const ratio = Math.min((now - start) / 2200, 1);
      setProgress(Math.round(ratio * 100));
      if (ratio < 1) {
        requestAnimationFrame(tick);
      }
    };
    requestAnimationFrame(tick);

    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onComplete, 600);
    }, 2200);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[10000] flex items-center justify-center"
          style={{ background: "var(--bg-primary)" }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div
            className="absolute pointer-events-none rounded-full"
            style={{
              width: 320,
              height: 320,
              background:
                "radial-gradient(circle, var(--accent-rust-glow) 0%, transparent 70%)",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
          <div className="relative flex flex-col items-center">
            <div
              className="absolute -top-8 right-0 text-xs"
              style={{
                fontFamily: "var(--font-space-mono)",
                color: "var(--accent-rust)",
              }}
            >
              {String(progress).padStart(2, "0")}%
            </div>
            <div
              className="absolute -top-4 -left-8 w-4 h-4 border-t border-l"
              style={{ borderColor: "rgba(140, 61, 26, 0.5)" }}
            />
            <div
              className="absolute -top-4 -right-8 w-4 h-4 border-t border-r"
              style={{ borderColor: "rgba(140, 61, 26, 0.5)" }}
            />
            <div
              className="absolute -bottom-4 -left-8 w-4 h-4 border-b border-l"
              style={{ borderColor: "rgba(140, 61, 26, 0.5)" }}
            />
            <div
              className="absolute -bottom-4 -right-8 w-4 h-4 border-b border-r"
              style={{ borderColor: "rgba(140, 61, 26, 0.5)" }}
            />
            <motion.span
              className="font-bold"
              initial={{ opacity: 0, letterSpacing: "0.8em" }}
              animate={{ opacity: 1, letterSpacing: "0.2em" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontFamily: "var(--font-orbitron)",
                fontSize: "clamp(2.5rem, 8vw, 4rem)",
                color: "var(--text-primary)",
              }}
            >
              {siteContent.brand.preloaderLogo}
            </motion.span>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="text-[10px] tracking-[0.4em] uppercase mt-3"
              style={{
                fontFamily: "var(--font-space-mono)",
                color: "var(--text-muted)",
              }}
            >
              {siteContent.brand.preloaderText}
            </motion.p>
          </div>
          <div
            className="absolute bottom-0 left-0 right-0 h-[3px]"
            style={{ background: "var(--border-subtle)" }}
          >
            <motion.div
              className="h-full"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2.2, ease: "linear" }}
              style={{
                background: "var(--accent-rust)",
                boxShadow:
                  "0 0 8px var(--accent-rust), 0 0 20px rgba(140,61,26,0.4)",
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

