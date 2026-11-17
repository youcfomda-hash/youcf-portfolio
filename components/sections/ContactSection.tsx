"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import SectionHeaderBar from "@/components/ui/SectionHeaderBar";
import { useLanguage } from "@/components/ui/LanguageProvider";

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function YoutubeIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}

function MagneticWrap({
  children,
  strength = 0.25,
}: {
  children: React.ReactNode;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 300, damping: 20 });
  const y = useSpring(rawY, { stiffness: 300, damping: 20 });

  return (
    <motion.div
      ref={ref}
      style={{ x, y }}
      onMouseMove={(e) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        rawX.set((e.clientX - cx) * strength);
        rawY.set((e.clientY - cy) * strength);
      }}
      onMouseLeave={() => {
        rawX.set(0);
        rawY.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const { content: siteContent, isAr } = useLanguage();
  const { contact, brand } = siteContent;

  const iconBoxStyle: React.CSSProperties = {
    width: 48,
    height: 48,
    borderRadius: 16,
    background: "var(--bg-secondary)",
    border: "1px solid var(--border-default)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "var(--accent-rust)",
    transition: "border-color 0.3s",
  };

  const monoMutedStyle: React.CSSProperties = {
    fontFamily: "var(--font-space-mono)",
    color: "var(--text-muted)",
  };

  const inputBaseClass =
    "w-full rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors";
  const inputStyle: React.CSSProperties = {
    background: "var(--bg-tertiary)",
    border: "1px solid var(--border-default)",
    color: "var(--text-primary)",
    pointerEvents: "auto",
    position: "relative",
    zIndex: 20,
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    setErrorMsg(null);

    const selectedPkg =
      contact.budgets.find((b) => b.value === form.budget)?.label ||
      form.budget ||
      "Not specified";

    const payload = {
      _subject: `🚀 New Portfolio Lead: ${form.name} (${selectedPkg})`,
      _replyto: form.email,
      _template: "table",
      _captcha: "false",
      "1. Client Name (الاسم الكامل)": form.name,
      "2. Client Email (البريد الإلكتروني)": form.email,
      "3. Package / Budget (الباقة المختارة)": selectedPkg,
      "4. Project & Automation Details (تفاصيل المشروع)": form.message,
      "5. Source (المصدر)": "Youcf Vision Portfolio (youcf-portfolio.vercel.app)",
      "6. Submitted At (التوقيت)": new Date().toLocaleString("en-GB", {
        timeZone: "Africa/Algiers",
      }),
    };

    try {
      const res = await fetch(
        `https://formsubmit.co/ajax/${encodeURIComponent(brand.email)}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      // Also notify server route in background
      fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          budget: selectedPkg,
          message: form.message,
        }),
      }).catch(() => {});

      if (!res.ok) {
        throw new Error("Failed to send email");
      }

      setSubmitted(true);
    } catch {
      setErrorMsg(
        isAr
          ? "حدث خطأ أثناء الإرسال التلقائي، يرجى المحاولة مرة أخرى أو الإرسال عبر واتساب."
          : "Could not send automatically. Please try again or reach out via WhatsApp."
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="contact"
      dir={isAr ? "rtl" : "ltr"}
      className="py-32 px-6"
      style={{
        position: "relative",
        zIndex: 10,
        background: "var(--bg-primary)",
      }}
    >
      <style>{`
        #contact input:focus, #contact textarea:focus, #contact select:focus {
          border-color: var(--accent-rust) !important;
        }
        #contact input::placeholder, #contact textarea::placeholder {
          color: var(--text-muted);
          opacity: 0.6;
        }
      `}</style>

      <div className="max-w-6xl mx-auto">
        <SectionHeaderBar
          name={contact.sectionMeta.name}
          jp={contact.sectionMeta.jp}
          num={contact.sectionMeta.num}
        />

        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
        >
          <p
            className="text-xs tracking-[0.3em] uppercase mb-4"
            style={{
              fontFamily: "var(--font-space-mono)",
              color: "var(--accent-rust)",
            }}
          >
            {contact.tag}
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold max-w-xl"
            style={{
              fontFamily: "var(--font-orbitron)",
              color: "var(--text-primary)",
            }}
          >
            {contact.title}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p
              className="text-lg leading-relaxed mb-10"
              style={{ color: "var(--text-secondary)" }}
            >
              {contact.promise}
            </p>

            <div className="space-y-6">
              <a
                href={brand.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div style={iconBoxStyle}>
                  <MessageCircle size={20} />
                </div>
                <div>
                  <div
                    className="text-sm font-semibold mb-0.5"
                    style={{ color: "var(--text-primary)" }}
                  >
                    WhatsApp
                  </div>
                  <div className="text-xs" style={monoMutedStyle}>
                    {brand.phone}
                  </div>
                </div>
              </a>

              <a
                href={`mailto:${brand.email}`}
                className="flex items-center gap-4 group"
              >
                <div style={iconBoxStyle}>
                  <Mail size={20} />
                </div>
                <div>
                  <div
                    className="text-sm font-semibold mb-0.5"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Email
                  </div>
                  <div className="text-xs" style={monoMutedStyle}>
                    {brand.email}
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div style={iconBoxStyle}>
                  <MapPin size={20} />
                </div>
                <div>
                  <div
                    className="text-sm font-semibold mb-0.5"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Location
                  </div>
                  <div className="text-xs" style={monoMutedStyle}>
                    {brand.location}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <a
                  href={brand.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={iconBoxStyle}
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon size={18} />
                </a>
                <a
                  href={brand.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={iconBoxStyle}
                  aria-label="Instagram"
                >
                  <InstagramIcon size={18} />
                </a>
                <a
                  href={brand.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={iconBoxStyle}
                  aria-label="YouTube"
                >
                  <YoutubeIcon size={18} />
                </a>
              </div>

              <a
                href={brand.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl font-semibold text-sm transition-all"
                style={{
                  fontFamily: "var(--font-space-mono)",
                  background: "var(--accent-rust-glow)",
                  border: "1px solid var(--accent-rust)",
                  color: "var(--text-primary)",
                }}
              >
                <MessageCircle size={18} />
                {contact.whatsappButtonLabel}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            {submitted ? (
              <div
                className="rounded-xl border p-10 text-center"
                style={{
                  background: "var(--bg-secondary)",
                  borderColor: "var(--border-default)",
                }}
              >
                <div
                  className="text-4xl font-bold mb-4"
                  style={{
                    fontFamily: "var(--font-orbitron)",
                    color: "var(--accent-rust)",
                  }}
                >
                  ✓
                </div>
                <h3
                  className="text-xl font-bold mb-2"
                  style={{
                    fontFamily: "var(--font-orbitron)",
                    color: "var(--text-primary)",
                  }}
                >
                  {isAr
                    ? "تم إرسال طلبك إلى الإيميل بنجاح!"
                    : "Message Sent to Email!"}
                </h3>
                <p
                  className="text-sm mb-6"
                  style={{ color: "var(--text-muted)" }}
                >
                  {isAr ? (
                    <>
                      شكراً لك <strong>{form.name || "عزيزي العميل"}</strong>! تم
                      إرسال تفاصيل مشروعك بشكل منظم إلى بريدي الإلكتروني (
                      <code>{brand.email}</code>) وسأتواصل معك خلال 24 ساعة.
                    </>
                  ) : (
                    <>
                      Thank you, <strong>{form.name || "partner"}</strong>! Your
                      project details have been sent directly to my email (
                      <code>{brand.email}</code>). I&apos;ll be in touch within
                      24 hours.
                    </>
                  )}
                </p>
                <a
                  href={`${brand.whatsappUrl}?text=${encodeURIComponent(
                    `Hi Youcef! I'm ${form.name} (${form.email}). Package: ${form.budget}. Project: ${form.message}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold"
                  style={{
                    fontFamily: "var(--font-space-mono)",
                    background: "var(--accent-rust)",
                    color: "var(--text-primary)",
                  }}
                >
                  {isAr
                    ? "أو تواصل معي فوراً عبر واتساب ←"
                    : "Or Chat Instantly on WhatsApp →"}
                </a>
              </div>
            ) : (
              <div
                className="rounded-xl border p-6"
                style={{
                  background: "var(--bg-secondary)",
                  borderColor: "var(--border-default)",
                }}
              >
                <form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                  style={{ position: "relative", zIndex: 10 }}
                >
                  <div>
                    <label
                      className="block text-xs mb-2 uppercase tracking-widest"
                      style={monoMutedStyle}
                    >
                      <span style={{ color: "var(--accent-rust)" }}>_</span>{" "}
                      {isAr ? "الاسم" : "Name"}
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      className={inputBaseClass}
                      placeholder={isAr ? "اسمك الكامل" : "Your name"}
                      style={inputStyle}
                    />
                  </div>

                  <div>
                    <label
                      className="block text-xs mb-2 uppercase tracking-widest"
                      style={monoMutedStyle}
                    >
                      <span style={{ color: "var(--accent-rust)" }}>_</span>{" "}
                      {isAr ? "البريد الإلكتروني" : "Email"}
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      className={inputBaseClass}
                      placeholder="hello@yourbusiness.com"
                      style={inputStyle}
                    />
                  </div>

                  <div>
                    <label
                      className="block text-xs mb-2 uppercase tracking-widest"
                      style={monoMutedStyle}
                    >
                      <span style={{ color: "var(--accent-rust)" }}>_</span>{" "}
                      {isAr ? "الباقة / الميزانية" : "Package / Budget"}
                    </label>
                    <select
                      value={form.budget}
                      onChange={(e) =>
                        setForm({ ...form, budget: e.target.value })
                      }
                      className={`${inputBaseClass} appearance-none`}
                      style={{
                        ...inputStyle,
                        color: form.budget
                          ? "var(--text-primary)"
                          : "var(--text-muted)",
                      }}
                    >
                      <option
                        value=""
                        disabled
                        style={{
                          background: "var(--bg-secondary)",
                          color: "var(--text-primary)",
                        }}
                      >
                        {isAr
                          ? "اختر الباقة أو الميزانية"
                          : "Select package or budget"}
                      </option>
                      {contact.budgets.map((b) => (
                        <option
                          key={b.value}
                          value={b.value}
                          style={{
                            background: "var(--bg-secondary)",
                            color: "var(--text-primary)",
                          }}
                        >
                          {b.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      className="block text-xs mb-2 uppercase tracking-widest"
                      style={monoMutedStyle}
                    >
                      <span style={{ color: "var(--accent-rust)" }}>_</span>{" "}
                      {isAr
                        ? "ما الذي تريد أتمتته؟"
                        : "What do you want to automate?"}
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      className={`${inputBaseClass} resize-none`}
                      placeholder={
                        isAr
                          ? "حدثني عن مشروعك أو النظام والـ Workflow الذي ترغب في بنائه..."
                          : "Tell me about your business and the workflows or AI agents you want built..."
                      }
                      style={inputStyle}
                    />
                  </div>

                  {errorMsg && (
                    <p className="text-xs text-red-400">{errorMsg}</p>
                  )}

                  <MagneticWrap>
                    <button
                      type="submit"
                      disabled={sending}
                      className="w-full py-4 font-bold rounded-xl transition-colors text-sm flex items-center justify-center gap-2 disabled:opacity-60"
                      style={{
                        fontFamily: "var(--font-space-mono)",
                        background: "var(--accent-rust)",
                        color: "var(--text-primary)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background =
                          "var(--accent-rust-hover)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "var(--accent-rust)";
                      }}
                    >
                      {sending
                        ? isAr
                          ? "جارٍ الإرسال إلى الإيميل..."
                          : "Sending to Email..."
                        : isAr
                        ? "إرسال الرسالة"
                        : "Send Message"}
                      <motion.span
                        animate={{ x: [0, 4, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                      >
                        ›
                      </motion.span>
                    </button>
                  </MagneticWrap>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
