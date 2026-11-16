"use client";

import React from "react";
import { useLanguage } from "@/components/ui/LanguageProvider";

export default function FooterSection() {
  const { content: siteContent, isAr } = useLanguage();
  const { brand, nav } = siteContent;

  const footerLinks = nav.links;

  const scrollTo = (href: string) => {
    document
      .getElementById(href.replace("#", ""))
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      dir={isAr ? "rtl" : "ltr"}
      className="py-16 px-6"
      style={{
        position: "relative",
        zIndex: 10,
        background: "var(--bg-primary)",
        borderTop: "1px solid var(--border-subtle)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 mb-12">
          <div>
            <p
              className="text-lg mb-3"
              style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 600,
                color: "var(--text-primary)",
              }}
            >
              {brand.name}
            </p>
            <p
              className="text-sm max-w-xs"
              style={{ color: "var(--text-muted)" }}
            >
              {brand.description}
            </p>
            <div
              className="mt-4 flex items-center gap-2 text-xs"
              style={{
                fontFamily: "var(--font-space-mono)",
                color: "var(--text-muted)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-500/70 pulse-dot" />
              <span>{brand.est}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {footerLinks.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.href)}
                className="text-sm transition-colors"
                style={{
                  fontFamily: "var(--font-space-mono)",
                  color: "var(--text-muted)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--accent-rust)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--text-muted)";
                }}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div
            className="flex flex-col gap-2 text-sm"
            style={{ color: "var(--text-muted)" }}
          >
            <a
              href={brand.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[#8C3D1A]"
            >
              WhatsApp · {brand.phone}
            </a>
            <a
              href={`mailto:${brand.email}`}
              className="transition-colors hover:text-[#8C3D1A]"
            >
              {brand.email}
            </a>
            <a
              href={brand.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[#8C3D1A]"
            >
              Instagram · @youcf_vision
            </a>
            <span>{brand.location}</span>
          </div>
        </div>

        <div
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid var(--border-subtle)" }}
        >
          <p
            className="text-xs"
            style={{
              fontFamily: "var(--font-space-mono)",
              color: "var(--text-muted)",
            }}
          >
            © {new Date().getFullYear()} {brand.founderName} (
            {brand.founderBrand}). All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>
            AI Automation · n8n Workflow Engineering · Multi-Agent Systems
          </p>
        </div>
      </div>
    </footer>
  );
}

