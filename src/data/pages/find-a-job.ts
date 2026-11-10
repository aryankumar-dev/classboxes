export const findJobPage = {
  hero: {
    eyebrow: "For job seekers",
    titleRed: "Find a Job",
    titleNavy: "That Fits You",
    text: "Opportunities across industries and skill levels — plus résumé tips, interview prep and career coaching to help you land the offer.",
  },
  intro: {
    eyebrow: "Your next role",
    titleRed: "Job opportunities in",
    titleNavy: "New Jersey, USA",
    paragraphs: [
      "We offer opportunities across many industries and skill levels, along with résumé-writing tips, interview preparation and career coaching.",
      "As a trusted recruitment brand linking talent with leading companies, we help you find job opportunities in New Jersey, USA. Join us now.",
      "We put our clients first, with regular feedback and updates throughout the recruitment process — making us the premier choice for job seekers and employers alike.",
    ],
    points: ["Résumé-writing tips", "Interview preparation", "Career coaching"],
  },
  stats: [
    { value: 8, suffix: "+", label: "Years Of Experience", icon: "calendar" },
    { value: 100, suffix: "+", label: "Top Recruiters", icon: "briefcase" },
    { value: 1000, suffix: "+", label: "Happy Candidates", icon: "smile" },
    { value: 10, suffix: "+", label: "Technologies Covered", icon: "cpu" },
  ],
  contact: {
    eyebrow: "Apply now",
    titleRed: "Contact",
    titleNavy: "Us",
    text: "Send us your details and the kind of role you're looking for. A recruiter will get back to you.",
  },
} as const;
