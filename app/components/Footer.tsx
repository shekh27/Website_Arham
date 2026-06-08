"use client";

import Link from "next/link";
import Image from "next/image";

const FOOTER_NAV = {
  services: [
    { label: "Strategic Advisory", href: "/services#advisory" },
    { label: "Wealth Management", href: "/services#wealth" },
    { label: "Capital Markets", href: "/services#capital" },
    { label: "Research & Insights", href: "/services#research" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Leadership", href: "/about#leadership" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
};

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="text-[11px] font-sans font-semibold uppercase tracking-[0.25em] text-[#999] mb-6">
      {children}
    </h4>
  );
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <Link
        href={href}
        className="text-[14px] font-sans text-[#888] transition-colors duration-300 hover:text-white"
      >
        {label}
      </Link>
    </li>
  );
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-surface-dark text-white" role="contentinfo">
      {/* Bronze accent line */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-bronze to-transparent opacity-40" />

      <div className="mx-auto max-w-[1360px] px-6 sm:px-8 lg:px-12">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 py-20">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-5">
              <Image
                src="/logo.png"
                alt="Arham Capital"
                width={160}
                height={44}
                className="h-[38px] w-auto object-contain brightness-0 invert"
              />
            </Link>

            {/* Tagline */}
            <p className="font-serif text-[15px] italic text-bronze/80 mb-6 leading-[1.5]">
              Ascend Ethically, With Conscience.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-5 mb-8">
              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#666] hover:text-white transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>

              {/* X (Twitter) */}
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#666] hover:text-white transition-colors duration-300"
                aria-label="X (Twitter)"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* Email */}
              <a
                href="mailto:info@arhamcapital.com"
                className="text-[#666] hover:text-white transition-colors duration-300"
                aria-label="Email"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 7L13.03 12.7C12.7 12.9 12.3 12.9 11.97 12.7L2 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services column */}
          <div>
            <FooterHeading>Services</FooterHeading>
            <ul className="space-y-3">
              {FOOTER_NAV.services.map((link) => (
                <FooterLink key={link.href} {...link} />
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <FooterHeading>Company</FooterHeading>
            <ul className="space-y-3">
              {FOOTER_NAV.company.map((link) => (
                <FooterLink key={link.href} {...link} />
              ))}
            </ul>
          </div>

          {/* Contact Details column */}
          <div>
            <FooterHeading>Contact Details</FooterHeading>

            {/* Email */}
            <div className="mb-5">
              <p className="text-[11px] font-sans uppercase tracking-[0.15em] text-[#666] mb-1.5">Email</p>
              <a
                href="mailto:info@arhamcapital.com"
                className="text-[14px] font-sans text-[#888] hover:text-white transition-colors duration-300"
              >
                info@arhamcapital.com
              </a>
            </div>

            {/* Phone */}
            <div className="mb-5">
              <p className="text-[11px] font-sans uppercase tracking-[0.15em] text-[#666] mb-1.5">Phone</p>
              <div className="space-y-1">
                <a
                  href="tel:+91XXXXXXXXXX"
                  className="text-[14px] font-sans text-[#888] hover:text-white transition-colors duration-300 block"
                >
                  +91-XXXXXXXXXX <span className="text-[#555]">(India)</span>
                </a>
                <a
                  href="tel:+971XXXXXXXXXX"
                  className="text-[14px] font-sans text-[#888] hover:text-white transition-colors duration-300 block"
                >
                  +971-XXXXXXXXXX <span className="text-[#555]">(UAE)</span>
                </a>
              </div>
            </div>

            {/* Address */}
            <div>
              <p className="text-[11px] font-sans uppercase tracking-[0.15em] text-[#666] mb-1.5">Address</p>
              <p className="text-[14px] font-sans text-[#888] leading-[1.7]">
                Headquartered in Mumbai, India
              </p>
              <p className="text-[13px] font-sans text-[#666] leading-[1.7]">
                Offices in Dubai, UAE (coming soon)
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#222] py-8 flex flex-col sm:flex-row items-center justify-between gap-5">
          {/* Copyright */}
          <p className="text-[12px] text-[#555] tracking-[0.04em]">
            © 2026 Arham Capital. All Rights Reserved.
          </p>

          {/* Legal links */}
          <div className="flex items-center gap-6">
            {[
              { label: "Privacy Policy", href: "/privacy" },
              { label: "Terms of Service", href: "/terms" },
              { label: "Sitemap", href: "/sitemap" },
            ].map((link, i) => (
              <span key={link.href} className="flex items-center gap-6">
                <Link
                  href={link.href}
                  className="text-[12px] font-sans text-[#555] hover:text-white transition-colors duration-300 tracking-[0.04em]"
                >
                  {link.label}
                </Link>
                {i < 2 && (
                  <span className="text-[#333]" aria-hidden="true">|</span>
                )}
              </span>
            ))}
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-[12px] font-sans uppercase tracking-[0.14em] text-[#555] transition-colors duration-300 hover:text-white"
            aria-label="Scroll to top"
          >
            <span>Back to Top</span>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              className="transition-transform duration-300 group-hover:-translate-y-1"
              aria-hidden="true"
            >
              <path
                d="M6 10V2M6 2L2 6M6 2L10 6"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
