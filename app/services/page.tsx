"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";
import Link from "next/link";

const SERVICES = [
  {
    id: "financial-advisory",
    title: "Financial Advisory",
    subtitle: "Project Finance · M&A · Financial Modelling",
    desc: "Niche transaction advisory with specialization in project finance, mergers & acquisitions, project development, and financial modelling.",
    details: "Our experts ensure your financial strategies are robust, compliant, and geared for success.",
    features: [
      { name: "Project Finance", detail: "Structuring funding for infrastructure, utility and industrial projects." },
      { name: "Mergers & Acquisitions", detail: "Guiding seamless deals with due diligence and valuation." },
      { name: "Financial Modelling", detail: "Advanced models for risk assessment and ROI optimization." },
    ],
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M16 3L29 10V22L16 29L3 22V10L16 3Z" stroke="currentColor" strokeWidth="1.2" />
        <path d="M16 15V29M3 10L16 15M16 15L29 10" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    id: "investment-services",
    title: "Investment Services",
    subtitle: "Portfolio Management · Risk Analysis · Sustainability",
    desc: "Comprehensive investment advisory to identify and capitalize on opportunities.",
    details: "",
    features: [
      { name: "Portfolio Management", detail: "Sustaining profitability in real world asset investments." },
      { name: "Risk Analysis", detail: "Bespoke risk framework to highlight volatilities and provide objective assessment and mitigation measures." },
      { name: "Sustainability", detail: "Focusing on ESG (Environmental, Social, Governance) principles for lasting impact." },
    ],
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="16" cy="16" r="13" stroke="currentColor" strokeWidth="1.2" />
        <path d="M16 7V16H23" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "recruitment-services",
    title: "Recruitment Services",
    subtitle: "Executive Search · Team Building · Manpower Consulting",
    desc: "Tailored talent acquisition strategies for building high-performing, cross-functional teams.",
    details: "",
    features: [
      { name: "Executive Search", detail: "Sourcing top leaders in finance, business development, treasury, legal, contracts, investments, asset management for infrastructure and utility businesses." },
      { name: "Team Building", detail: "Customized strategies for startups and enterprises." },
      { name: "Manpower Consulting", detail: "Ensuring cultural fit and skill alignment in diverse markets." },
    ],
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="12" cy="10" r="5" stroke="currentColor" strokeWidth="1.2" />
        <path d="M3 28c0-5 4-9 9-9s9 4 9 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <circle cx="23" cy="12" r="4" stroke="currentColor" strokeWidth="1.2" />
        <path d="M25 19c3 1 5 4 5 7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="pt-16 pb-24 sm:pb-32 px-6 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-[1360px]">
            <ScrollReveal>
              <p className="text-[11px] font-sans font-medium uppercase tracking-[0.3em] text-secondary mb-5">
                Our Services
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="font-serif text-[clamp(2.5rem,5vw,4.2rem)] font-semibold leading-[1.1] tracking-[-0.015em] text-foreground mb-8 max-w-[720px]">
                Our Core <span className="text-bronze">Offerings</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-[17px] leading-[1.75] text-secondary max-w-[600px] font-sans">
                We provide specialized services tailored to the unique needs of
                clients in dynamic markets. Explore how we can support your
                growth.
              </p>
            </ScrollReveal>
          </div>
        </section>

        <div className="hr-bronze mx-6 sm:mx-8 lg:mx-12" />

        {/* Service Sections */}
        {SERVICES.map((s, i) => (
          <section
            key={s.id}
            id={s.id}
            className={`py-24 sm:py-32 px-6 sm:px-8 lg:px-12 ${
              i % 2 === 1 ? "bg-surface-dark text-white" : ""
            }`}
          >
            <div className="mx-auto max-w-[1360px] grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
              {/* Left: overview */}
              <div>
                <ScrollReveal>
                  <div className={`mb-6 ${i % 2 === 1 ? "text-[#888]" : "text-secondary/60"}`}>
                    {s.icon}
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={0.05}>
                  <p className="text-[11px] font-sans font-medium uppercase tracking-[0.25em] text-bronze mb-3">
                    {s.subtitle}
                  </p>
                </ScrollReveal>
                <ScrollReveal delay={0.1}>
                  <h2 className={`font-serif text-[clamp(2rem,3.5vw,2.8rem)] font-semibold leading-[1.15] tracking-[-0.01em] mb-6 ${
                    i % 2 === 1 ? "text-white" : "text-foreground"
                  }`}>
                    {s.title}
                  </h2>
                </ScrollReveal>
                <ScrollReveal delay={0.15}>
                  <p className={`text-[15px] leading-[1.75] font-sans max-w-[500px] ${
                    i % 2 === 1 ? "text-[#999]" : "text-secondary"
                  }`}>
                    {s.desc}
                  </p>
                </ScrollReveal>
                {s.details && (
                  <ScrollReveal delay={0.2}>
                    <p className={`text-[14px] leading-[1.75] font-sans max-w-[500px] mt-5 ${
                      i % 2 === 1 ? "text-[#888]" : "text-secondary/80"
                    }`}>
                      {s.details}
                    </p>
                  </ScrollReveal>
                )}
              </div>

              {/* Right: features */}
              <div className="lg:pt-6">
                <ScrollReveal delay={0.1}>
                  <p className={`text-[11px] font-sans font-medium uppercase tracking-[0.25em] mb-8 ${
                    i % 2 === 1 ? "text-[#666]" : "text-secondary"
                  }`}>
                    Key Capabilities
                  </p>
                </ScrollReveal>
                <div className="space-y-0">
                  {s.features.map((f, fi) => (
                    <ScrollReveal key={f.name} delay={0.15 + fi * 0.08}>
                      <div className={`py-5 border-b ${
                        i % 2 === 1 ? "border-[#222]" : "border-border/40"
                      }`}>
                        <div className="flex items-start gap-4">
                          <div className="w-1.5 h-1.5 rounded-full bg-bronze/60 shrink-0 mt-2" />
                          <div>
                            <h3 className={`text-[15px] font-sans font-semibold mb-1.5 ${
                              i % 2 === 1 ? "text-white" : "text-foreground"
                            }`}>
                              {f.name}
                            </h3>
                            <p className={`text-[14px] leading-[1.7] font-sans ${
                              i % 2 === 1 ? "text-[#888]" : "text-secondary"
                            }`}>
                              {f.detail}
                            </p>
                          </div>
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* CTA */}
        <section className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 border-t border-border/30">
          <div className="mx-auto max-w-[1360px] text-center">
            <ScrollReveal>
              <div className="w-8 h-[1px] bg-bronze mx-auto mb-8 opacity-60" />
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="font-serif text-[clamp(1.8rem,3.5vw,2.8rem)] font-semibold leading-[1.2] text-foreground mb-6 max-w-[540px] mx-auto">
                Ready to elevate your business?
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-[15px] leading-[1.75] text-secondary font-sans max-w-[480px] mx-auto mb-10">
                Schedule a consultation and discover how our tailored services
                can drive your growth.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2.5 bg-foreground text-background text-[12px] font-sans font-medium uppercase tracking-[0.14em] px-8 py-4 rounded-sm transition-all duration-500 ease-out hover:bg-bronze"
              >
                <span>Schedule a Consultation</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform duration-400 ease-out group-hover:translate-x-[3px]" aria-hidden="true">
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
