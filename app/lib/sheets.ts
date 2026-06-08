/* ───────────────────────────────────────────────
   Google Sheets Data Fetcher
   Fetches and parses public Google Sheets CSV data
   ─────────────────────────────────────────────── */

export interface JobListing {
  jobId: string;
  jobTitle: string;
  department: string;
  employmentType: string;
  location: string;
  experience: string;
  qualifications: string;
  responsibilities: string;
  salaryRange: string;
  applicationEmail: string;
  status: string;
  postedDate: string;
  displayOrder: number;
}

const SHEET_ID = "1whqg0HuUxg7fGUJomvlR8Ab3u-IkE3pzlBmo8OztLKo";
const CSV_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv`;

/**
 * Parse a CSV line respecting quoted fields
 */
function parseCSVLine(line: string): string[] {
  const result: string[] = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (char === '"') {
      if (inQuotes && i + 1 < line.length && line[i + 1] === '"') {
        current += '"';
        i++; // skip escaped quote
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === "," && !inQuotes) {
      result.push(current.trim());
      current = "";
    } else {
      current += char;
    }
  }
  result.push(current.trim());
  return result;
}

/**
 * Fetch jobs from Google Sheets, filter open ones, sort by display order
 */
export async function fetchJobs(): Promise<JobListing[]> {
  const response = await fetch(CSV_URL, { cache: "no-store" });
  if (!response.ok) {
    throw new Error(`Failed to fetch sheet data: ${response.status}`);
  }

  const csvText = await response.text();
  const lines = csvText.split("\n").filter((line) => line.trim() !== "");

  if (lines.length < 2) return []; // header only or empty

  // Skip header row (index 0)
  const dataRows = lines.slice(1);

  const jobs: JobListing[] = [];

  for (const line of dataRows) {
    const cols = parseCSVLine(line);
    if (cols.length < 13) continue; // skip malformed rows

    const status = (cols[10] || "").trim();

    // Only include "Open" status
    if (status.toLowerCase() !== "open") continue;

    jobs.push({
      jobId: (cols[0] || "").trim(),
      jobTitle: (cols[1] || "").trim(),
      department: (cols[2] || "").trim(),
      employmentType: (cols[3] || "").trim(),
      location: (cols[4] || "").trim(),
      experience: (cols[5] || "").trim(),
      qualifications: (cols[6] || "").trim(),
      responsibilities: (cols[7] || "").trim(),
      salaryRange: (cols[8] || "").trim(),
      applicationEmail: (cols[9] || "").trim(),
      status,
      postedDate: (cols[11] || "").trim(),
      displayOrder: parseInt(cols[12] || "999", 10) || 999,
    });
  }

  // Sort by display order ascending
  jobs.sort((a, b) => a.displayOrder - b.displayOrder);

  return jobs;
}
