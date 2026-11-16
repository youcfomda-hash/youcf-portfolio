"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import SectionHeaderBar from "@/components/ui/SectionHeaderBar";
import { useLanguage } from "@/components/ui/LanguageProvider";

const easeCurve: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function ServicesSection() {
  const [openId, setOpenId] = useState<string | null>("social-engine");
  const { content: siteContent, isAr } = useLanguage();
  const { services } = siteContent;

  const toggle = (id: string) =>
    setOpenId((prev) => (prev === id ? null : id));

  return (
    <section
      id="services"
      dir={isAr ? "rtl" : "ltr"}
      className="py-28 px-6"
      style={{
        position: "relative",
        zIndex: 10,
        background: "var(--bg-primary)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeaderBar
          name={services.sectionMeta.name}
          jp={services.sectionMeta.jp}
          num={services.sectionMeta.num}
        />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px", amount: 0.1 }}
          transition={{ duration: 0.8, ease: easeCurve }}
        >
          <div className="flex items-start justify-between mb-16 gap-6">
            <p
              className="text-xs tracking-[0.25em] uppercase mt-2 shrink-0"
              style={{
                fontFamily: "var(--font-space-mono)",
                color: "var(--accent-rust)",
              }}
            >
              {services.subtitle}
            </p>
            <h2
              className="text-right font-black leading-none"
              style={{
                fontFamily: "var(--font-orbitron)",
                fontSize: "clamp(2.5rem, 7vw, 7rem)",
                color: "var(--text-primary)",
              }}
            >
              {services.title}
            </h2>
          </div>
        </motion.div>

        <div style={{ borderTop: "1px solid var(--border-subtle)" }}>
          {services.items.map((item, idx) => {
            const isOpen = openId === item.id;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px", amount: 0.1 }}
                transition={{
                  duration: 0.7,
                  ease: easeCurve,
                  delay: idx * 0.05,
                }}
              >
                <div
                  className="border-l-2 transition-all duration-300"
                  style={{
                    borderBottom: "1px solid var(--border-subtle)",
                    borderLeftColor: isOpen
                      ? "var(--accent-rust)"
                      : "transparent",
                  }}
                >
                  <button
                    onClick={() => toggle(item.id)}
                    className="w-full flex items-center gap-6 md:gap-10 pl-6 pr-0 py-6 text-left group"
                  >
                    <span
                      className="text-xs transition-colors duration-300 shrink-0 tabular-nums"
                      style={{
                        fontFamily: "var(--font-space-mono)",
                        color: isOpen
                          ? "var(--accent-rust)"
                          : "var(--text-muted)",
                      }}
                    >
                      {item.num}
                    </span>
                    <span
                      className="flex-1 text-lg md:text-2xl font-bold transition-colors duration-300"
                      style={{
                        fontFamily: "var(--font-orbitron)",
                        color: isOpen
                          ? "var(--accent-rust)"
                          : "var(--text-primary)",
                      }}
                    >
                      {item.title}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 90 : 0 }}
                      transition={{ duration: 0.3, ease: easeCurve }}
                      className="shrink-0"
                      style={{
                        color: isOpen
                          ? "var(--accent-rust)"
                          : "var(--text-muted)",
                      }}
                    >
                      <ChevronRight size={20} />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: easeCurve }}
                        style={{ overflow: "hidden" }}
                      >
                        <div
                          className="services-panel rounded-xl border p-6 mx-6 mb-6 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10"
                          style={{
                            background: "var(--bg-secondary)",
                            borderColor: "var(--border-default)",
                            transition: "border-color 0.3s",
                          }}
                        >
                          <div>
                            <p
                              className="text-sm leading-relaxed mb-6"
                              style={{ color: "var(--text-secondary)" }}
                            >
                              {item.description}
                            </p>
                            <span
                              className="inline-block text-sm font-semibold px-4 py-1.5 rounded-full border"
                              style={{
                                borderColor: "rgba(201,168,76,0.35)",
                                background:
                                  "linear-gradient(135deg, rgba(201,168,76,0.12) 0%, rgba(201,168,76,0.04) 100%)",
                                color: "var(--gold)",
                                fontFamily: "var(--font-space-mono)",
                              }}
                            >
                              {item.roiBadge}
                            </span>
                          </div>

                          <div>
                            <p
                              className="text-xs tracking-[0.2em] uppercase mb-5"
                              style={{
                                fontFamily: "var(--font-space-mono)",
                                color: "var(--text-muted)",
                              }}
                            >
                              {isAr ? "كيف يعمل النظام" : "How It Works"}
                            </p>
                            <div className="space-y-4">
                              {item.workflow.map((w) => (
                                <div key={w.step} className="flex gap-4">
                                  <span
                                    className="text-xs mt-0.5 shrink-0 tabular-nums"
                                    style={{
                                      fontFamily: "var(--font-space-mono)",
                                      color: "var(--accent-rust)",
                                    }}
                                  >
                                    {w.step}
                                  </span>
                                  <div>
                                    <p
                                      className="text-sm font-semibold leading-snug"
                                      style={{ color: "var(--text-primary)" }}
                                    >
                                      {w.title}
                                    </p>
                                    <p
                                      className="text-xs mt-0.5"
                                      style={{ color: "var(--text-muted)" }}
                                    >
                                      {w.desc}
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div>
                            <p
                              className="text-xs tracking-[0.2em] uppercase mb-5"
                              style={{
                                fontFamily: "var(--font-space-mono)",
                                color: "var(--text-muted)",
                              }}
                            >
                              {isAr ? "التقنيات المستخدمة" : "Stack"}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {item.stack.map((tech) => (
                                <span
                                  key={tech}
                                  className="text-xs px-3 py-1.5 rounded-full border"
                                  style={{
                                    fontFamily: "var(--font-space-mono)",
                                    borderColor: "var(--border-default)",
                                    background: "var(--bg-tertiary)",
                                    color: "var(--text-secondary)",
                                  }}
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

