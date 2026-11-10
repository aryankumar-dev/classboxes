import { technologies } from "./site";

// Field definitions for every form on the site. Rendered by components/forms/LeadForm.
export type Field = {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "number" | "textarea" | "select";
  required?: boolean;
  options?: string[];
  /** Spans both columns on wide screens. */
  full?: boolean;
};

export const contactFields: Field[] = [
  { name: "name", label: "Your Name", type: "text", required: true },
  { name: "email", label: "Your Email Address", type: "email", required: true },
  { name: "subject", label: "Enter your Subject", type: "text", full: true },
  { name: "message", label: "Enter your message", type: "textarea", required: true, full: true },
];

export const requirementFields: Field[] = [
  { name: "name", label: "Your Name", type: "text", required: true },
  { name: "company", label: "Company Name", type: "text", required: true },
  { name: "email", label: "Work Email Address", type: "email", required: true },
  { name: "phone", label: "Phone Number", type: "tel" },
  { name: "role", label: "Role / Job Title", type: "text", required: true },
  { name: "positions", label: "Number of Positions", type: "number" },
  {
    name: "type",
    label: "Engagement Type",
    type: "select",
    options: ["Contract", "Contract-to-hire", "Full-time", "Not sure yet"],
    full: true,
  },
  { name: "message", label: "Describe the skills and experience you need", type: "textarea", required: true, full: true },
];

export const skillTestFields: Field[] = [
  { name: "name", label: "Your Name", type: "text", required: true },
  { name: "email", label: "Your Email Address", type: "email", required: true },
  { name: "phone", label: "Phone Number", type: "tel" },
  { name: "experience", label: "Years of Experience", type: "select", options: ["0–1", "1–3", "3–5", "5–8", "8+"] },
  { name: "technology", label: "Technology to be tested on", type: "select", options: [...technologies, "Other"], required: true, full: true },
  { name: "message", label: "Anything we should know? (optional)", type: "textarea", full: true },
];
