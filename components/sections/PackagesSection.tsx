"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import SectionHeaderBar from "@/components/ui/SectionHeaderBar";
import { useLanguage } from "@/components/ui/LanguageProvider";

const easeCurve: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function PackagesSection() {
  const { content: siteContent, isAr } = useLanguage();
  const { packages } = siteContent;

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="packages"
      dir={isAr ? "rtl" : "ltr"}
      className="py-20 md:py-28 px-6"
      style={{
        position: "relative",
        zIndex: 10,
        background: "var(--bg-primary)",
        borderTop: "1px solid var(--border-subtle)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeaderBar
          name={packages.sectionMeta.name}
          jp={packages.sectionMeta.jp}
          num={packages.sectionMeta.num}
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: easeCurve }}
          className="mb-14"
        >
          <p
            className="text-xs tracking-[0.25em] uppercase mb-4"
            style={{
              fontFamily: "var(--font-space-mono)",
              color: "var(--accent-rust)",
            }}
          >
            {packages.tag}
          </p>
          <h2
            className="font-black leading-none mb-4"
            style={{
              fontFamily: "var(--font-orbitron)",
              fontSize: "clamp(2rem, 5vw, 4.5rem)",
              color: "var(--text-primary)",
            }}
          >
            {packages.title}
          </h2>
          <p
            className="text-base max-w-2xl leading-relaxed"
            style={{ color: "var(--text-muted)" }}
          >
            {packages.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.tiers.map((tier, idx) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                ease: easeCurve,
                delay: idx * 0.1,
              }}
              className="rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden"
              style={{
                background: "var(--bg-secondary)",
                border: tier.featured
                  ? "1px solid var(--accent-rust)"
                  : "1px solid var(--border-default)",
                boxShadow: tier.featured
                  ? "0 0 60px var(--accent-rust-glow)"
                  : "none",
              }}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-6">
                  <span
                    className="text-xs uppercase tracking-widest px-3 py-1 rounded-full border"
                    style={{
                      fontFamily: "var(--font-space-mono)",
                      color: tier.featured
                        ? "var(--accent-rust)"
                        : "var(--text-muted)",
                      borderColor: tier.featured
                        ? "var(--accent-rust)"
                        : "var(--border-default)",
                      background: tier.featured
                        ? "var(--accent-rust-glow)"
                        : "var(--bg-tertiary)",
                    }}
                  >
                    {tier.badge}
                  </span>
                </div>

                <h3
                  className="text-2xl font-bold mb-2"
                  style={{
                    fontFamily: "var(--font-orbitron)",
                    color: "var(--text-primary)",
                  }}
                >
                  {tier.name}
                </h3>

                <div className="flex items-baseline gap-2 mb-5">
                  <span
                    className="text-4xl md:text-5xl font-black"
                    style={{
                      fontFamily: "var(--font-orbitron)",
                      color: tier.accent,
                    }}
                  >
                    {tier.price}
                  </span>
                  <span
                    className="text-xs"
                    style={{
                      fontFamily: "var(--font-space-mono)",
                      color: "var(--text-muted)",
                    }}
                  >
                    {isAr ? "/ للمشروع" : "/ project"}
                  </span>
                </div>

                <p
                  className="text-sm leading-relaxed mb-6 pb-6"
                  style={{
                    color: "var(--text-secondary)",
                    borderBottom: "1px solid var(--border-subtle)",
                  }}
                >
                  {tier.tagline}
                </p>

                <ul className="space-y-3.5 mb-8">
                  {tier.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-3 text-sm">
                      <span
                        className="mt-1 shrink-0"
                        style={{ color: "var(--accent-rust)" }}
                      >
                        <Check size={15} />
                      </span>
                      <span
                        className="leading-relaxed"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={scrollToContact}
                className="w-full py-3.5 rounded-xl text-xs font-semibold uppercase tracking-widest transition-all"
                style={{
                  fontFamily: "var(--font-space-mono)",
                  background: tier.featured
                    ? "var(--accent-rust)"
                    : "var(--bg-tertiary)",
                  color: "var(--text-primary)",
                  border: tier.featured
                    ? "1px solid var(--accent-rust)"
                    : "1px solid var(--border-default)",
                }}
              >
                {isAr ? `اختر باقة ${tier.name} ←` : `Select ${tier.name} →`}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

