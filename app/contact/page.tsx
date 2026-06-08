"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";
import Link from "next/link";

const OFFICES = [
  { city: "Mumbai, India", label: "Headquarters", address: "Headquartered in Mumbai, India" },
  { city: "Dubai, UAE", label: "Coming Soon", address: "Offices in Dubai, UAE (coming soon)" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", inquiryType: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const inputClass = "w-full bg-transparent border border-border/60 rounded-sm px-4 py-3.5 text-[14px] font-sans text-foreground placeholder:text-secondary/50 focus:border-bronze focus:outline-none transition-colors duration-300";

  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="pt-16 pb-24 sm:pb-32 px-6 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-[1360px]">
            <ScrollReveal>
              <p className="text-[11px] font-sans font-medium uppercase tracking-[0.3em] text-secondary mb-5">
                Contact
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="font-serif text-[clamp(2.5rem,5vw,4.2rem)] font-semibold leading-[1.1] tracking-[-0.015em] text-foreground mb-8 max-w-[650px]">
                Let&rsquo;s <span className="text-bronze">Connect</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-[17px] leading-[1.75] text-secondary max-w-[560px] font-sans">
                We&rsquo;re here to discuss how Arham Capital can support your
                goals. Reach out for a no-obligation consultation.
              </p>
            </ScrollReveal>
          </div>
        </section>

        <div className="hr-bronze mx-6 sm:mx-8 lg:mx-12" />

        {/* Form + Contact Info */}
        <section className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-[1360px] grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Form */}
            <div>
              <ScrollReveal>
                <p className="text-[11px] font-sans font-medium uppercase tracking-[0.3em] text-secondary mb-8">
                  Send a Message
                </p>
              </ScrollReveal>

              {submitted ? (
                <ScrollReveal direction="scale">
                  <div className="p-10 border border-bronze/30 rounded-sm text-center">
                    <div className="w-12 h-12 rounded-full bg-bronze/10 mx-auto mb-5 flex items-center justify-center">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M5 10L9 14L15 6" stroke="#B08D57" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <h3 className="font-serif text-[22px] font-semibold text-foreground mb-3">
                      Thank You
                    </h3>
                    <p className="text-[14px] text-secondary font-sans">
                      Submit your query — we respond within 24 hours.
                    </p>
                  </div>
                </ScrollReveal>
              ) : (
                <ScrollReveal delay={0.1}>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name */}
                    <input
                      name="name"
                      type="text"
                      placeholder="Name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className={inputClass}
                    />

                    {/* Email */}
                    <input
                      name="email"
                      type="email"
                      placeholder="Email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className={inputClass}
                    />

                    {/* Inquiry Type dropdown */}
                    <select
                      name="inquiryType"
                      required
                      value={formData.inquiryType}
                      onChange={handleChange}
                      className={`${inputClass} ${!formData.inquiryType ? "text-secondary/50" : ""}`}
                    >
                      <option value="" disabled>Inquiry Type</option>
                      <option value="financial-advisory">Financial Advisory</option>
                      <option value="recruitment">Recruitment</option>
                      <option value="general">General Inquiry</option>
                    </select>

                    {/* Message */}
                    <textarea
                      name="message"
                      placeholder="Message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className={`${inputClass} resize-none`}
                    />

                    {/* Submit */}
                    <button
                      type="submit"
                      className="group inline-flex items-center gap-2.5 bg-foreground text-background text-[12px] font-sans font-medium uppercase tracking-[0.14em] px-8 py-4 rounded-sm transition-all duration-500 ease-out hover:bg-bronze w-full sm:w-auto justify-center"
                    >
                      <span>Submit Your Query</span>
                      <svg
                        width="14" height="14" viewBox="0 0 14 14" fill="none"
                        className="transition-transform duration-400 ease-out group-hover:translate-x-[3px]"
                        aria-hidden="true"
                      >
                        <path d="M1 7H12.5M12.5 7L8 2.5M12.5 7L8 11.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>

                    <p className="text-[13px] text-secondary/70 font-sans mt-2">
                      Submit your query — we respond within 24 hours.
                    </p>
                  </form>
                </ScrollReveal>
              )}
            </div>

            {/* Contact Details */}
            <div>
              <ScrollReveal>
                <p className="text-[11px] font-sans font-medium uppercase tracking-[0.3em] text-secondary mb-8">
                  Contact Details
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <div className="space-y-7 mb-12">
                  {/* Email */}
                  <div>
                    <p className="text-[12px] font-sans uppercase tracking-[0.15em] text-secondary mb-2">
                      Email
                    </p>
                    <a
                      href="mailto:info@arhamcapital.com"
                      className="text-[15px] font-sans text-foreground hover:text-bronze transition-colors duration-300"
                    >
                      info@arhamcapital.com
                    </a>
                  </div>

                  {/* Phone */}
                  <div>
                    <p className="text-[12px] font-sans uppercase tracking-[0.15em] text-secondary mb-2">
                      Phone
                    </p>
                    <div className="flex flex-col gap-1">
                      <a
                        href="tel:+91XXXXXXXXXX"
                        className="text-[15px] font-sans text-foreground hover:text-bronze transition-colors duration-300"
                      >
                        +91-XXXXXXXXXX
                        <span className="text-secondary text-[13px] ml-2">(India)</span>
                      </a>
                      <a
                        href="tel:+971XXXXXXXXXX"
                        className="text-[15px] font-sans text-foreground hover:text-bronze transition-colors duration-300"
                      >
                        +971-XXXXXXXXXX
                        <span className="text-secondary text-[13px] ml-2">(UAE)</span>
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div>
                    <p className="text-[12px] font-sans uppercase tracking-[0.15em] text-secondary mb-2">
                      Address
                    </p>
                    <p className="text-[15px] font-sans text-foreground leading-[1.7]">
                      Headquartered in Mumbai, India
                    </p>
                    <p className="text-[14px] font-sans text-secondary leading-[1.7]">
                      Offices in Dubai, UAE (coming soon)
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Social Links */}
              <ScrollReveal delay={0.2}>
                <div className="w-full h-[1px] bg-border/40 mb-8" />
                <p className="text-[12px] font-sans uppercase tracking-[0.15em] text-secondary mb-5">
                  Follow Us
                </p>
                <div className="flex items-center gap-6">
                  {/* LinkedIn */}
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2.5 text-[14px] font-sans text-foreground hover:text-bronze transition-colors duration-300"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    <span>LinkedIn</span>
                  </a>

                  {/* X (Twitter) */}
                  <a
                    href="https://x.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2.5 text-[14px] font-sans text-foreground hover:text-bronze transition-colors duration-300"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                    <span>X (Twitter)</span>
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Offices */}
        <section className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-surface-dark text-white">
          <div className="mx-auto max-w-[1360px]">
            <ScrollReveal>
              <p className="text-[11px] font-sans font-medium uppercase tracking-[0.3em] text-[#888] mb-5 text-center">
                Our Offices
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.15] text-white text-center mb-16">
                Where to <span className="text-bronze">Find Us</span>
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-[800px] mx-auto">
              {OFFICES.map((o, i) => (
                <ScrollReveal key={o.city} delay={i * 0.1}>
                  <div className="group p-8 border border-[#222] rounded-sm hover:border-bronze/30 transition-colors duration-400 text-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-bronze/50 mx-auto mb-5 group-hover:bg-bronze transition-colors duration-400" />
                    <h3 className="font-serif text-[20px] font-semibold text-white mb-2">
                      {o.city}
                    </h3>
                    <p className="text-[12px] font-sans uppercase tracking-[0.15em] text-bronze/70 mb-3">
                      {o.label}
                    </p>
                    <p className="text-[14px] leading-[1.65] text-[#888] font-sans">
                      {o.address}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
