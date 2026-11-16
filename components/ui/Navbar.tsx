"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "@/components/ui/LanguageProvider";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, setLang, content: siteContent } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = siteContent.nav.links.map((item) => item.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          const [entry] = entries;
          if (entry.isIntersecting) {
            setActiveId(id);
          }
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.getElementById(href.replace("#", ""));
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-[100] px-6 py-5 flex items-center justify-between transition-all duration-300"
        style={{
          backgroundColor: scrolled ? "rgba(0,0,0,0.88)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled
            ? "1px solid var(--border-subtle)"
            : "1px solid transparent",
        }}
      >
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="text-base tracking-tight"
          style={{
            fontFamily: "var(--font-inter)",
            fontWeight: 600,
            color: "var(--text-primary)",
          }}
        >
          {siteContent.brand.name}
        </a>

        <div className="hidden md:flex items-center gap-8">
          {siteContent.nav.links.map((item) => {
            const isActive = activeId === item.href.replace("#", "");
            return (
              <button
                key={item.label}
                onClick={() => scrollTo(item.href)}
                className="text-sm transition-colors duration-200"
                style={{
                  fontFamily: "var(--font-inter)",
                  color: isActive
                    ? "var(--accent-rust)"
                    : "var(--text-secondary)",
                }}
                onMouseEnter={(e) => {
                  if (!isActive)
                    e.currentTarget.style.color = "var(--text-primary)";
                }}
                onMouseLeave={(e) => {
                  if (!isActive)
                    e.currentTarget.style.color = "var(--text-secondary)";
                }}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        <div className="hidden md:flex items-center gap-5">
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

          <button
            onClick={() => scrollTo("#contact")}
            className="text-sm transition-colors duration-200"
            style={{
              fontFamily: "var(--font-inter)",
              color: "var(--accent-rust)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--accent-rust-hover)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--accent-rust)";
            }}
          >
            {siteContent.nav.ctaLabel}
          </button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setLang(lang === "en" ? "ar" : "en")}
            className="flex items-center gap-1 px-2.5 py-1 rounded-full border text-xs"
            style={{
              fontFamily: "var(--font-space-mono)",
              background: "var(--bg-secondary)",
              borderColor: "var(--border-default)",
              color: "var(--text-primary)",
            }}
            aria-label="Switch language"
          >
            <Globe size={12} style={{ color: "var(--accent-rust)" }} />
            <span>{lang === "en" ? "AR" : "EN"}</span>
          </button>

          <button
            className="p-2"
            style={{ color: "var(--text-primary)" }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[99] flex flex-col items-center justify-center gap-8"
            style={{ background: "var(--bg-primary)" }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {siteContent.nav.links.map((item, i) => (
              <motion.button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className="text-3xl font-bold transition-colors"
                style={{
                  fontFamily: "var(--font-orbitron)",
                  color: "var(--text-primary)",
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                {item.label}
              </motion.button>
            ))}
            <motion.button
              onClick={() => scrollTo("#contact")}
              className="text-sm mt-4"
              style={{
                fontFamily: "var(--font-space-mono)",
                color: "var(--accent-rust)",
                letterSpacing: "0.1em",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {siteContent.nav.ctaLabel}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

