"use client";

import React from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/components/ui/LanguageProvider";

export default function ProjectDetailClient({ slug }: { slug: string }) {
  const { lang, setLang, isAr, content } = useLanguage();
  const project = content.projects.items.find((p) => p.slug === slug);

  if (!project) return null;

  const accent = project.accentColor || "var(--accent-rust)";

  return (
    <div
      dir={isAr ? "rtl" : "ltr"}
      className="min-h-screen relative z-10"
      style={{
        background: "var(--bg-primary)",
        color: "var(--text-primary)",
      }}
    >
      <div
        className="sticky top-0 z-50 backdrop-blur-md"
        style={{
          background: "rgba(0,0,0,0.85)",
          borderBottom: "1px solid var(--border-subtle)",
        }}
      >
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
          <Link
            href="/#projects"
            className="flex items-center gap-2 text-sm transition-colors"
            style={{
              fontFamily: "var(--font-space-mono)",
              color: "var(--text-muted)",
            }}
          >
            <span>{isAr ? "→" : "←"}</span>
            <span>{isAr ? "العودة إلى المشاريع" : "Back to Work"}</span>
          </Link>

          <div className="flex items-center gap-4">
            <div
              className="flex items-center rounded-full p-0.5 border"
              style={{
                background: "var(--bg-secondary)",
                borderColor: "var(--border-default)",
                fontFamily: "var(--font-space-mono)",
                fontSize: 11,
              }}
            >
              <button
                onClick={() => setLang("en")}
                className="px-2.5 py-1 rounded-full transition-all"
                style={{
                  background:
                    lang === "en" ? "var(--accent-rust)" : "transparent",
                  color:
                    lang === "en" ? "var(--text-primary)" : "var(--text-muted)",
                  fontWeight: lang === "en" ? 700 : 400,
                }}
              >
                EN
              </button>
              <button
                onClick={() => setLang("ar")}
                className="px-2.5 py-1 rounded-full transition-all"
                style={{
                  background:
                    lang === "ar" ? "var(--accent-rust)" : "transparent",
                  color:
                    lang === "ar" ? "var(--text-primary)" : "var(--text-muted)",
                  fontWeight: lang === "ar" ? 700 : 400,
                }}
              >
                AR
              </button>
            </div>

            <span
              className="text-xs"
              style={{
                fontFamily: "var(--font-space-mono)",
                color: "var(--text-muted)",
              }}
            >
              {project.countryFlag} {project.country}
            </span>
          </div>
        </div>
      </div>

      <div style={{ borderBottom: "1px solid var(--border-subtle)" }}>
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <span
                  className="text-xs px-3 py-1 rounded-full border"
                  style={{
                    color: accent,
                    borderColor: `${accent}40`,
                    backgroundColor: `${accent}10`,
                    fontFamily: "var(--font-space-mono)",
                  }}
                >
                  {project.industryLabel}
                </span>
                <span
                  className="text-xs px-3 py-1 rounded-full border"
                  style={{
                    fontFamily: "var(--font-space-mono)",
                    borderColor: "var(--border-default)",
                    color: "var(--text-muted)",
                  }}
                >
                  {project.caseStudy.automationType}
                </span>
              </div>

              <h1
                className="font-black leading-tight mb-3"
                style={{
                  fontFamily: "var(--font-orbitron)",
                  fontSize: "clamp(2rem, 5vw, 4rem)",
                  color: "var(--text-primary)",
                }}
              >
                {project.client}
              </h1>
              <p className="text-lg" style={{ color: "var(--text-secondary)" }}>
                {project.headline}
              </p>
            </div>

            <div
              className="shrink-0"
              style={{
                borderLeft: isAr ? "none" : `3px solid ${accent}`,
                borderRight: isAr ? `3px solid ${accent}` : "none",
                paddingLeft: isAr ? 0 : "1.5rem",
                paddingRight: isAr ? "1.5rem" : 0,
                textAlign: isAr ? "left" : "right",
              }}
            >
              <div
                className="font-black leading-none mb-1"
                style={{
                  fontFamily: "var(--font-orbitron)",
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                  color: accent,
                }}
              >
                {project.stat}
              </div>
              <div
                className="text-sm"
                style={{
                  fontFamily: "var(--font-space-mono)",
                  color: "var(--text-muted)",
                }}
              >
                {project.statLabel}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16 space-y-20">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-8">
            <div>
              <p
                className="text-xs uppercase tracking-widest text-red-400 mb-3"
                style={{ fontFamily: "var(--font-space-mono)" }}
              >
                ▸ {isAr ? "المشكلة والتحدي" : "The Problem"}
              </p>
              <p
                className="leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                {project.caseStudy.problem}
              </p>
            </div>

            <div>
              <p
                className="text-xs uppercase tracking-widest text-green-400 mb-3"
                style={{ fontFamily: "var(--font-space-mono)" }}
              >
                ▸ {isAr ? "الحل الهندسي المؤتمت" : "Our Solution"}
              </p>
              <p
                className="leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                {project.caseStudy.solution}
              </p>
            </div>

            <div>
              <p
                className="text-xs uppercase tracking-widest mb-3"
                style={{
                  fontFamily: "var(--font-space-mono)",
                  color: "var(--text-muted)",
                }}
              >
                ▸ {isAr ? "التقنيات والأدوات" : "Tech Stack"}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.caseStudy.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2.5 py-1 rounded-md border"
                    style={{
                      fontFamily: "var(--font-space-mono)",
                      background: "var(--bg-secondary)",
                      borderColor: "var(--border-default)",
                      color: "var(--text-secondary)",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div
              className="relative rounded-2xl overflow-hidden border min-h-[280px]"
              style={{ borderColor: "var(--border-default)" }}
            >
              <img
                src={project.image}
                alt={project.client}
                className="w-full h-full object-cover min-h-[280px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5"
                style={{ backgroundColor: accent, opacity: 0.5 }}
              />
            </div>

            {project.videoUrl && (
              <div
                className="rounded-2xl overflow-hidden border p-4"
                style={{
                  background: "var(--bg-secondary)",
                  borderColor: "var(--border-default)",
                }}
              >
                <div className="flex items-center justify-between gap-2 mb-3">
                  <p
                    className="text-xs uppercase tracking-widest"
                    style={{
                      fontFamily: "var(--font-space-mono)",
                      color: accent,
                    }}
                  >
                    ▸{" "}
                    {isAr
                      ? "فيديو شرح وتجربة النظام (Live Demo)"
                      : "Live Workflow Demo Video"}
                  </p>
                  {(project.externalVideoUrl || project.videoUrl) && (
                    <a
                      href={project.externalVideoUrl || project.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full border transition-colors"
                      style={{
                        fontFamily: "var(--font-space-mono)",
                        color: "var(--text-primary)",
                        borderColor: `${accent}50`,
                        backgroundColor: `${accent}15`,
                      }}
                    >
                      <span>{isAr ? "فتح رابط الفيديو" : "Watch Video Link"}</span>
                      <ExternalLink size={12} />
                    </a>
                  )}
                </div>
                <div className="aspect-video w-full rounded-xl overflow-hidden">
                  <iframe
                    src={project.videoUrl}
                    title={`${project.client} Demo`}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        <div>
          <p
            className="text-xs uppercase tracking-widest mb-10"
            style={{ fontFamily: "var(--font-space-mono)", color: accent }}
          >
            {isAr ? "// كيف يعمل النظام خطوة بخطوة" : "// How It Works"}
          </p>
          <div className="space-y-4">
            {project.caseStudy.workflow.map((w, idx) => (
              <div key={w.step} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold border-2 shrink-0"
                    style={{
                      borderColor: accent,
                      color: accent,
                      fontFamily: "var(--font-orbitron)",
                      boxShadow: `0 0 12px ${accent}25`,
                      backgroundColor: `${accent}08`,
                    }}
                  >
                    {w.step}
                  </div>
                  {idx < project.caseStudy.workflow.length - 1 && (
                    <div
                      className="w-px flex-1 mt-2 mb-2"
                      style={{
                        backgroundColor: `${accent}20`,
                        minHeight: "2rem",
                      }}
                    />
                  )}
                </div>
                <div
                  className="flex-1 rounded-xl border p-4 mb-2"
                  style={{
                    background: "var(--bg-secondary)",
                    borderColor: "var(--border-default)",
                  }}
                >
                  <h3
                    className="font-semibold text-lg mb-2 leading-snug"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {w.title}
                  </h3>
                  <p
                    className="leading-relaxed text-sm"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {w.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p
            className="text-xs uppercase tracking-widest mb-6"
            style={{ fontFamily: "var(--font-space-mono)", color: accent }}
          >
            {isAr ? "// النتائج والأثر" : "// Results"}
          </p>
          <div
            className="rounded-2xl overflow-hidden border"
            style={{ borderColor: "var(--border-default)" }}
          >
            <div
              className="grid grid-cols-4 px-6 py-4 text-xs font-semibold"
              style={{
                backgroundColor: `${accent}12`,
                borderBottom: `1px solid ${accent}25`,
                color: accent,
                fontFamily: "var(--font-space-mono)",
              }}
            >
              <span>{isAr ? "المؤشر" : "Metric"}</span>
              <span>{isAr ? "قبل الأتمتة" : "Before"}</span>
              <span>{isAr ? "بعد الأتمتة" : "After"}</span>
              <span>{isAr ? "النتيجة" : "Impact"}</span>
            </div>
            {project.caseStudy.results.map((res, idx) => (
              <div
                key={res.metric}
                className="grid grid-cols-4 px-6 py-4 text-sm last:border-b-0"
                style={{
                  borderBottom: "1px solid var(--border-subtle)",
                  backgroundColor:
                    idx % 2 === 1 ? "var(--bg-secondary)" : "transparent",
                }}
              >
                <span
                  className="font-medium"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {res.metric}
                </span>
                <span style={{ color: "var(--text-muted)" }}>{res.before}</span>
                <span style={{ color: "var(--text-primary)" }}>
                  {res.after}
                </span>
                <span className="font-semibold" style={{ color: accent }}>
                  {res.improvement}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div
            className="absolute -top-2 -left-2 text-8xl leading-none font-serif pointer-events-none select-none"
            style={{ color: `${accent}12` }}
          >
            “
          </div>
          <blockquote
            className="italic text-lg leading-relaxed border-l-2 pl-8 py-4 rounded-r-2xl"
            style={{
              borderColor: accent,
              color: "var(--text-secondary)",
              background: "var(--bg-secondary)",
            }}
          >
            {project.caseStudy.testimonial}
          </blockquote>
        </div>
      </div>

      <div style={{ borderTop: "1px solid var(--border-subtle)" }}>
        <div className="max-w-5xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2
              className="text-2xl md:text-3xl font-bold mb-2"
              style={{
                fontFamily: "var(--font-orbitron)",
                color: "var(--text-primary)",
              }}
            >
              {isAr ? "هل أنت جاهز لنتائج مماثلة؟" : "Ready for results like these?"}
            </h2>
            <p
              style={{
                fontFamily: "var(--font-space-mono)",
                color: "var(--text-muted)",
              }}
            >
              {isAr
                ? "دعنا نبني نظام الذكاء الاصطناعي الخاص بمشروعك."
                : "Let's build your autonomous AI system."}
            </p>
          </div>
          <Link
            href="/#contact"
            className="shrink-0 px-8 py-3 rounded-full border text-sm font-semibold transition-all"
            style={{
              fontFamily: "var(--font-space-mono)",
              borderColor: accent,
              color: accent,
              backgroundColor: `${accent}10`,
            }}
          >
            {isAr ? "ابدأ مشروعك ←" : "Start a Project →"}
          </Link>
        </div>
      </div>
    </div>
  );
}

