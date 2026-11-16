"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX, Play } from "lucide-react";
import { siteContent } from "@/data/content";
import { useLanguage } from "@/components/ui/LanguageProvider";

const easeCurve: [number, number, number, number] = [0.22, 1, 0.36, 1];

const rowPositions = [
  { justify: "flex-start", padding: "20vh 8% 20vh" },
  { justify: "flex-end", padding: "0 8% 20vh" },
  { justify: "flex-start", padding: "0 8% 20vh" },
  { justify: "flex-end", padding: "0 8% 25vh" },
];

function VerifiedBadge() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      style={{ flexShrink: 0 }}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="11" fill="#1DA1F2" />
      <path
        d="M7 12.5l3 3 7-7"
        fill="none"
        stroke="#fff"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TestimonialCard({
  item,
}: {
  item: (typeof siteContent.testimonials.items)[number];
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleVoiceAudio = () => {
    const vid = videoRef.current;
    if (!vid) return;
    if (vid.muted) {
      vid.muted = false;
      vid.currentTime = 0;
      vid.play().catch(() => {});
      setIsMuted(false);
    } else {
      vid.muted = true;
      setIsMuted(true);
    }
  };

  return (
    <motion.div
      className="testi-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: easeCurve }}
      style={{
        background: "rgba(244, 241, 235, 0.08)",
        backdropFilter: "blur(20px) saturate(180%)",
        WebkitBackdropFilter: "blur(20px) saturate(180%)",
        border: "1px solid rgba(244, 241, 235, 0.15)",
        borderRadius: 16,
        padding: 40,
        width: 480,
        maxWidth: "100%",
        boxSizing: "border-box",
        boxShadow:
          "0 20px 60px rgba(0,0,0,0.6), 0 0 0 0.5px rgba(244,241,235,0.1), inset 0 1px 0 rgba(244,241,235,0.12)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <p
        dir={item.isRtl ? "rtl" : "ltr"}
        style={{
          fontFamily: "var(--font-inter), sans-serif",
          fontSize: 16,
          lineHeight: 1.8,
          fontWeight: 400,
          color: "rgba(244,241,235,0.82)",
          margin: 0,
          textAlign: item.isRtl ? "right" : "left",
        }}
      >
        “{item.quote}”
      </p>

      {item.voiceVideo && (
        <div
          onClick={toggleVoiceAudio}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              toggleVoiceAudio();
            }
          }}
          style={{
            marginTop: 18,
            borderRadius: 12,
            overflow: "hidden",
            border: isMuted
              ? "1px solid rgba(244,241,235,0.14)"
              : "1px solid var(--accent-rust)",
            background: "#1C272C",
            cursor: "pointer",
            position: "relative",
            transition: "border-color 0.25s",
          }}
        >
          <video
            ref={videoRef}
            src={item.voiceVideo}
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: "100%",
              height: "auto",
              display: "block",
            }}
          />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "8px 14px",
              background: "rgba(0,0,0,0.45)",
              borderTop: "1px solid rgba(244,241,235,0.08)",
              fontFamily: "var(--font-space-mono)",
              fontSize: 11,
              color: isMuted ? "var(--text-secondary)" : "var(--accent-rust)",
            }}
          >
            <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <Play size={12} />
              Voice Feedback · WhatsApp Audio
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: 5 }}>
              {isMuted ? (
                <>
                  <VolumeX size={13} /> Tap for sound
                </>
              ) : (
                <>
                  <Volume2 size={13} /> Playing audio
                </>
              )}
            </span>
          </div>
        </div>
      )}

      <div
        style={{
          width: "100%",
          height: 1,
          background: "rgba(244,241,235,0.06)",
          margin: "28px 0 24px",
        }}
      />

      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <div
          style={{
            width: 56,
            height: 56,
            minWidth: 56,
            borderRadius: 8,
            overflow: "hidden",
            background: item.avatarBg,
            color: item.avatarText,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "var(--font-orbitron)",
            fontWeight: 700,
            fontSize: 14,
          }}
        >
          <img
            src={item.avatar}
            alt={item.name}
            width={56}
            height={56}
            loading="lazy"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>

        <div style={{ flex: 1, minWidth: 0 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              color: "var(--text-primary)",
              fontWeight: 700,
              fontSize: 14,
              lineHeight: 1.3,
            }}
          >
            <span>{item.name}</span>
            <VerifiedBadge />
          </div>
          <div
            style={{
              fontFamily: "var(--font-space-mono)",
              fontSize: 12,
              color: "var(--text-muted)",
              marginTop: 3,
            }}
          >
            {item.title}
          </div>
        </div>

        <div
          style={{
            fontFamily: "var(--font-orbitron)",
            fontWeight: 700,
            fontSize: 16,
            color: "var(--text-muted)",
            alignSelf: "flex-start",
          }}
        >
          youcf
        </div>
      </div>
    </motion.div>
  );
}

