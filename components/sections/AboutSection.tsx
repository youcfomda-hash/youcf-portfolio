"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { MessageCircle } from "lucide-react";
import SectionHeaderBar from "@/components/ui/SectionHeaderBar";
import { useLanguage } from "@/components/ui/LanguageProvider";

function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function YoutubeIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}

const easeCurve: [number, number, number, number] = [0.22, 1, 0.36, 1];

function useCountUp(target: number, active: boolean, duration = 1400) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setVal(Math.round((1 - Math.pow(1 - progress, 3)) * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [active, target, duration]);
  return val;
}

function AboutStatCell({
  stat,
  inView,
  first,
}: {
  stat: {
    value: number | null;
    suffix: string;
    display?: string;
    label: string;
  };
  inView: boolean;
  first: boolean;
}) {
  const count = useCountUp(stat.value ?? 0, inView && stat.value !== null);
  const text =
    stat.value !== null ? `${count}${stat.suffix}` : stat.display ?? "";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
        padding: first ? "0 20px 0 0" : "0 20px",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-orbitron)",
          fontWeight: 900,
          fontSize: "1.4rem",
          color: "var(--text-primary)",
          lineHeight: 1,
        }}
      >
        {text}
      </span>
      <span
        style={{
          fontFamily: "var(--font-space-mono)",
          fontSize: 10,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "rgba(var(--text-rgb),0.4)",
        }}
      >
        {stat.label}
      </span>
    </div>
  );
}

