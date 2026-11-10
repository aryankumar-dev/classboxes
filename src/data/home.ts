// All home page copy lives here so it can be edited without touching components.

export const contact = {
  phone: "+1-551-355-5230",
  phoneHref: "tel:+15513555230",
  email: "info@classboxes.com",
  website: "www.classboxes.com",
  hq: "371 Hoes Lane, #200, Piscataway, NJ 08854",
};

export const navLinks = [
  { label: "About us", href: "#about" },
  { label: "Find a Job", href: "#jobs" },
  { label: "Find Talent", href: "#candidates" },
  { label: "Test your Skills", href: "#skills" },
  { label: "Contact Us", href: "#offices" },
];

export const heroSlides = [
  {
    eyebrow: "Hiring is easier now",
    titleRed: "Hire Right Staff",
    titleNavy: "For Your Team",
    text: "Pre-screened, job-ready professionals matched to your roles — so you can build the team you need, faster.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=900&q=80",
    imageAlt: "Smiling professional woman",
  },
  {
    eyebrow: "Learning and development",
    titleRed: "Train, Test",
    titleNavy: "And Get Placed",
    text: "Industry-focused courses and skill assessments that connect candidates directly with hiring companies.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=900&q=80",
    imageAlt: "Confident young professional",
  },
];

export const about = {
  eyebrow: "More than just agency",
  titleRed: "Why ClassBoxes",
  titleNavy: "to sustainable recruiting?",
  // Rewritten in one voice ("we") throughout.
  paragraph: [
    { text: "ClassBoxes is a " },
    { text: "recruitment company in New Jersey, USA", href: "#about" },
    { text: " that helps businesses of every size find the right people. We combine training, skill assessment and " },
    { text: "staffing solutions", href: "#candidates" },
    { text: " so that every candidate we place is ready to contribute from day one — and every client gets a long-term hiring partner, not just a résumé." },
  ],
  stats: [
    { value: 1500, suffix: "+", label: "Candidates", text: "Skilled professionals trained and placed across industries.", icon: "users" },
    { value: 10, suffix: "+", label: "Courses", text: "Job-focused programs built around what employers need.", icon: "book" },
    { value: 100, suffix: "%", label: "Success", text: "Commitment to every placement until the fit is right.", icon: "award" },
    { value: null, suffix: "", label: "Realtime Support", text: "We offer real-time support to clients and candidates.", icon: "headset" },
  ],
} as const;

export const needCandidates = {
  eyebrow: "Get your team working right",
  titleRed: "Need Candidates",
  titleNavy: "for your Company?",
  text: "Tell us about the role and we'll shortlist qualified, pre-assessed candidates within days. From IT and engineering to operations and support, our talent pool is ready to work.",
  points: ["Pre-screened & skill-tested", "Contract, contract-to-hire and full-time", "Dedicated account manager"],
  cta: "Share Your Requirement",
};

export const clients = {
  eyebrow: "We are there for you",
  titleRed: "Our Top",
  titleNavy: "Clients",
  logos: [
    "Capgemini", "Cognizant", "Wipro", "Amazon", "Infosys", "Accenture", "TCS",
    "Deloitte", "IBM", "HCLTech", "Tech Mahindra", "LTIMindtree", "Oracle", "Microsoft",
    "Google", "Dell", "Cisco", "Genpact", "EY", "KPMG", "PwC",
    "Mphasis", "Hexaware", "Virtusa", "Persistent", "Zensar", "Cigna", "Ortho",
  ],
};

export const hrCta = {
  title: "Need First-Class HR Consultants?",
  text: "Talk to our team about hiring strategy, payroll and compliance.",
  cta: "Get a Quote Now",
};

export const jobOpenings = {
  eyebrow: "Get your dream company here",
  titleRed: "Looking for",
  titleNavy: "Job Openings?",
  text: "Browse open roles with our partner companies and apply in minutes. We guide you through every step — from résumé to offer letter.",
  points: ["Roles across the USA and Canada", "Interview preparation support", "No placement fees for candidates"],
  cta: "Apply Now",
};

