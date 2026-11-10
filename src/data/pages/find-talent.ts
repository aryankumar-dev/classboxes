export const findTalentPage = {
  hero: {
    eyebrow: "For employers",
    titleRed: "Hire Right Staff",
    titleNavy: "For Your Team",
    text: "We source, screen and supply job-ready candidates so you can build the team you need — faster and with less risk.",
  },
  intro: {
    eyebrow: "Staffing solutions",
    titleRed: "A recruitment partner",
    titleNavy: "that knows your industry",
    paragraphs: [
      "ClassBoxes is a recruitment company in New Jersey, USA that sources, screens and supplies job candidates to companies. We work with businesses across industries to understand their staffing needs.",
      "Our recruiters bring real industry expertise and offer customised staffing solutions — every candidate we put forward has been assessed for the skills your role needs.",
    ],
    points: ["Pre-screened & skill-tested", "Contract, contract-to-hire and full-time", "Dedicated account manager"],
  },
  services: {
    eyebrow: "How we hire for you",
    titleRed: "Staffing models",
    titleNavy: "that fit your plan",
    cards: [
      { icon: "clock", title: "Contract Staffing", text: "Skilled professionals for projects and peak workloads, on your timeline." },
      { icon: "repeat", title: "Contract-to-Hire", text: "Try the fit before you commit — convert to full-time when you're ready." },
      { icon: "badge", title: "Full-time Hiring", text: "Permanent hires, pre-screened and skill-tested before they reach you." },
      { icon: "users", title: "Team Scaling", text: "Build out a whole team quickly with a dedicated account manager." },
    ],
  },
  process: {
    eyebrow: "Simple process",
    titleRed: "From requirement",
    titleNavy: "to hire",
    steps: [
      { title: "Share your requirement", text: "Tell us about the role, skills and timeline." },
      { title: "We shortlist", text: "Pre-assessed candidates matched to your needs." },
      { title: "You interview", text: "Meet the shortlist — we handle the scheduling." },
      { title: "Hire & onboard", text: "We support you until the fit is right." },
    ],
  },
  cta: {
    title: "Ready to hire?",
    text: "Share your requirement and get a shortlist of qualified candidates.",
    button: "Share Your Requirement",
  },
} as const;
