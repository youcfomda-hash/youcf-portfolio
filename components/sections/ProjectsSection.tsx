"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeaderBar from "@/components/ui/SectionHeaderBar";
import { useLanguage } from "@/components/ui/LanguageProvider";

export default function ProjectsSection() {
  const [filter, setFilter] = useState("all");
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const router = useRouter();
  const { content: siteContent, isAr } = useLanguage();
  const { projects } = siteContent;

  const filtered =
    filter === "all"
      ? projects.items
      : projects.items.filter((p) => p.industry === filter);

  return (
    <section
      id="projects"
      dir={isAr ? "rtl" : "ltr"}
      className="py-16 md:py-28 px-5 md:px-6"
      style={{
        position: "relative",
        zIndex: 10,
        background: "var(--bg-primary)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeaderBar
          name={projects.sectionMeta.name}
          jp={projects.sectionMeta.jp}
          num={projects.sectionMeta.num}
        />

        <div className="flex items-start justify-between mb-10 md:mb-16 gap-6">
          <p
            className="text-xs tracking-[0.25em] uppercase mt-2 shrink-0"
            style={{
              fontFamily: "var(--font-space-mono)",
              color: "var(--accent-rust)",
            }}
          >
            {projects.subtitle}
          </p>
          <h2
            className="text-right font-black leading-none"
            style={{
              fontFamily: "var(--font-orbitron)",
              fontSize: "clamp(2.5rem, 7vw, 7rem)",
              color: "var(--text-primary)",
            }}
          >
            {projects.title}
          </h2>
        </div>

        <div
          className="flex gap-0 rounded-2xl p-1 flex-wrap mb-10 md:mb-12 w-full md:w-fit"
          style={{
            background: "var(--bg-secondary)",
            border: "1px solid var(--border-default)",
          }}
        >
          {projects.filters.map((tab) => {
            const active = filter === tab.value;
            return (
              <button
                key={tab.value}
                onClick={() => setFilter(tab.value)}
                className="relative px-5 py-2 text-sm rounded-full z-10"
                style={{ fontFamily: "var(--font-space-mono)" }}
              >
                {active && (
                  <motion.span
                    layoutId="proj-filter"
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: "var(--accent-rust-glow)",
                      border: "1px solid var(--accent-rust)",
                    }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                  />
                )}
                <span
                  className="relative z-10"
                  style={{
                    color: active
                      ? "var(--text-primary)"
                      : "var(--text-muted)",
                  }}
                >
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>

        <div style={{ borderTop: "1px solid var(--border-subtle)" }}>
          {filtered.map((item, idx) => {
            const isHovered = hoveredId === item.id;
            const badgeColor =
              projects.categoryColors[item.industry] || "var(--accent-rust)";

            return (
              <div
                key={item.id}
                className="relative cursor-pointer overflow-hidden"
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => router.push(`/projects/${item.slug}`)}
                style={{
                  borderBottom: "1px solid var(--border-subtle)",
                  backgroundColor: isHovered
                    ? "var(--bg-secondary)"
                    : "transparent",
                  transition: "background 0.2s",
                }}
              >
                <div className="flex items-center gap-4 md:gap-8 px-4 py-5 md:py-7 pr-4">
                  <span
                    className="text-xs tabular-nums w-8 shrink-0 transition-colors duration-300"
                    style={{
                      fontFamily: "var(--font-space-mono)",
                      color: isHovered ? badgeColor : "var(--text-muted)",
                    }}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>

                  <div className="flex-1 min-w-0">
                    <span
                      className="block text-lg md:text-2xl font-bold transition-colors duration-300 leading-tight"
                      style={{
                        fontFamily: "var(--font-orbitron)",
                        color: isHovered ? badgeColor : "var(--text-primary)",
                      }}
                    >
                      {item.client}
                    </span>
                    <span
                      className="block text-xs mt-1 truncate"
                      style={{
                        fontFamily: "var(--font-space-mono)",
                        color: "var(--text-muted)",
                      }}
                    >
                      {item.headline}
                    </span>
                  </div>

                  <span
                    className="hidden md:block text-sm shrink-0"
                    style={{
                      fontFamily: "var(--font-space-mono)",
                      color: "var(--text-muted)",
                    }}
                  >
                    {item.year}
                  </span>

                  <span
                    className="text-xs px-3 py-1 rounded-full border shrink-0"
                    style={{
                      fontFamily: "var(--font-space-mono)",
                      color: badgeColor,
                      borderColor: `${badgeColor}40`,
                      backgroundColor: `${badgeColor}10`,
                    }}
                  >
                    {item.industryLabel}
                  </span>

                  <span
                    className="shrink-0 transition-all duration-200"
                    style={{
                      color: isHovered ? badgeColor : "var(--text-muted)",
                      transform: isHovered
                        ? "translateX(6px)"
                        : "translateX(0)",
                    }}
                  >
                    <ArrowRight size={16} />
                  </span>
                </div>

                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      className="absolute right-20 top-1/2 -translate-y-1/2 w-72 h-44 rounded-xl overflow-hidden border shadow-2xl hidden lg:block pointer-events-none z-20"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                      style={{
                        borderColor: "var(--border-default)",
                        boxShadow: `0 20px 60px rgba(0,0,0,0.6), 0 0 0 1px ${badgeColor}20`,
                      }}
                    >
                      <img
                        src={item.image}
                        alt={item.client}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

