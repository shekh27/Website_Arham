"use client";

import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { type JobListing } from "@/app/lib/sheets";

interface JobModalProps {
  job: JobListing | null;
  isOpen: boolean;
  onClose: () => void;
  onApply: (job: JobListing) => void;
}

function DetailRow({ label, value }: { label: string; value: string }) {
  if (!value) return null;
  return (
    <div className="py-4 border-b border-border/30 last:border-b-0">
      <p className="text-[11px] font-sans font-medium uppercase tracking-[0.2em] text-secondary mb-1.5">
        {label}
      </p>
      <p className="text-[14px] font-sans text-foreground leading-[1.7] whitespace-pre-line">
        {value}
      </p>
    </div>
  );
}

export default function JobModal({ job, isOpen, onClose, onApply }: JobModalProps) {
  // Lock body scroll
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

  // Close on escape key
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen, handleKeyDown]);

  return (
    <AnimatePresence>
      {isOpen && job && (
        <>
          {/* Backdrop */}
          <motion.div
            key="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-foreground/60 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Modal */}
          <motion.div
            key="modal-content"
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed inset-0 z-[61] flex items-center justify-center p-4 sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby="job-modal-title"
          >
            <div
              className="relative w-full max-w-[640px] max-h-[90vh] bg-background rounded-sm shadow-2xl overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="px-8 pt-8 pb-6 border-b border-border/30 shrink-0">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    {/* Bronze accent */}
                    <div className="w-8 h-[1.5px] bg-bronze mb-4" />
                    <h2
                      id="job-modal-title"
                      className="font-serif text-[clamp(1.4rem,3vw,1.8rem)] font-semibold text-foreground leading-[1.25] tracking-[-0.01em] mb-2"
                    >
                      {job.jobTitle}
                    </h2>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="inline-flex items-center px-3 py-1 text-[11px] font-sans font-medium uppercase tracking-[0.1em] text-bronze bg-bronze/8 rounded-sm">
                        {job.department}
                      </span>
                      <span className="inline-flex items-center px-3 py-1 text-[11px] font-sans font-medium uppercase tracking-[0.1em] text-secondary bg-border/20 rounded-sm">
                        {job.employmentType}
                      </span>
                    </div>
                  </div>

                  {/* Close button */}
                  <button
                    onClick={onClose}
                    className="shrink-0 w-10 h-10 flex items-center justify-center rounded-full border border-border/40 text-secondary hover:text-foreground hover:border-foreground/30 transition-all duration-300"
                    aria-label="Close modal"
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Scrollable body */}
              <div className="px-8 py-6 overflow-y-auto flex-1">
                <DetailRow label="Location" value={job.location} />
                <DetailRow label="Experience" value={job.experience} />
                <DetailRow label="Qualifications" value={job.qualifications} />
                <DetailRow label="Responsibilities" value={job.responsibilities} />
                <DetailRow label="Salary Range" value={job.salaryRange} />
                <DetailRow label="Posted Date" value={job.postedDate} />
              </div>

              {/* Footer with Apply Now */}
              <div className="px-8 py-6 border-t border-border/30 shrink-0 bg-background">
                <button
                  onClick={() => job && onApply(job)}
                  className="group inline-flex items-center justify-center gap-2.5 w-full bg-foreground text-background text-[12px] font-sans font-medium uppercase tracking-[0.14em] px-8 py-4 rounded-sm transition-all duration-500 ease-out hover:bg-bronze"
                >
                  <span>Apply Now</span>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform duration-400 ease-out group-hover:translate-x-[3px]" aria-hidden="true">
                    <path d="M1 7H12.5M12.5 7L8 2.5M12.5 7L8 11.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