export const testSkills = {
  eyebrow: "Prove what you know",
  titleRed: "Test your Skills,",
  titleNavy: "Get Direct Offers",
  text: "Take a short assessment in your domain. Strong scores go straight to hiring managers — skip the queue and get noticed by the right companies.",
  points: ["Free online assessments", "Instant score report", "Direct offers from employers"],
  cta: "Test Skills Now",
};

export const portfolio = {
  eyebrow: "Our work",
  titleRed: "Our",
  titleNavy: "Portfolio",
  items: [
    { title: "Scaling a QA team in 6 weeks", tag: "IT Staffing", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80" },
    { title: "Graduate hiring program for a Fortune 500", tag: "Campus Hiring", image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80" },
    { title: "Upskilling 200 analysts in cloud", tag: "Training", image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80" },
  ],
};

export const testimonials = {
  eyebrow: "Great reviews for our services",
  titleRed: "Trusted by Biggest",
  titleNavy: "Business Names",
  items: [
    {
      quote: "ClassBoxes understood exactly what we were looking for. The candidates were well prepared and the whole process was quick and professional.",
      name: "James Herriot",
      company: "Ortho Clinical Diagnostics",
    },
    {
      quote: "Their training-first approach shows. Every hire we made through ClassBoxes was productive from the first week.",
      name: "Priya Nair",
      company: "Cognizant",
    },
    {
      quote: "Responsive, reliable and genuinely invested in the fit. They have become our go-to staffing partner.",
      name: "Michael Ross",
      company: "Capgemini",
    },
  ],
};

export const offices = {
  eyebrow: "Our offices",
  titleRed: "Need",
  titleNavy: "Assistance?",
  items: [
    { icon: "building", title: "New Jersey Office", lines: ["371 Hoes Lane, #200,", "Piscataway, NJ 08854"] },
    { icon: "map", title: "Canada Office", lines: ["5 Place Ville Marie Bureau 1400,", "Montréal, QC H3B 2G2"] },
    { icon: "mail", title: "Email", lines: ["info@classboxes.com"], href: "mailto:info@classboxes.com" },
    { icon: "phone", title: "Call", lines: ["+1-551-355-5230"], href: "tel:+15513555230" },
  ],
} as const;

export const blogs = {
  eyebrow: "News & insights",
  titleRed: "Latest",
  titleNavy: "Blogs",
  cta: "Read All Blogs",
  items: [
    {
      date: "Nov 4, 2026",
      title: "5 skills hiring managers look for in 2026",
      excerpt: "From cloud fundamentals to clear communication — what actually gets candidates shortlisted this year.",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80",
    },
    {
      date: "Oct 21, 2026",
      title: "Contract-to-hire: is it right for your team?",
      excerpt: "How a trial period reduces hiring risk for employers and gives candidates a real feel for the role.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    },
    {
      date: "Oct 8, 2026",
      title: "How to prepare for a technical skills test",
      excerpt: "A simple, practical plan to walk into your assessment calm, prepared and confident.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
    },
  ],
};

export const newsletter = {
  eyebrow: "Stay in the loop",
  titleRed: "Subscribe to Our",
  titleNavy: "Newsletter",
  text: "Job openings, hiring tips and new courses — delivered once a month. No spam.",
  cta: "Subscribe Now",
};

export const footer = {
  solutions: [
    { label: "Find Talent", href: "#candidates" },
    { label: "Find a Job", href: "#jobs" },
    { label: "Share your Requirements", href: "#candidates" },
    { label: "Test your Skills", href: "#skills" },
    { label: "Contact Us", href: "#offices" },
  ],
  bottomLinks: [
    { label: "Home", href: "#top" },
    { label: "About Us", href: "#about" },
    { label: "Blogs", href: "#blogs" },
    { label: "Privacy Policy", href: "#" },
  ],
  socials: [
    { label: "Facebook", href: "#", icon: "facebook" },
    { label: "X", href: "#", icon: "x" },
    { label: "YouTube", href: "#", icon: "youtube" },
    { label: "LinkedIn", href: "#", icon: "linkedin" },
    { label: "Instagram", href: "#", icon: "instagram" },
  ],
} as const;
