"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import { useLanguage } from "@/components/ui/LanguageProvider";

export default function TechMarqueeSection() {
  const { content: siteContent } = useLanguage();
  const { stackMarquee } = siteContent;
  const doubled = [...stackMarquee.items, ...stackMarquee.items];

  return (
    <section
      className="py-12 md:py-20 overflow-hidden"
      style={{
        position: "relative",
        zIndex: 10,
        background: "var(--bg-primary)",
        borderTop: "1px solid var(--border-subtle)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 mb-8 md:mb-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
        >
          <p
            className="text-xs tracking-[0.3em] uppercase mb-4"
            style={{
              fontFamily: "var(--font-space-mono)",
              color: "var(--accent-rust)",
            }}
          >
            {stackMarquee.tag}
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{
              fontFamily: "var(--font-orbitron)",
              color: "var(--text-primary)",
            }}
          >
            {stackMarquee.title}
          </h2>
        </motion.div>
      </div>

      <div
        className="relative flex overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <div className="animate-marquee-tech flex gap-10 px-10">
          {doubled.map((item, idx) => (
            <div
              key={`${item.name}-${idx}`}
              className="flex items-center gap-2.5 opacity-60 hover:opacity-100 transition-opacity cursor-default group shrink-0"
            >
              <div
                className="w-7 h-7 flex items-center justify-center"
                style={{ color: item.color }}
              >
                {item.iconUrl ? (
                  <img
                    src={item.iconUrl}
                    alt={item.name}
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                ) : (
                  <Zap size={20} fill="currentColor" />
                )}
              </div>
              <span
                className="text-sm font-semibold whitespace-nowrap transition-colors"
                style={{
                  fontFamily: "var(--font-space-mono)",
                  color: "var(--text-secondary)",
                }}
              >
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

