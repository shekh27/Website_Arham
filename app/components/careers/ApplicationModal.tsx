"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ───────────────────────────────────────────────
   Constants
   ─────────────────────────────────────────────── */

const WEBHOOK_URL =
  "https://script.google.com/macros/s/AKfycbzz1A8Acs5_9-g8yAbitcdrNWwC9KJzRuaJxjrCXUTiKzmt2LOODk1gVljCd1d7JEK1vA/exec";

const EXPERIENCE_OPTIONS = [
  "0-1 years",
  "1-2 years",
  "2-4 years",
  "4-6 years",
  "6-10 years",
  "10+ years",
];

const NOTICE_OPTIONS = [
  "Immediate",
  "15 Days",
  "30 Days",
  "60 Days",
  "90 Days",
];

const ALLOWED_EXTENSIONS = [".pdf", ".doc", ".docx"];
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

/* ───────────────────────────────────────────────
   Types
   ─────────────────────────────────────────────── */

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  jobId: string;
  jobTitle: string;
}

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  currentLocation: string;
  totalExperience: string;
  linkedinUrl: string;
  currentCompany: string;
  currentCtc: string;
  expectedCtc: string;
  noticePeriod: string;
  additionalComments: string;
}

const initialFormData: FormData = {
  fullName: "",
  email: "",
  phone: "",
  currentLocation: "",
  totalExperience: "",
  linkedinUrl: "",
  currentCompany: "",
  currentCtc: "",
  expectedCtc: "",
  noticePeriod: "",
  additionalComments: "",
};

/* ───────────────────────────────────────────────
   Shared UI Components
   ─────────────────────────────────────────────── */

function InputField({
  label,
  required,
  ...props
}: {
  label: string;
  required?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="block text-[11px] font-sans font-medium uppercase tracking-[0.18em] text-secondary mb-2">
        {label}
        {required && <span className="text-bronze ml-1">*</span>}
      </label>
      <input
        {...props}
        className="w-full px-4 py-3 bg-transparent border border-border/50 rounded-sm text-[14px] font-sans text-foreground placeholder:text-border focus:outline-none focus:border-bronze/60 transition-colors duration-300"
      />
    </div>
  );
}

function SelectField({
  label,
  required,
  options,
  ...props
}: {
  label: string;
  required?: boolean;
  options: string[];
} & React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <div>
      <label className="block text-[11px] font-sans font-medium uppercase tracking-[0.18em] text-secondary mb-2">
        {label}
        {required && <span className="text-bronze ml-1">*</span>}
      </label>
      <select
        {...props}
        className="w-full px-4 py-3 bg-transparent border border-border/50 rounded-sm text-[14px] font-sans text-foreground focus:outline-none focus:border-bronze/60 transition-colors duration-300 appearance-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L5 5L9 1' stroke='%23888' stroke-width='1.2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 14px center",
        }}
      >
        <option value="" className="bg-background">
          Select...
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt} className="bg-background">
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

/* ───────────────────────────────────────────────
   Toast Component
   ─────────────────────────────────────────────── */

