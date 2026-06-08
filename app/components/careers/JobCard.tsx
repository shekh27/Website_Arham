"use client";

import { type JobListing } from "@/app/lib/sheets";
import ScrollReveal from "@/app/components/ScrollReveal";

interface JobCardProps {
  job: JobListing;
  index: number;
  onViewDetails: (job: JobListing) => void;
}

export default function JobCard({ job, index, onViewDetails }: JobCardProps) {
  return (
    <ScrollReveal delay={index * 0.08}>
      <div className="group relative p-7 lg:p-8 border border-border/40 rounded-sm bg-surface-elevated/50 card-lift h-full flex flex-col">
        {/* Bronze accent */}
        <div className="w-8 h-[1.5px] bg-bronze mb-6 transition-all duration-500 group-hover:w-14 origin-left" />

        {/* Job title */}
        <h3 className="font-serif text-[20px] font-semibold text-foreground mb-3 tracking-[-0.01em] leading-[1.3]">
          {job.jobTitle}
        </h3>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          <span className="inline-flex items-center px-3 py-1 text-[11px] font-sans font-medium uppercase tracking-[0.1em] text-bronze bg-bronze/8 rounded-sm">
            {job.department}
          </span>
          <span className="inline-flex items-center px-3 py-1 text-[11px] font-sans font-medium uppercase tracking-[0.1em] text-secondary bg-border/20 rounded-sm">
            {job.employmentType}
          </span>
        </div>

        {/* Meta info */}
        <div className="space-y-2 mb-6 flex-1">
          <div className="flex items-center gap-2.5 text-[13px] font-sans text-secondary">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-secondary/50 shrink-0" aria-hidden="true">
              <path d="M7 1C4.24 1 2 3.24 2 6c0 3.75 5 7 5 7s5-3.25 5-7c0-2.76-2.24-5-5-5z" stroke="currentColor" strokeWidth="1" />
              <circle cx="7" cy="6" r="1.5" stroke="currentColor" strokeWidth="1" />
            </svg>
            <span>{job.location}</span>
          </div>
          <div className="flex items-center gap-2.5 text-[13px] font-sans text-secondary">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-secondary/50 shrink-0" aria-hidden="true">
              <rect x="1.5" y="3" width="11" height="9" rx="1" stroke="currentColor" strokeWidth="1" />
              <path d="M1.5 6.5h11M4.5 1.5v3M9.5 1.5v3" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
            </svg>
            <span>{job.experience}</span>
          </div>
        </div>

        {/* View Details button */}
        <button
          onClick={() => onViewDetails(job)}
          className="inline-flex items-center gap-2 text-[12px] font-sans font-medium uppercase tracking-[0.12em] text-foreground transition-colors duration-400 hover:text-bronze group/btn"
        >
          <span>View Details</span>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="transition-transform duration-300 group-hover/btn:translate-x-1" aria-hidden="true">
            <path d="M1 6H10.5M10.5 6L7 2.5M10.5 6L7 9.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </ScrollReveal>
  );
}
