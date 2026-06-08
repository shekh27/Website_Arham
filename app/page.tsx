"use client";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollReveal from "./components/ScrollReveal";
import Counter from "./components/Counter";
import Link from "next/link";
import { motion } from "framer-motion";

/* ───────────────────────────────────────────────
   Data
   ─────────────────────────────────────────────── */

const SERVICES = [
  {
    title: "Strategic Advisory",
    description:
      "M&A advisory, capital raising, and restructuring counsel for institutions navigating complex transactions across public and private markets.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M14 3L25 9V19L14 25L3 19V9L14 3Z" stroke="currentColor" strokeWidth="1.2" />
        <path d="M14 13V25M3 9L14 13M14 13L25 9" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    title: "Wealth Management",
    description:
      "Bespoke portfolio construction and preservation strategies for family offices and high-net-worth individuals with multi-generational mandates.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="11" stroke="currentColor" strokeWidth="1.2" />
        <path d="M14 7V14H20" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Capital Markets",
    description:
      "Deep expertise across fixed income, equities, and structured product origination with access to institutional-grade deal flow.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M3 21L9 13L15 17L25 7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 7H25V12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const STATS = [
  { value: 25, suffix: "+", label: "Years of Excellence" },
  { value: 12, suffix: "B+", prefix: "$", label: "Assets Under Advisory" },
  { value: 200, suffix: "+", label: "Institutional Clients" },
  { value: 6, suffix: "", label: "Global Offices" },
];

const LOCATIONS = [
  { city: "Mumbai", role: "Headquarters" },
  { city: "Dubai", role: "Middle East Office" },
  { city: "Singapore", role: "Asia-Pacific Office" },
  { city: "London", role: "Europe Office" },
  { city: "New York", role: "Americas Office" },
  { city: "Hong Kong", role: "North Asia Office" },
];

/* ───────────────────────────────────────────────
   Page Component
   ─────────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="flex-1">
        {/* ═══════════════════════════════════════
           HERO SECTION
           ═══════════════════════════════════════ */}
        <section className="relative flex items-center min-h-[92vh] px-6 sm:px-8 lg:px-12 overflow-hidden">
          <div className="mx-auto max-w-[1360px] w-full">
            <div className="max-w-[760px]">
              {/* Overline */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                className="text-[11px] font-sans font-medium uppercase tracking-[0.3em] text-secondary mb-6"
              >
                Institutional Advisory & Wealth Management
              </motion.p>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                className="font-serif text-[clamp(2.8rem,5.5vw,5rem)] font-semibold leading-[1.08] tracking-[-0.015em] text-foreground mb-8"
              >
                Strategic Counsel for
                <br />
                <span className="text-bronze">Enduring Growth</span>
              </motion.h1>

              {/* Body */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                className="text-[17px] leading-[1.75] text-secondary max-w-[560px] mb-12 font-sans"
              >
                We partner with institutions, family offices, and sovereign
                entities to navigate complex capital markets with precision,
                discretion, and long-term conviction.
              </motion.p>

              {/* CTA Row */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
                className="flex items-center gap-6"
              >
                <Link
                  href="/services"
                  className="group inline-flex items-center gap-2.5 bg-foreground text-background text-[12px] font-sans font-medium uppercase tracking-[0.14em] px-8 py-4 rounded-sm transition-all duration-500 ease-out hover:bg-bronze focus-visible:ring-2 focus-visible:ring-bronze focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <span>Our Services</span>
                  <svg
                    width="14" height="14" viewBox="0 0 14 14" fill="none"
                    className="transition-transform duration-400 ease-out group-hover:translate-x-[3px]"
                    aria-hidden="true"
                  >
                    <path d="M1 7H12.5M12.5 7L8 2.5M12.5 7L8 11.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <Link
                  href="/about"
                  className="text-[12px] font-sans font-medium uppercase tracking-[0.14em] text-secondary transition-colors duration-400 hover:text-foreground border-b border-border pb-1"
                >
                  Learn More
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Decorative elements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.8 }}
            className="absolute right-[12%] top-[12%] bottom-[12%] w-[1px] bg-border/30 hidden xl:block"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 1 }}
            className="absolute right-[12%] top-[25%] w-2 h-2 rounded-full bg-bronze/40 hidden xl:block"
          />

          {/* Subtle dot grid decoration */}
          <div className="absolute right-0 top-[20%] w-[200px] h-[200px] dot-grid opacity-30 hidden xl:block" />
        </section>

        {/* ═══════════════════════════════════════
           TRUST STRIP
           ═══════════════════════════════════════ */}
        <section className="border-y border-border/30 py-10 px-6 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-[1360px]">
            <ScrollReveal direction="fade" duration={0.8}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16">
                <span className="text-[11px] font-sans font-medium uppercase tracking-[0.25em] text-secondary">
                  Trusted By Leading Institutions
                </span>
                <div className="flex items-center gap-10 sm:gap-14">
                  {["SOVEREIGN FUNDS", "FAMILY OFFICES", "PENSION FUNDS", "ENDOWMENTS"].map(
                    (item) => (
                      <span
                        key={item}
                        className="text-[11px] font-sans tracking-[0.18em] text-border font-medium hidden sm:block"
                      >
                        {item}
                      </span>
                    )
                  )}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ═══════════════════════════════════════
           SERVICES SECTION
           ═══════════════════════════════════════ */}
        <section className="py-28 sm:py-36 px-6 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-[1360px]">
            {/* Section header */}
            <div className="max-w-[520px] mb-20">
              <ScrollReveal>
                <p className="text-[11px] font-sans font-medium uppercase tracking-[0.3em] text-secondary mb-5">
                  What We Do
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] font-semibold leading-[1.12] tracking-[-0.01em] text-foreground mb-6">
                  Integrated Expertise
                  <br />
                  Across Capital Markets
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="text-[15px] leading-[1.75] text-secondary font-sans">
                  Our advisory practice spans the full spectrum of institutional
                  finance, delivering tailored solutions through deep sector
                  knowledge and global market access.
                </p>
              </ScrollReveal>
            </div>

            {/* Service cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {SERVICES.map((service, i) => (
                <ScrollReveal key={service.title} delay={i * 0.12}>
                  <div className="group relative p-8 lg:p-10 border border-border/40 rounded-sm bg-surface-elevated/50 card-lift cursor-default">
                    {/* Bronze accent line */}
                    <div className="w-8 h-[1.5px] bg-bronze mb-7 transition-all duration-600 group-hover:w-14 origin-left" />

                    {/* Icon */}
                    <div className="text-foreground/70 mb-5 transition-colors duration-400 group-hover:text-bronze">
                      {service.icon}
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-[22px] font-semibold text-foreground mb-4 tracking-[-0.01em]">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[14px] leading-[1.75] text-secondary font-sans mb-6">
                      {service.description}
                    </p>

                    {/* Learn more link */}
                    <Link
                      href="/services"
                      className="inline-flex items-center gap-2 text-[12px] font-sans font-medium uppercase tracking-[0.12em] text-secondary transition-colors duration-400 hover:text-bronze"
                    >
                      <span>Learn More</span>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                        <path d="M1 6H10.5M10.5 6L7 2.5M10.5 6L7 9.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
           STATS SECTION
           ═══════════════════════════════════════ */}
        <section className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-surface-dark text-white">
          <div className="mx-auto max-w-[1360px]">
            <ScrollReveal>
              <p className="text-[11px] font-sans font-medium uppercase tracking-[0.3em] text-[#888] mb-5 text-center">
                Our Impact
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.15] tracking-[-0.01em] text-white text-center mb-16 sm:mb-20">
                A Legacy of{" "}
                <span className="text-bronze">Institutional Excellence</span>
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
              {STATS.map((stat, i) => (
                <ScrollReveal key={stat.label} delay={i * 0.1}>
                  <div className="text-center">
                    <div className="font-serif text-[clamp(2.5rem,5vw,3.8rem)] font-semibold leading-none mb-3">
                      <Counter
                        target={stat.value}
                        prefix={stat.prefix || ""}
                        suffix={stat.suffix}
                        duration={2.2}
                      />
                    </div>
                    <p className="text-[12px] font-sans uppercase tracking-[0.2em] text-[#777]">
                      {stat.label}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
           PHILOSOPHY SECTION
           ═══════════════════════════════════════ */}
        <section className="py-28 sm:py-36 px-6 sm:px-8 lg:px-12 border-b border-border/30">
          <div className="mx-auto max-w-[1360px] flex items-center justify-center">
            <ScrollReveal direction="scale">
              <div className="text-center max-w-[680px]">
                <div className="w-10 h-[1px] bg-bronze mx-auto mb-10 opacity-60" />
                <blockquote className="font-serif text-[clamp(1.4rem,3vw,2rem)] text-foreground italic leading-[1.55] mb-8">
                  &ldquo;Discipline in process, conviction in execution,
                  excellence in outcome. We believe that enduring value is built
                  through patience, rigour, and an unwavering commitment to our
                  clients&rsquo; long-term objectives.&rdquo;
                </blockquote>
                <div className="flex items-center justify-center gap-4">
                  <div className="w-6 h-[1px] bg-border" />
                  <p className="text-[11px] font-sans font-medium uppercase tracking-[0.25em] text-secondary">
                    Our Investment Philosophy
                  </p>
                  <div className="w-6 h-[1px] bg-border" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ═══════════════════════════════════════
           GLOBAL PRESENCE SECTION
           ═══════════════════════════════════════ */}
        <section className="py-28 sm:py-36 px-6 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-[1360px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              {/* Left: content */}
              <div>
                <ScrollReveal>
                  <p className="text-[11px] font-sans font-medium uppercase tracking-[0.3em] text-secondary mb-5">
                    Global Presence
                  </p>
                </ScrollReveal>
                <ScrollReveal delay={0.1}>
                  <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] font-semibold leading-[1.12] tracking-[-0.01em] text-foreground mb-6">
                    Operating Across
                    <br />
                    Key Financial Centers
                  </h2>
                </ScrollReveal>
                <ScrollReveal delay={0.2}>
                  <p className="text-[15px] leading-[1.75] text-secondary font-sans max-w-[480px] mb-10">
                    With a presence in six major financial hubs, we deliver local
                    insight with global perspective — ensuring our clients
                    benefit from cross-border opportunities and real-time market
                    intelligence.
                  </p>
                </ScrollReveal>
                <ScrollReveal delay={0.3}>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-[12px] font-sans font-medium uppercase tracking-[0.14em] text-foreground border-b border-foreground pb-1 transition-colors duration-400 hover:text-bronze hover:border-bronze"
                  >
                    <span>Find an Office</span>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path d="M1 6H10.5M10.5 6L7 2.5M10.5 6L7 9.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </ScrollReveal>
              </div>

              {/* Right: location grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-10">
                {LOCATIONS.map((loc, i) => (
                  <ScrollReveal key={loc.city} delay={0.1 + i * 0.08} direction="up">
                    <div className="group">
                      <div className="w-2 h-2 rounded-full bg-bronze/50 mb-3 group-hover:bg-bronze transition-colors duration-400" />
                      <p className="font-serif text-[20px] font-semibold text-foreground mb-1">
                        {loc.city}
                      </p>
                      <p className="text-[12px] font-sans text-secondary tracking-[0.04em]">
                        {loc.role}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
           CTA BANNER
           ═══════════════════════════════════════ */}
        <section className="relative py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-foreground overflow-hidden">
          {/* Decorative dot grid */}
          <div className="absolute inset-0 dot-grid opacity-[0.03]" />

          <div className="relative mx-auto max-w-[1360px] text-center">
            <ScrollReveal>
              <div className="w-8 h-[1px] bg-bronze mx-auto mb-8 opacity-60" />
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="font-serif text-[clamp(2rem,4.5vw,3.5rem)] font-semibold leading-[1.12] tracking-[-0.01em] text-background mb-6">
                Ready to Start
                <br />
                <span className="text-bronze">a Conversation?</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-[15px] leading-[1.75] text-[#999] font-sans max-w-[520px] mx-auto mb-10">
                Whether you&rsquo;re exploring strategic alternatives, seeking
                bespoke wealth solutions, or navigating capital markets — our
                team is ready to listen.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2.5 bg-bronze text-background text-[12px] font-sans font-medium uppercase tracking-[0.14em] px-10 py-4.5 rounded-sm transition-all duration-500 ease-out hover:bg-[#C9A468] focus-visible:ring-2 focus-visible:ring-bronze focus-visible:ring-offset-2 focus-visible:ring-offset-foreground"
              >
                <span>Get in Touch</span>
                <svg
                  width="14" height="14" viewBox="0 0 14 14" fill="none"
                  className="transition-transform duration-400 ease-out group-hover:translate-x-[3px]"
                  aria-hidden="true"
                >
                  <path d="M1 7H12.5M12.5 7L8 2.5M12.5 7L8 11.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
