"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Preloader from "@/components/ui/Preloader";
import Navbar from "@/components/ui/Navbar";
import FloatingPromoCard from "@/components/ui/FloatingPromoCard";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import TechMarqueeSection from "@/components/sections/TechMarqueeSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import PackagesSection from "@/components/sections/PackagesSection";
import ResultsSection from "@/components/sections/ResultsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";
import FooterSection from "@/components/sections/FooterSection";

function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] z-[9000] origin-left"
      style={{ scaleX, background: "var(--accent-rust)" }}
    />
  );
}

export default function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem("youcf-loader-seen")) {
      setLoading(false);
    }
  }, []);

  return (
    <>
      {loading && (
        <Preloader
          onComplete={() => {
            sessionStorage.setItem("youcf-loader-seen", "1");
            setLoading(false);
          }}
        />
      )}

      {!loading && (
        <div>
          <ScrollProgressBar />
          <Navbar />
          <main>
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <TechMarqueeSection />
            <ProjectsSection />
            <PackagesSection />
            <ResultsSection />
            <TestimonialsSection />
            <ContactSection />
          </main>
          <FooterSection />
          <FloatingPromoCard />
        </div>
      )}
    </>
  );
}

