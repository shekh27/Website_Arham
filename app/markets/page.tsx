"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";
import Link from "next/link";

const KEY_GEOGRAPHIES = [
  {
    name: "Kingdom of Saudi Arabia (KSA)",
    description: "Supporting Vision 2030 initiatives in renewables and infrastructure.",
    flag: "🇸🇦",
  },
  {
    name: "United Arab Emirates (UAE)",
    description: "Driving growth in Dubai and Abu Dhabi's financial hubs.",
    flag: "🇦🇪",
  },
  {
    name: "Bharat (India)",
    description: "Fueling expansion in Mumbai, Delhi NCR region, Bengaluru and beyond, with a focus on sustainable projects.",
    flag: "🇮🇳",
  },
];

const EXPANSION_REGIONS = [
  { name: "Qatar", region: "Gulf" },
  { name: "Oman", region: "Gulf" },
  { name: "Uzbekistan", region: "CIS" },
  { name: "Kazakhstan", region: "CIS" },
];

export default function MarketsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="pt-16 pb-24 sm:pb-32 px-6 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-[1360px]">
            <ScrollReveal>
              <p className="text-[11px] font-sans font-medium uppercase tracking-[0.3em] text-secondary mb-5">
                Markets
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="font-serif text-[clamp(2.5rem,5vw,4.2rem)] font-semibold leading-[1.1] tracking-[-0.015em] text-foreground mb-8 max-w-[700px]">
                Our Strategic <span className="text-bronze">Markets</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-[17px] leading-[1.75] text-secondary max-w-[620px] font-sans">
                We operate in high-potential regions where innovation meets
                opportunity. Our localized expertise ensures solutions that
                resonate with local regulations, cultures, and economic trends.
              </p>
            </ScrollReveal>
          </div>
        </section>

        <div className="hr-bronze mx-6 sm:mx-8 lg:mx-12" />

        {/* Key Geographies */}
        <section className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-[1360px]">
            <ScrollReveal>
              <p className="text-[11px] font-sans font-medium uppercase tracking-[0.3em] text-secondary mb-5">
                Key Geographies
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.15] tracking-[-0.01em] text-foreground mb-16">
                Where We <span className="text-bronze">Operate</span>
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {KEY_GEOGRAPHIES.map((geo, i) => (
                <ScrollReveal key={geo.name} delay={i * 0.1}>
                  <div className="group p-8 lg:p-10 border border-border/40 rounded-sm bg-surface-elevated/50 card-lift h-full">
                    {/* Flag */}
                    <div className="text-[36px] mb-5 leading-none">{geo.flag}</div>
                    {/* Bronze line */}
                    <div className="w-8 h-[1.5px] bg-bronze mb-6 transition-all duration-500 group-hover:w-14 origin-left" />
                    <h3 className="font-serif text-[22px] font-semibold text-foreground mb-4 tracking-[-0.01em]">
                      {geo.name}
                    </h3>
                    <p className="text-[14px] leading-[1.75] text-secondary font-sans">
                      {geo.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Expansion Plans */}
        <section className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-surface-dark text-white">
          <div className="mx-auto max-w-[1360px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div>
                <ScrollReveal>
                  <p className="text-[11px] font-sans font-medium uppercase tracking-[0.3em] text-[#888] mb-5">
                    Expansion Plans
                  </p>
                </ScrollReveal>
                <ScrollReveal delay={0.1}>
                  <h2 className="font-serif text-[clamp(2rem,3.5vw,2.8rem)] font-semibold leading-[1.15] tracking-[-0.01em] text-white mb-6">
                    Broadening Our <span className="text-bronze">Impact</span>
                  </h2>
                </ScrollReveal>
                <ScrollReveal delay={0.15}>
                  <p className="text-[15px] leading-[1.75] text-[#999] font-sans max-w-[500px]">
                    Near-term growth into deeper Gulf regions and CIS to broaden
                    our impact and serve emerging markets with high growth
                    potential.
                  </p>
                </ScrollReveal>
              </div>

              {/* Expansion region cards */}
              <div className="grid grid-cols-2 gap-5">
                {EXPANSION_REGIONS.map((r, i) => (
                  <ScrollReveal key={r.name} delay={0.1 + i * 0.08}>
                    <div className="group p-6 border border-[#222] rounded-sm hover:border-bronze/30 transition-colors duration-400 text-center">
                      <div className="w-2 h-2 rounded-full bg-bronze/40 mx-auto mb-4 group-hover:bg-bronze transition-colors duration-400" />
                      <p className="font-serif text-[18px] font-semibold text-white mb-1">
                        {r.name}
                      </p>
                      <p className="text-[11px] font-sans uppercase tracking-[0.15em] text-[#666]">
                        {r.region}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach in These Markets */}
        <section className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-[1360px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              {/* Decorative visual */}
              <ScrollReveal direction="scale">
                <div className="relative flex items-center justify-center">
                  <div className="w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] rounded-full border border-border/25 flex items-center justify-center">
                    <div className="w-[190px] h-[190px] sm:w-[220px] sm:h-[220px] rounded-full border border-border/15 flex items-center justify-center">
                      <div className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] rounded-full bg-gradient-to-br from-bronze/10 to-bronze/5 flex items-center justify-center">
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" className="text-bronze" aria-hidden="true">
                          <circle cx="18" cy="18" r="15" stroke="currentColor" strokeWidth="1" />
                          <path d="M18 3C21 7 23 12 23 18s-2 11-5 15M18 3C15 7 13 12 13 18s2 11 5 15M3 18h30M5 10h26M5 26h26" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-6 right-10 w-2 h-2 rounded-full bg-bronze/40" />
                  <div className="absolute bottom-10 left-6 w-1.5 h-1.5 rounded-full bg-bronze/30" />
                </div>
              </ScrollReveal>

              {/* Text */}
              <div>
                <ScrollReveal>
                  <p className="text-[11px] font-sans font-medium uppercase tracking-[0.3em] text-secondary mb-5">
                    Our Approach
                  </p>
                </ScrollReveal>
                <ScrollReveal delay={0.1}>
                  <h2 className="font-serif text-[clamp(1.8rem,3.5vw,2.6rem)] font-semibold leading-[1.15] tracking-[-0.01em] text-foreground mb-6">
                    Your Trusted <span className="text-bronze">Partner</span>
                  </h2>
                </ScrollReveal>
                <ScrollReveal delay={0.15}>
                  <p className="text-[15px] leading-[1.75] text-secondary font-sans max-w-[520px]">
                    In these markets, we leverage strong networks to deliver
                    innovation and economic prosperity. Whether it&rsquo;s
                    financing renewable or water treatment projects in the UAE or
                    recruiting talent for expansion of real world asset
                    portfolio, we&rsquo;re your trusted partner.
                  </p>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 sm:px-8 lg:px-12 border-t border-border/30">
          <div className="mx-auto max-w-[1360px] text-center">
            <ScrollReveal>
              <div className="w-8 h-[1px] bg-bronze mx-auto mb-8 opacity-60" />
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="font-serif text-[clamp(1.8rem,3.5vw,2.8rem)] font-semibold leading-[1.2] text-foreground mb-6 max-w-[540px] mx-auto">
                Explore opportunities in your market
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2.5 bg-foreground text-background text-[12px] font-sans font-medium uppercase tracking-[0.14em] px-8 py-4 rounded-sm transition-all duration-500 ease-out hover:bg-bronze"
              >
                <span>Contact Us</span>
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