function Toast({
  message,
  type,
  onDone,
}: {
  message: string;
  type: "success" | "error";
  onDone: () => void;
}) {
  useEffect(() => {
    const t = setTimeout(onDone, 4000);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
      className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-[80] px-6 py-4 rounded-sm shadow-xl text-[13px] font-sans font-medium max-w-[440px] w-[90%] text-center ${
        type === "success"
          ? "bg-foreground text-background"
          : "bg-red-900/90 text-white"
      }`}
    >
      {message}
    </motion.div>
  );
}

/* ───────────────────────────────────────────────
   Main Component
   ─────────────────────────────────────────────── */

export default function ApplicationModal({
  isOpen,
  onClose,
  jobId,
  jobTitle,
}: ApplicationModalProps) {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

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

  // Close on ESC (only when not submitting)
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape" && !submitting) onClose();
    },
    [onClose, submitting]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen, handleKeyDown]);

  // Update form field
  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // File validation
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileError("");
    const file = e.target.files?.[0];
    if (!file) {
      setResumeFile(null);
      return;
    }

    const ext = "." + file.name.split(".").pop()?.toLowerCase();
    if (!ALLOWED_EXTENSIONS.includes(ext)) {
      setFileError("Only PDF, DOC, and DOCX files are allowed.");
      setResumeFile(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      setFileError("File size must be under 5MB.");
      setResumeFile(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
      return;
    }

    setResumeFile(file);
  };

  // Check required fields
  const isValid =
    formData.fullName.trim() &&
    formData.email.trim() &&
    formData.phone.trim() &&
    formData.currentLocation.trim() &&
    formData.totalExperience &&
    resumeFile;

  // Submit
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isValid || submitting) return;

    const form = e.currentTarget;
    const selectedResumeFile = form.querySelector<HTMLInputElement>('input[type="file"]')?.files?.[0];

    if (!selectedResumeFile) {
      setFileError("Please select a resume file.");
      return;
    }

    const ext = "." + selectedResumeFile.name.split(".").pop()?.toLowerCase();
    if (!ALLOWED_EXTENSIONS.includes(ext)) {
      setFileError("Only PDF, DOC, and DOCX files are allowed.");
      return;
    }

    if (selectedResumeFile.size > MAX_FILE_SIZE) {
      setFileError("File size must be under 5MB.");
      return;
    }

    setSubmitting(true);
    setFileError("");
    try {
      const base64 = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve((reader.result as string).split(',')[1]);
        reader.onerror = reject;
        reader.readAsDataURL(selectedResumeFile);
      });

      const payload = {
        formData: {
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          currentLocation: formData.currentLocation,
          totalExperience: formData.totalExperience,
          linkedinUrl: formData.linkedinUrl,
          currentCompany: formData.currentCompany,
          currentCtc: formData.currentCtc,
          expectedCtc: formData.expectedCtc,
          noticePeriod: formData.noticePeriod,
          additionalComments: formData.additionalComments,
          jobApplied: jobId,
        },
        resumeName: selectedResumeFile.name,
        resumeType: selectedResumeFile.type,
        resumeBase64: base64
      };

      console.log("Payload size:", JSON.stringify(payload).length);

      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        mode: "cors",
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        let errMsg = "Submission failed. Please try again.";
        try {
          const data = await res.json();
          if (data?.error) errMsg = data.error;
        } catch {
          // use default error
        }
        throw new Error(errMsg);
      }

      // Success
      setToast({
        message: "Application submitted successfully.",
        type: "success",
      });
      setFormData(initialFormData);
      setResumeFile(null);
      if (fileInputRef.current) fileInputRef.current.value = "";

      setTimeout(() => {
        onClose();
      }, 1200);
    } catch (err) {
      setToast({
        message:
          err instanceof Error
            ? err.message
            : "Submission failed. Please try again.",
        type: "error",
      });
    } finally {
      setSubmitting(false);
    }
  };

  // Reset on close
  useEffect(() => {
    if (!isOpen) {
      // Delay reset to allow exit animation
      const t = setTimeout(() => {
        setFormData(initialFormData);
        setResumeFile(null);
        setFileError("");
        if (fileInputRef.current) fileInputRef.current.value = "";
      }, 400);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="app-modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[70] bg-foreground/60 backdrop-blur-sm"
              onClick={submitting ? undefined : onClose}
              aria-hidden="true"
            />

            {/* Modal */}
            <motion.div
              key="app-modal-content"
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] as const }}
              className="fixed inset-0 z-[71] flex items-center justify-center p-4 sm:p-6"
              role="dialog"
              aria-modal="true"
              aria-labelledby="app-modal-title"
            >
              <div
                className="relative w-full max-w-[640px] max-h-[92vh] bg-background rounded-sm shadow-2xl overflow-hidden flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header */}
                <div className="px-6 sm:px-8 pt-7 pb-5 border-b border-border/30 shrink-0">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="w-8 h-[1.5px] bg-bronze mb-3" />
                      <h2
                        id="app-modal-title"
                        className="font-serif text-[clamp(1.2rem,3vw,1.5rem)] font-semibold text-foreground leading-[1.3] tracking-[-0.01em] mb-1"
                      >
                        Apply for Position
                      </h2>
                      <p className="text-[13px] font-sans text-secondary">
                        {jobTitle}{" "}
                        <span className="text-bronze/70">({jobId})</span>
                      </p>
                    </div>

                    {/* Close */}
                    <button
                      onClick={submitting ? undefined : onClose}
                      disabled={submitting}
                      className="shrink-0 w-9 h-9 flex items-center justify-center rounded-full border border-border/40 text-secondary hover:text-foreground hover:border-foreground/30 transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
                      aria-label="Close modal"
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 14 14"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M1 1L13 13M13 1L1 13"
                          stroke="currentColor"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Scrollable form body */}
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col flex-1 overflow-hidden"
                >
                  <div className="px-6 sm:px-8 py-6 overflow-y-auto flex-1 space-y-5">
                    {/* ── Required Fields ── */}
                    <p className="text-[10px] font-sans font-medium uppercase tracking-[0.25em] text-secondary/60 mb-1">
                      Required Information
                    </p>

                    <InputField
                      label="Full Name"
                      required
                      type="text"
                      placeholder="Your full name"
                      value={formData.fullName}
                      onChange={(e) => updateField("fullName", e.target.value)}
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <InputField
                        label="Email"
                        required
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => updateField("email", e.target.value)}
                      />
                      <InputField
                        label="Phone Number"
                        required
                        type="tel"
                        placeholder="+91-XXXXXXXXXX"
                        value={formData.phone}
                        onChange={(e) => updateField("phone", e.target.value)}
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <InputField
                        label="Current Location"
                        required
                        type="text"
                        placeholder="City, Country"
                        value={formData.currentLocation}
                        onChange={(e) =>
                          updateField("currentLocation", e.target.value)
                        }
                      />
                      <SelectField
                        label="Total Experience"
                        required
                        options={EXPERIENCE_OPTIONS}
                        value={formData.totalExperience}
                        onChange={(e) =>
                          updateField("totalExperience", e.target.value)
                        }
                      />
                    </div>

                    {/* Resume upload */}
                    <div>
                      <label className="block text-[11px] font-sans font-medium uppercase tracking-[0.18em] text-secondary mb-2">
                        Resume Upload
                        <span className="text-bronze ml-1">*</span>
                      </label>
                      <div className="relative border border-border/50 rounded-sm px-4 py-3 hover:border-bronze/40 transition-colors duration-300">
                        <input
                          ref={fileInputRef}
                          name="resume"
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                          className="w-full text-[13px] font-sans text-foreground file:mr-4 file:py-1 file:px-3 file:rounded-sm file:border file:border-border/40 file:text-[11px] file:font-sans file:font-medium file:uppercase file:tracking-[0.1em] file:bg-transparent file:text-secondary file:cursor-pointer hover:file:border-bronze/50 hover:file:text-foreground file:transition-all file:duration-300"
                        />
                      </div>
                      <p className="text-[11px] font-sans text-secondary/50 mt-1.5">
                        PDF, DOC, DOCX — Max 5MB
                      </p>
                      {fileError && (
                        <p className="text-[12px] font-sans text-red-500 mt-1">
                          {fileError}
                        </p>
                      )}
                    </div>

                    {/* ── Divider ── */}
                    <div className="pt-2 pb-1">
                      <div className="h-[1px] bg-border/30" />
                    </div>

                    {/* ── Optional Fields ── */}
                    <p className="text-[10px] font-sans font-medium uppercase tracking-[0.25em] text-secondary/60 mb-1">
                      Optional Information
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <InputField
                        label="LinkedIn URL"
                        type="url"
                        placeholder="linkedin.com/in/..."
                        value={formData.linkedinUrl}
                        onChange={(e) =>
                          updateField("linkedinUrl", e.target.value)
                        }
                      />
                      <InputField
                        label="Current Company"
                        type="text"
                        placeholder="Company name"
                        value={formData.currentCompany}
                        onChange={(e) =>
                          updateField("currentCompany", e.target.value)
                        }
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <InputField
                        label="Current CTC"
                        type="text"
                        placeholder="e.g. 12 LPA"
                        value={formData.currentCtc}
                        onChange={(e) =>
                          updateField("currentCtc", e.target.value)
                        }
                      />
                      <InputField
                        label="Expected CTC"
                        type="text"
                        placeholder="e.g. 18 LPA"
                        value={formData.expectedCtc}
                        onChange={(e) =>
                          updateField("expectedCtc", e.target.value)
                        }
                      />
                    </div>

                    <SelectField
                      label="Notice Period"
                      options={NOTICE_OPTIONS}
                      value={formData.noticePeriod}
                      onChange={(e) =>
                        updateField("noticePeriod", e.target.value)
                      }
                    />

                    <div>
                      <label className="block text-[11px] font-sans font-medium uppercase tracking-[0.18em] text-secondary mb-2">
                        Additional Comments
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Anything else you'd like us to know..."
                        value={formData.additionalComments}
                        onChange={(e) =>
                          updateField("additionalComments", e.target.value)
                        }
                        className="w-full px-4 py-3 bg-transparent border border-border/50 rounded-sm text-[14px] font-sans text-foreground placeholder:text-border focus:outline-none focus:border-bronze/60 transition-colors duration-300 resize-none"
                      />
                    </div>
                  </div>

                  {/* Footer: Submit */}
                  <div className="px-6 sm:px-8 py-5 border-t border-border/30 shrink-0 bg-background">
                    <button
                      type="submit"
                      disabled={!isValid || submitting}
                      className="group inline-flex items-center justify-center gap-2.5 w-full bg-foreground text-background text-[12px] font-sans font-medium uppercase tracking-[0.14em] px-8 py-4 rounded-sm transition-all duration-500 ease-out hover:bg-bronze disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-foreground"
                    >
                      {submitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                          <span>Submitting...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Application</span>
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
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
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Toast notification */}
      <AnimatePresence>
        {toast && (
          <Toast
            message={toast.message}
            type={toast.type}
            onDone={() => setToast(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
