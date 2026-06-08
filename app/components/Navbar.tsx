"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/* ───────────────────────────────────────────────
   Configuration
   ─────────────────────────────────────────────── */

const NAV_ITEMS = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Markets", href: "/markets" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
] as const;

const SCROLL_THRESHOLD = 20;

/* ───────────────────────────────────────────────
   Sub-components
   ─────────────────────────────────────────────── */

/** Brand logo using actual logo image */
function LogoMark() {
  return (
    <Link href="/" aria-label="Arham Capital — Home" className="group flex items-center">
      <Image
        src="/logo.png"
        alt="Arham Capital"
        width={180}
        height={50}
        className="h-[42px] w-auto object-contain"
        priority
      />
    </Link>
  );
}

/** Desktop navigation link with underline hover */
function NavLink({ label, href }: { label: string; href: string }) {
  return (
    <Link
      href={href}
      className="relative px-1 py-2 text-[13px] font-sans font-medium uppercase tracking-[0.12em] text-secondary transition-colors duration-400 hover:text-foreground group"
    >
      <span>{label}</span>
      <span className="absolute bottom-0 left-1 right-1 h-[1px] bg-bronze origin-left scale-x-0 transition-transform duration-400 ease-out group-hover:scale-x-100" />
    </Link>
  );
}

/** CTA button with premium hover */
function CTAButton({ mobile = false }: { mobile?: boolean }) {
  return (
    <Link
      href="/contact"
      className={`
        group inline-flex items-center justify-center gap-2.5
        bg-foreground text-background
        text-[12px] font-sans font-medium uppercase tracking-[0.14em]
        transition-all duration-500 ease-out
        hover:bg-bronze
        focus-visible:ring-2 focus-visible:ring-bronze focus-visible:ring-offset-2 focus-visible:ring-offset-background
        ${mobile
          ? "px-10 py-4 rounded-sm"
          : "px-7 py-3 rounded-sm"
        }
      `}
    >
      <span>Contact Us</span>
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-400 ease-out group-hover:translate-x-[3px]"
        aria-hidden="true"
      >
        <path
          d="M1 7H12.5M12.5 7L8 2.5M12.5 7L8 11.5"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
}

/** Hamburger / Close icon with morphing animation */
function MenuToggle({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="relative z-50 flex items-center justify-center w-11 h-11 -mr-2 lg:hidden"
      aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
      aria-expanded={isOpen}
    >
      <div className="relative w-[22px] h-[14px]">
        <span
          className={`absolute left-0 right-0 h-[1.5px] bg-foreground transition-all duration-400 ease-out ${
            isOpen
              ? "top-1/2 -translate-y-1/2 rotate-45"
              : "top-0"
          }`}
        />
        <span
          className={`absolute left-0 right-0 h-[1.5px] bg-foreground transition-all duration-400 ease-out ${
            isOpen
              ? "opacity-0"
              : "top-1/2 -translate-y-1/2 opacity-100"
          }`}
        />
        <span
          className={`absolute left-0 right-0 h-[1.5px] bg-foreground transition-all duration-400 ease-out ${
            isOpen
              ? "top-1/2 -translate-y-1/2 -rotate-45"
              : "bottom-0"
          }`}
        />
      </div>
    </button>
  );
}

/* ───────────────────────────────────────────────
   Mobile Overlay
   ─────────────────────────────────────────────── */

function MobileOverlay({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
        when: "beforeChildren" as const,
        staggerChildren: 0.06,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.35,
        ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
        when: "afterChildren" as const,
        staggerChildren: 0.03,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.25,
        ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="mobile-overlay"
          className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-background"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Subtle decorative line */}
          <motion.div
            className="absolute top-[88px] left-8 right-8 h-[1px] bg-border opacity-40"
            variants={itemVariants}
          />

          {/* Navigation items */}
          <nav className="flex flex-col items-center gap-8" aria-label="Mobile navigation">
            {NAV_ITEMS.map((item) => (
              <motion.div key={item.href} variants={itemVariants}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="text-[15px] font-sans font-medium uppercase tracking-[0.2em] text-foreground transition-colors duration-400 hover:text-bronze"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}

            {/* CTA in mobile menu */}
            <motion.div variants={itemVariants} className="mt-6">
              <CTAButton mobile />
            </motion.div>
          </nav>

          {/* Bottom decorative accent */}
          <motion.div
            className="absolute bottom-12 flex flex-col items-center gap-3"
            variants={itemVariants}
          >
            <div className="w-6 h-[1px] bg-bronze opacity-40" />
            <span className="text-[10px] font-sans tracking-[0.3em] text-secondary uppercase">
              Arham Capital
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ───────────────────────────────────────────────
   Main Navbar Component
   ─────────────────────────────────────────────── */

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial state
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-500 ease-out
          ${isScrolled
            ? "bg-background/92 backdrop-blur-md border-b border-border/50 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
            : "bg-background/60 backdrop-blur-sm border-b border-transparent"
          }
        `}
        role="banner"
      >
        <div className="mx-auto max-w-[1360px] px-6 sm:px-8 lg:px-12">
          <nav
            className="flex items-center justify-between h-[88px]"
            aria-label="Primary navigation"
          >
            {/* Left — Logo */}
            <LogoMark />

            {/* Center / Right — Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-10">
              {NAV_ITEMS.map((item) => (
                <NavLink key={item.href} label={item.label} href={item.href} />
              ))}
            </div>

            {/* Far Right — CTA + Mobile Toggle */}
            <div className="flex items-center gap-4">
              <div className="hidden lg:block">
                <CTAButton />
              </div>
              <MenuToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              />
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Overlay */}
      <MobileOverlay
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="h-[88px]" aria-hidden="true" />
    </>
  );
}
