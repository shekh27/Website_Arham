"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";
import Link from "next/link";

const VALUES = [
  {
    title: "Integrity",
    description: "Transparent and ethical in every interaction.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2L3 7V12C3 17.5 7 22 12 22C17 22 21 17.5 21 12V7L12 2Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
        <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Innovation",
    description: "Leveraging cutting-edge tools for forward-thinking solutions.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17a1 1 0 001 1h6a1 1 0 001-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.2" />
        <path d="M9 21h6M10 17v4M14 17v4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Impact",
    description: "Committed to societal and environmental sustainability.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.2" />
        <path d="M12 2C14.5 5 16 8.5 16 12s-1.5 7-4 10M12 2C9.5 5 8 8.5 8 12s1.5 7 4 10M2 12h20" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    title: "Excellence",
    description: "Prioritizing client satisfaction above all.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <polygon points="12,2 15,9 22,9 16,14 18,21 12,17 6,21 8,14 2,9 9,9" stroke="currentColor" strokeWidth="1.2" fill="none" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <section className="pt-16 pb-24 sm:pb-32 px-6 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-[1360px]">
            <ScrollReveal>
              <p className="text-[11px] font-sans font-medium uppercase tracking-[0.3em] text-secondary mb-5">
                About Us
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="font-serif text-[clamp(2.5rem,5vw,4.2rem)] font-semibold leading-[1.1] tracking-[-0.015em] text-foreground mb-8 max-w-[700px]">
                Who <span className="text-bronze">We Are</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="max-w-[640px] space-y-6 text-[17px] leading-[1.75] text-secondary font-sans">
                <p>
                  Arham Capital is a forward-looking startup offering seamless
                  financial, investment, and manpower advisory services, with a
                  sharp focus on selected geographies in the Middle East and
                  South Asia.
                </p>
                <p>
                  At Arham Capital, customer experience and satisfaction remain
                  our sole priority, hinging closely on the trust and faith in
                  our team to provide quality, reliable services with integrity
                  and conscience.
                </p>
                <p>
                  Our services are designed to serve as a catalyst for
                  sustainable growth for our clients, driving economic
                  prosperity, innovation, and lasting societal impact.
                </p>
                <p>
                  Founded in 2025 and headquartered in Dubai, UAE, we bring
                  together a team of seasoned professionals with deep expertise
                  in finance, recruitment, and market strategy. Our ethos is
                  simple:{" "}
                  <span className="font-serif italic text-bronze">
                    Ascend ethically, with conscience.
                  </span>
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <div className="hr-bronze mx-6 sm:mx-8 lg:mx-12" />

        {/* Our Mission */}
        <section className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-[1360px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div>
                <ScrollReveal>
                  <p className="text-[11px] font-sans font-medium uppercase tracking-[0.3em] text-secondary mb-5">
                    Our Mission
                  </p>
                </ScrollReveal>
                <ScrollReveal delay={0.1}>
                  <h2 className="font-serif text-[clamp(1.8rem,3.5vw,2.8rem)] font-semibold leading-[1.15] tracking-[-0.01em] text-foreground mb-6">
                    Empowering Growth in
                    <br />
                    <span className="text-bronze">Emerging Economies</span>
                  </h2>
                </ScrollReveal>
                <ScrollReveal delay={0.2}>
                  <p className="text-[16px] leading-[1.75] text-secondary font-sans max-w-[520px]">
                    To empower businesses and individuals in emerging economies
                    through innovative, trustworthy advisory services that foster
                    long-term prosperity.
                  </p>
                </ScrollReveal>
              </div>

              {/* Decorative mission visual */}
              <ScrollReveal delay={0.15} direction="scale">
                <div className="relative flex items-center justify-center">
                  <div className="w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] rounded-full border border-border/30 flex items-center justify-center">
                    <div className="w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] rounded-full border border-border/20 flex items-center justify-center">
                      <div className="w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] rounded-full bg-gradient-to-br from-bronze/10 to-bronze/5 flex items-center justify-center">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-bronze" aria-hidden="true">
                          <path d="M20 4L34 12V28L20 36L6 28V12L20 4Z" stroke="currentColor" strokeWidth="1.2" />
                          <path d="M20 16V36M6 12L20 16M20 16L34 12" stroke="currentColor" strokeWidth="1.2" />
                          <circle cx="20" cy="16" r="3" fill="currentColor" opacity="0.3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  {/* Accent dots */}
                  <div className="absolute top-4 right-8 w-2 h-2 rounded-full bg-bronze/40" />
                  <div className="absolute bottom-12 left-4 w-1.5 h-1.5 rounded-full bg-bronze/30" />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-surface-dark text-white">
          <div className="mx-auto max-w-[1360px]">
            <ScrollReveal>
              <p className="text-[11px] font-sans font-medium uppercase tracking-[0.3em] text-[#888] mb-5 text-center">
                Our Values
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.15] tracking-[-0.01em] text-white text-center mb-16">
                What <span className="text-bronze">Drives Us</span>
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {VALUES.map((value, i) => (
                <ScrollReveal key={value.title} delay={i * 0.1}>
                  <div className="group text-center">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-[#333] text-[#999] group-hover:border-bronze group-hover:text-bronze transition-all duration-400 mb-6">
                      {value.icon}
                    </div>
                    <h3 className="font-serif text-[20px] font-semibold text-white mb-3">
                      {value.title}
                    </h3>
                    <p className="text-[14px] leading-[1.7] text-[#777] font-sans">
                      {value.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-[1360px] text-center">
            <ScrollReveal>
              <div className="w-8 h-[1px] bg-bronze mx-auto mb-8 opacity-60" />
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="font-serif text-[clamp(1.5rem,3vw,2.2rem)] text-foreground leading-[1.4] mb-8 max-w-[500px] mx-auto">
                Join our journey — connect with us today.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2.5 bg-foreground text-background text-[12px] font-sans font-medium uppercase tracking-[0.14em] px-8 py-4 rounded-sm transition-all duration-500 ease-out hover:bg-bronze"
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