export default function TestimonialsSection() {
  const { content: siteContent } = useLanguage();
  const { testimonials, brand } = siteContent;

  const metaStyle: React.CSSProperties = {
    fontFamily: "var(--font-space-mono)",
    fontSize: 11,
    color: "var(--text-muted)",
    letterSpacing: "0.15em",
  };

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="testimonials"
      style={{
        position: "relative",
        zIndex: 10,
        background: "var(--bg-primary)",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
        }}
      >
        <div
          className="testi-sticky"
          style={{
            position: "sticky",
            top: 0,
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            pointerEvents: "none",
          }}
        >
          <div style={{ whiteSpace: "nowrap", overflow: "hidden", width: "100vw" }}>
            <div
              style={{
                display: "inline-flex",
                animation: "marquee-h 22s linear infinite",
                willChange: "transform",
              }}
            >
              {[0, 1, 2, 3].map((i) => (
                <span
                  key={i}
                  style={{
                    fontFamily: "var(--font-orbitron)",
                    fontWeight: 900,
                    fontSize: "clamp(5rem, 13vw, 13rem)",
                    color: "var(--text-primary)",
                    paddingRight: 80,
                    lineHeight: 1,
                  }}
                >
                  {testimonials.marqueeText}&nbsp;
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 1280,
          margin: "0 auto",
          padding: "40px 2rem 0",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingBottom: 16,
            borderBottom: "1px solid var(--border-subtle)",
          }}
        >
          <span style={metaStyle}>
            © {testimonials.sectionMeta.name} {testimonials.sectionMeta.jp}
          </span>
          <span style={{ display: "flex", gap: 24 }}>
            <span style={metaStyle}>Real Feedback</span>
            <span style={metaStyle}>
              ({brand.name} — {testimonials.sectionMeta.num})
            </span>
          </span>
        </div>
      </div>

      <div style={{ position: "relative", zIndex: 2 }}>
        {testimonials.items.map((item, idx) => {
          const pos = rowPositions[idx % rowPositions.length];
          return (
            <React.Fragment key={item.name}>
              <div
                className="testi-row"
                style={{
                  display: "flex",
                  justifyContent: pos.justify,
                  padding: pos.padding,
                }}
              >
                <TestimonialCard item={item} />
              </div>

              {idx === 1 && (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    padding: "0 8% 20vh",
                  }}
                >
                  <a
                    href="#contact"
                    onClick={scrollToContact}
                    className="testi-cta"
                    style={{
                      border: "2px solid var(--text-primary)",
                      borderRadius: 999,
                      padding: "16px 48px",
                      color: "var(--text-primary)",
                      fontFamily: "var(--font-space-mono)",
                      fontSize: 13,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      background: "transparent",
                      textDecoration: "none",
                      cursor: "pointer",
                      display: "inline-block",
                    }}
                  >
                    {testimonials.ctaLabel}
                  </a>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      <style>{`
        .testi-card { transition: border-color 0.3s; }
        .testi-card::before {
          content: '';
          position: absolute;
          top: 0; left: 10%; width: 80%; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(244,241,235,0.2), transparent);
          pointer-events: none;
        }
        .testi-card:hover { border-color: rgba(244,241,235,0.25); }
        .testi-cta:hover {
          background: var(--text-primary) !important;
          color: var(--bg-primary) !important;
        }
        #testimonials { overflow: visible !important; }
        @media (max-width: 768px) {
          .testi-sticky { height: 70vh !important; }
          .testi-row {
            justify-content: center !important;
            padding: 0 20px 60px !important;
          }
          .testi-row:first-of-type { padding-top: 10vh !important; }
        }
      `}</style>
    </section>
  );
}

