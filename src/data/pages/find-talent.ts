// Find Talent page copy — use word for word as supplied by the client.
export const findTalentPage = {
  hero: {
    eyebrow: "FINDING TALENT IS NOW EASIER",
    titleRed: "Hire the Best Talent",
    titleNavy: "at Zero Cost with ClassBoxes",
    text: "Connect with pre-assessed, job-ready professionals across multiple technologies, with no hiring fees.",
    primaryCta: "Drop Requirements",
    secondaryCta: "Contact Us",
  },
  stats: [
    { value: 8, suffix: "+", label: "Years of Experience", icon: "calendar" },
    { value: 100, suffix: "+", label: "Top Recruiters", icon: "briefcase" },
    { value: 1000, suffix: "+", label: "Happy Candidates", icon: "smile" },
    { value: 10, suffix: "+", label: "Technologies Covered", icon: "cpu" },
  ],
  process: {
    titleRed: "How it",
    titleNavy: "works",
    steps: [
      { title: "Share your requirement", text: "Tell us about the role, skills and timeline. It's free." },
      { title: "We shortlist", text: "Pre-assessed candidates matched to your needs." },
      { title: "You interview", text: "Meet the shortlist. We handle the scheduling." },
      { title: "Hire & onboard", text: "Candidates can join immediately, with 12 months of support after hiring." },
    ],
    cta: "Drop Requirements",
  },
  why: {
    titleRed: "Why hire from",
    titleNavy: "ClassBoxes?",
    items: [
      { icon: "award", label: "High-quality candidates" },
      { icon: "zap", label: "Immediate joining" },
      { icon: "piggy", label: "Zero hiring cost" },
      { icon: "headset", label: "12-month support" },
      { icon: "layers", label: "Multiple technologies" },
    ],
  },
  tech: {
    titleRed: "Candidates in",
    titleNavy: "multiple technologies",
    items: ["PHP Developer", "Java Developer", "React Developer", "Python Developer"],
  },
  contact: {
    titleRed: "Get in",
    titleNavy: "Touch",
    text: "Have a hiring need? Contact us anytime.",
    info: [
      { icon: "map", title: "Address", lines: ["371 Hoes Lane, #200, Piscataway, New Jersey 08854"] },
      { icon: "mail", title: "Email", lines: ["info@classboxes.com"], href: "mailto:info@classboxes.com" },
      { icon: "phone", title: "Phone", lines: ["+1-551-355-5230"], href: "tel:+15513555230" },
    ],
  },
} as const;
