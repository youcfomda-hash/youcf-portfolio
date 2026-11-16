"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeaderBar from "@/components/ui/SectionHeaderBar";
import { siteContent } from "@/data/content";
import { useLanguage } from "@/components/ui/LanguageProvider";

const easeCurve: [number, number, number, number] = [0.22, 1, 0.36, 1];

function AnimatedNumber({
  value,
  suffix,
  color,
  sizeLg,
  inView,
}: {
  value: number;
  suffix: string;
  color: string;
  sizeLg: boolean;
  inView: boolean;
}) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / 1400, 1);
      setCurrent(Math.round((1 - Math.pow(1 - progress, 3)) * value));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, value]);

  return (
    <span
      style={{
        fontFamily: "var(--font-orbitron)",
        fontWeight: 900,
        fontSize: sizeLg
          ? "clamp(3rem, 15vw, 11rem)"
          : "clamp(3rem, 12vw, 7rem)",
        color,
        lineHeight: 1,
        letterSpacing: "-0.02em",
      }}
    >
      {current}
      {suffix}
    </span>
  );
}

function MetricBlock({
  metric,
}: {
  metric: (typeof siteContent.results.metrics)[number];
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8, ease: easeCurve, delay: metric.delay }}
      className="results-metric-item"
      style={{
        gridColumn: metric.col,
        textAlign: metric.align,
        paddingTop: "2rem",
        paddingBottom: "2rem",
      }}
    >
      <div>
        <AnimatedNumber
          value={metric.value}
          suffix={metric.suffix}
          color={metric.color}
          sizeLg={metric.sizeLg}
          inView={inView}
        />
      </div>
      <p
        style={{
          fontFamily: "var(--font-space-mono)",
          fontSize: 11,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "rgba(var(--text-rgb),0.45)",
          marginTop: 12,
          marginBottom: 4,
        }}
      >
        {metric.label}
      </p>
      <p
        style={{
          fontFamily: "var(--font-space-mono)",
          fontSize: 12,
          color: "rgba(var(--text-rgb),0.28)",
          maxWidth: 200,
          lineHeight: 1.5,
          marginLeft:
            metric.align === "right"
              ? "auto"
              : metric.align === "center"
              ? "auto"
              : 0,
          marginRight: metric.align === "right" ? 0 : "auto",
        }}
      >
        {metric.sublabel}
      </p>
    </motion.div>
  );
}

export default function ResultsSection() {
  const { content: siteContent } = useLanguage();
  const { results } = siteContent;

  return (
    <section
      id="results"
      style={{
        position: "relative",
        zIndex: 10,
        background: "var(--bg-primary)",
        padding: "6rem 2rem 4rem",
        overflow: "hidden",
      }}
    >
      <style>{`
        @media (max-width: 768px) {
          .results-metric-item {
            grid-column: 1 / -1 !important;
            text-align: left !important;
            border-bottom: 1px solid var(--border-color);
          }
          .results-metric-item:last-child {
            border-bottom: none;
          }
          .results-divider-h,
          .results-divider-v {
            display: none !important;
          }
        }
      `}</style>

      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <SectionHeaderBar
          name={results.sectionMeta.name}
          jp={results.sectionMeta.jp}
          num={results.sectionMeta.num}
        />

        <p
          style={{
            fontFamily: "var(--font-space-mono)",
            fontSize: 11,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "var(--accent-rust)",
            marginBottom: "4rem",
          }}
        >
          {results.tag}
        </p>

        <div
          style={{
            position: "relative",
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            columnGap: "1rem",
          }}
        >
          <div
            className="results-divider-h"
            style={{
              position: "absolute",
              top: "50%",
              left: 0,
              right: 0,
              height: 1,
              background: "var(--border-color)",
              pointerEvents: "none",
            }}
          />
          <div
            className="results-divider-v"
            style={{
              position: "absolute",
              top: "8%",
              bottom: "8%",
              left: "58.333%",
              width: 1,
              background: "var(--border-color)",
              pointerEvents: "none",
            }}
          />

          {results.metrics.map((metric) => (
            <MetricBlock key={metric.label} metric={metric} />
          ))}
        </div>

        <div style={{ marginTop: "3rem" }}>
          <div
            style={{
              height: 1,
              background: "var(--border-color)",
              marginBottom: "1.5rem",
            }}
          />
          <p
            style={{
              fontFamily: "var(--font-space-mono)",
              fontSize: 11,
              color: "rgba(var(--text-rgb),0.3)",
              letterSpacing: "0.05em",
              textAlign: "center",
            }}
          >
            {results.summaryLine}
          </p>
        </div>
      </div>
    </section>
  );
}

