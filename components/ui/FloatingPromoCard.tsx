"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useLanguage } from "@/components/ui/LanguageProvider";

export default function FloatingPromoCard() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const { content: siteContent } = useLanguage();

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > window.innerHeight * 0.75) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (dismissed) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.95 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-6 right-6 z-[95] hidden sm:flex items-center gap-3.5 rounded-2xl border p-3.5 pr-9 shadow-2xl"
          style={{
            background: "rgba(23, 20, 17, 0.88)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            borderColor: "var(--border-default)",
            boxShadow:
              "0 20px 50px rgba(0,0,0,0.7), 0 0 0 1px rgba(140,61,26,0.2)",
          }}
        >
          <img
            src={siteContent.about.photoUrl}
            alt={siteContent.brand.founderName}
            className="w-11 h-11 rounded-xl object-cover shrink-0 border"
            style={{ borderColor: "var(--accent-rust)" }}
          />
          <div className="min-w-0">
            <p
              className="text-xs font-bold truncate"
              style={{
                fontFamily: "var(--font-orbitron)",
                color: "var(--text-primary)",
              }}
            >
              {siteContent.floatingPromo.title}
            </p>
            <p
              className="text-[11px] truncate mt-0.5"
              style={{ color: "var(--text-muted)" }}
            >
              {siteContent.floatingPromo.subtitle}
            </p>
            <a
              href={siteContent.floatingPromo.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[11px] mt-1 font-semibold transition-colors"
              style={{
                fontFamily: "var(--font-space-mono)",
                color: "var(--accent-rust)",
              }}
            >
              {siteContent.floatingPromo.ctaText}
            </a>
          </div>
          <button
            onClick={() => setDismissed(true)}
            aria-label="Dismiss promo card"
            className="absolute top-2.5 right-2.5 p-1 rounded-lg transition-colors"
            style={{ color: "var(--text-muted)" }}
          >
            <X size={14} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

