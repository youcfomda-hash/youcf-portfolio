"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { getSiteContent, siteContent } from "@/data/content";

export type PortfolioLang = "en" | "ar";

interface LanguageContextValue {
  lang: PortfolioLang;
  isAr: boolean;
  setLang: (lang: PortfolioLang) => void;
  toggleLang: () => void;
  content: typeof siteContent;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  isAr: false,
  setLang: () => {},
  toggleLang: () => {},
  content: siteContent,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<PortfolioLang>("en");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem("youcf-lang");
      if (saved === "ar" || saved === "en") {
        setLangState(saved);
      }
    } catch {
      // ignore storage errors
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (next: PortfolioLang) => {
    setLangState(next);
    try {
      window.localStorage.setItem("youcf-lang", next);
    } catch {
      // ignore storage errors
    }
  };

  const toggleLang = () => {
    setLang(lang === "en" ? "ar" : "en");
  };

  const value: LanguageContextValue = {
    lang,
    isAr: lang === "ar",
    setLang,
    toggleLang,
    content: getSiteContent(lang),
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