export default function AboutSection() {
  const statsRef = useRef<HTMLDivElement | null>(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-80px" });
  const { content: siteContent, isAr } = useLanguage();
  const { about, brand } = siteContent;

  return (
    <section
      id="about"
      dir={isAr ? "rtl" : "ltr"}
      style={{
        position: "relative",
        zIndex: 10,
        background: "var(--bg-primary)",
        overflow: "hidden",
        maxWidth: "100vw",
      }}
    >
      <div className="about-manifesto-pad" style={{ padding: "6rem 2rem 5rem" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <SectionHeaderBar
            name={about.sectionMeta.name}
            jp={about.sectionMeta.jp}
            num={about.sectionMeta.num}
          />
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: easeCurve }}
          >
            <p
              style={{
                fontFamily: "var(--font-space-mono)",
                fontSize: 11,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "var(--accent-rust)",
                marginBottom: "2.5rem",
              }}
            >
              {about.tag}
            </p>
            <h2
              style={{
                fontFamily: "var(--font-orbitron)",
                fontWeight: 900,
                fontSize: "clamp(1.8rem, 7vw, 5.5rem)",
                lineHeight: 1.1,
                color: "var(--text-primary)",
                maxWidth: 1000,
                margin: "0 0 3rem 0",
              }}
            >
              {about.manifestoLead}{" "}
              <em
                style={{
                  fontStyle: "italic",
                  color: "rgba(var(--text-rgb),0.55)",
                }}
              >
                {about.manifestoEmphasis}
              </em>
            </h2>
            <div style={{ height: 1, background: "var(--border-color)" }} />
          </motion.div>
        </div>
      </div>

      <div className="about-founder-pad" style={{ padding: "5rem 2rem" }}>
        <div
          className="about-founder-grid"
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "2fr 3fr",
            gap: "4rem",
            alignItems: "start",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: easeCurve }}
          >
            <div
              className="about-photo-wrap"
              style={{
                borderRadius: 16,
                overflow: "hidden",
                boxShadow:
                  "0 0 90px rgba(194, 68, 31, 0.28), 0 20px 60px rgba(0, 0, 0, 0.85), inset 0 0 40px rgba(140, 61, 26, 0.18)",
                aspectRatio: "3/4",
                background: "var(--bg-secondary)",
                border: "1px solid rgba(194, 68, 31, 0.4)",
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={about.photoUrl}
                alt={`${brand.founderName} — ${brand.founderRole}`}
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center top",
                  transform: "scale(1.06)",
                  display: "block",
                }}
              />
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "radial-gradient(circle at 85% 45%, rgba(194, 68, 31, 0.22) 0%, transparent 55%), linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 35%)",
                  pointerEvents: "none",
                }}
              />
            </div>

            <div
              style={{
                marginTop: 20,
                display: "flex",
                flexDirection: "column",
                gap: 4,
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-orbitron)",
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  color: "var(--text-primary)",
                }}
              >
                {brand.founderName} ({brand.founderBrand})
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-space-mono)",
                  fontSize: 12,
                  color: "rgba(var(--text-rgb),0.5)",
                }}
              >
                {brand.founderRole}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-space-mono)",
                  fontSize: 11,
                  color: "rgba(var(--text-rgb),0.4)",
                  marginBottom: 12,
                }}
              >
                {brand.locationShort}
              </p>
              <div style={{ display: "flex", gap: 14 }}>
                <a
                  href={brand.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="about-social-link"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon size={16} />
                </a>
                <a
                  href={brand.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="about-social-link"
                  aria-label="WhatsApp"
                >
                  <MessageCircle size={16} />
                </a>
                <a
                  href={brand.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="about-social-link"
                  aria-label="Instagram"
                >
                  <InstagramIcon size={16} />
                </a>
                <a
                  href={brand.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="about-social-link"
                  aria-label="YouTube"
                >
                  <YoutubeIcon size={16} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-story-col"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: easeCurve, delay: 0.15 }}
          >
            <p
              style={{
                fontFamily: "var(--font-space-mono)",
                fontSize: 11,
                letterSpacing: "0.2em",
                color: "var(--accent-rust)",
                marginBottom: "1.5rem",
              }}
            >
              {about.storyTag}
            </p>
            <h3
              style={{
                fontFamily: "var(--font-orbitron)",
                fontWeight: 900,
                fontSize: "clamp(1.6rem, 6vw, 3.5rem)",
                color: "var(--text-primary)",
                lineHeight: 1.1,
                marginBottom: "1.75rem",
              }}
            >
              {about.storyTitle}
            </h3>
            {about.paragraphs.map((p, idx) => (
              <p
                key={idx}
                style={{
                  fontSize: 16,
                  color: "rgba(var(--text-rgb),0.6)",
                  lineHeight: 1.9,
                  marginBottom:
                    idx === about.paragraphs.length - 1 ? "2.5rem" : "1.25rem",
                  overflowWrap: "break-word",
                  wordBreak: "break-word",
                  maxWidth: "100%",
                }}
              >
                {p}
              </p>
            ))}

            <div
              ref={statsRef}
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "stretch",
                gap: "1rem",
                marginBottom: "2rem",
                borderTop: "1px solid var(--border-color)",
                borderBottom: "1px solid var(--border-color)",
                padding: "1.25rem 0",
              }}
            >
              {about.stats.map((st, idx) => (
                <div
                  key={st.label}
                  style={{ display: "flex", alignItems: "stretch" }}
                >
                  <AboutStatCell
                    stat={st}
                    inView={statsInView}
                    first={idx === 0}
                  />
                  {idx < about.stats.length - 1 && (
                    <div
                      style={{
                        width: 1,
                        background: "var(--border-color)",
                        flexShrink: 0,
                      }}
                    />
                  )}
                </div>
              ))}
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {about.techPills.map((pill) => (
                <span
                  key={pill}
                  style={{
                    fontFamily: "var(--font-space-mono)",
                    fontSize: 11,
                    padding: "6px 14px",
                    borderRadius: 999,
                    background: "var(--card-bg)",
                    border: "1px solid var(--card-border)",
                    color: "rgba(var(--text-rgb),0.6)",
                    letterSpacing: "0.05em",
                  }}
                >
                  {pill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="about-values-pad" style={{ padding: "0 2rem 6rem" }}>
        <div
          className="about-values-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "16px",
            maxWidth: 1280,
            margin: "0 auto",
          }}
        >
          {about.values.map((v) => (
            <div
              key={v.num}
              className="about-value-card"
              style={{
                borderRadius: 18,
                background: "var(--bg-secondary)",
                border: "1px solid var(--border-default)",
                padding: "32px",
                minHeight: "220px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transition: "border-color 0.3s",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-orbitron)",
                  fontSize: "3.5rem",
                  fontWeight: 900,
                  color: "rgba(244,241,235,0.06)",
                  lineHeight: 1,
                }}
              >
                {v.num}
              </p>
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-orbitron)",
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: 10,
                  }}
                >
                  {v.title}
                </h3>
                <p
                  style={{
                    color: "var(--text-muted)",
                    fontSize: 14,
                    lineHeight: 1.75,
                  }}
                >
                  {v.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .about-value-card:hover {
          border-color: var(--border-strong) !important;
        }
        .about-social-link {
          color: rgba(var(--text-rgb),0.4);
          transition: color 0.2s;
        }
        .about-social-link:hover {
          color: var(--text-primary);
        }
        @media (max-width: 768px) {
          .about-founder-grid {
            grid-template-columns: 1fr !important;
          }
          .about-values-grid {
            grid-template-columns: 1fr !important;
          }
          .about-photo-wrap {
            max-height: 60vw !important;
            max-width: 280px !important;
            margin: 0 auto !important;
            overflow: hidden !important;
          }
          .about-manifesto-pad { padding: 3rem 1.25rem 2.5rem !important; }
          .about-founder-pad   { padding: 2.5rem 1.25rem !important; }
          .about-values-pad    { padding: 0 1.25rem 3rem !important; }
          .about-story-col     { overflow: hidden; max-width: 100%; padding: 0; }
        }
      `}</style>
    </section>
  );
}
