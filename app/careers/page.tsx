"use client";

import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";
import JobCard from "../components/careers/JobCard";
import JobModal from "../components/careers/JobModal";
import { fetchJobs, type JobListing } from "../lib/sheets";

const WHY_WORK = [
  {
    title: "Competitive Compensation",
    description: "Competitive compensation and growth opportunities.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2L3 7V12C3 17.5 7 22 12 22C17 22 21 17.5 21 12V7L12 2Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
        <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Flexible Culture",
    description: "Flexible, remote-friendly culture.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.2" />
        <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Impactful Work",
    description: "Impactful work in sustainable sectors.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.2" />
        <path d="M12 2C14.5 5 16 8.5 16 12s-1.5 7-4 10M12 2C9.5 5 8 8.5 8 12s1.5 7 4 10M2 12h20" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    ),
  },
];

export default function CareersPage() {
  const [jobs, setJobs] = useState<JobListing[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedJob, setSelectedJob] = useState<JobListing | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    let cancelled = false;
    async function loadJobs() {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchJobs();
        if (!cancelled) {
          setJobs(data);
        }
      } catch (err) {
        if (!cancelled) {
          setError("Unable to load job listings. Please try again later.");
          console.error("Failed to fetch jobs:", err);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }
    loadJobs();
    return () => {
      cancelled = true;
    };
  }, []);

  const openModal = (job: JobListing) => {
    setSelectedJob(job);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    // Delay clearing job to allow exit animation
    setTimeout(() => setSelectedJob(null), 350);
  };

  return (
    <>
      <Navbar />

      <main className="flex-1">
        {/* ═══════════════════════════════════════
           HERO SECTION
           ═══════════════════════════════════════ */}
        <section className="pt-16 pb-24 sm:pb-32 px-6 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-[1360px]">
            <ScrollReveal>
              <p className="text-[11px] font-sans font-medium uppercase tracking-[0.3em] text-secondary mb-5">
                Careers
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="font-serif text-[clamp(2.5rem,5vw,4.2rem)] font-semibold leading-[1.1] tracking-[-0.015em] text-foreground mb-8 max-w-[750px]">
                Build the Future of
                <br />
                <span className="text-bronze">Responsible Capital</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-[17px] leading-[1.75] text-secondary max-w-[600px] font-sans">
                Join a team committed to disciplined investing, strategic
                advisory, and long-term value creation.
              </p>
            </ScrollReveal>
          </div>
        </section>

        <div className="hr-bronze mx-6 sm:mx-8 lg:mx-12" />

        {/* ═══════════════════════════════════════
           OPEN POSITIONS
           ═══════════════════════════════════════ */}
        <section className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-[1360px]">
            <ScrollReveal>
              <p className="text-[11px] font-sans font-medium uppercase tracking-[0.3em] text-secondary mb-5">
                Join Us
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.15] tracking-[-0.01em] text-foreground mb-16">
                Open <span className="text-bronze">Positions</span>
              </h2>
            </ScrollReveal>

            {/* Loading state */}
            {loading && (
              <ScrollReveal direction="fade">
                <div className="flex flex-col items-center justify-center py-20">
                  <div className="w-8 h-8 border-2 border-border/30 border-t-bronze rounded-full animate-spin mb-6" />
                  <p className="text-[14px] font-sans text-secondary">
                    Loading positions...
                  </p>
                </div>
              </ScrollReveal>
            )}

            {/* Error state */}
            {error && !loading && (
              <ScrollReveal direction="fade">
                <div className="text-center py-16 px-8 border border-border/30 rounded-sm">
                  <p className="text-[15px] font-sans text-secondary mb-4">
                    {error}
                  </p>
                  <button
                    onClick={() => window.location.reload()}
                    className="text-[12px] font-sans font-medium uppercase tracking-[0.14em] text-bronze hover:text-foreground transition-colors duration-300"
                  >
                    Try Again
                  </button>
                </div>
              </ScrollReveal>
            )}

            {/* Empty state */}
            {!loading && !error && jobs.length === 0 && (
              <ScrollReveal direction="scale">
                <div className="text-center py-20 px-8 border border-border/30 rounded-sm max-w-[560px] mx-auto">
                  <div className="w-12 h-12 rounded-full bg-bronze/10 mx-auto mb-6 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                      <circle cx="10" cy="10" r="8" stroke="#B08D57" strokeWidth="1.2" />
                      <path d="M10 6V10M10 13.5V14" stroke="#B08D57" strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-[22px] font-semibold text-foreground mb-3">
                    No current openings
                  </h3>
                  <p className="text-[15px] leading-[1.7] text-secondary font-sans mb-6">
                    We are always interested in exceptional talent.
                  </p>
                  <p className="text-[14px] font-sans text-secondary">
                    Please reach out at{" "}
                    <a
                      href="mailto:careers@arhamcapital.com"
                      className="text-bronze hover:text-foreground transition-colors duration-300"
                    >
                      careers@arhamcapital.com
                    </a>
                  </p>
                </div>
              </ScrollReveal>
            )}

            {/* Job cards grid */}
            {!loading && !error && jobs.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {jobs.map((job, i) => (
                  <JobCard
                    key={job.jobId || i}
                    job={job}
                    index={i}
                    onViewDetails={openModal}
                  />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ═══════════════════════════════════════
           WHY WORK WITH US
           ═══════════════════════════════════════ */}
        <section className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-surface-dark text-white">
          <div className="mx-auto max-w-[1360px]">
            <ScrollReveal>
              <p className="text-[11px] font-sans font-medium uppercase tracking-[0.3em] text-[#888] mb-5 text-center">
                Culture
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.15] text-white text-center mb-16">
                Why Work <span className="text-bronze">With Us</span>
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[960px] mx-auto">
              {WHY_WORK.map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 0.1}>
                  <div className="group text-center p-8 border border-[#222] rounded-sm hover:border-bronze/30 transition-all duration-400">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-[#333] text-[#999] group-hover:border-bronze group-hover:text-bronze transition-all duration-400 mb-6">
                      {item.icon}
                    </div>
                    <h3 className="font-serif text-[18px] font-semibold text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-[14px] leading-[1.7] text-[#777] font-sans">
                      {item.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
           CTA SECTION
           ═══════════════════════════════════════ */}
        <section className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-[1360px] text-center">
            <ScrollReveal>
              <div className="w-8 h-[1px] bg-bronze mx-auto mb-8 opacity-60" />
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="font-serif text-[clamp(1.8rem,3.5vw,2.8rem)] font-semibold leading-[1.2] text-foreground mb-4 max-w-[540px] mx-auto">
                Didn&rsquo;t Find the Right Role?
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="text-[15px] leading-[1.75] text-secondary font-sans max-w-[480px] mx-auto mb-10">
                We&rsquo;re always interested in exceptional talent and
                meaningful conversations.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <a
                href="mailto:careers@arhamcapital.com"
                className="group inline-flex items-center gap-2.5 bg-foreground text-background text-[12px] font-sans font-medium uppercase tracking-[0.14em] px-8 py-4 rounded-sm transition-all duration-500 ease-out hover:bg-bronze"
              >
                <span>Contact Us</span>
                <svg
                  width="14" height="14" viewBox="0 0 14 14" fill="none"
                  className="transition-transform duration-400 ease-out group-hover:translate-x-[3px]"
                  aria-hidden="true"
                >
                  <path d="M1 7H12.5M12.5 7L8 2.5M12.5 7L8 11.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />

      {/* Job Detail Modal */}
      <JobModal
        job={selectedJob}
        isOpen={modalOpen}
        onClose={closeModal}
      />
    </>
  );
}
