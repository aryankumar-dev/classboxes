// Content shared by every page: contact details, navigation, footer, forms.
import { routes } from "@/lib/routes";

export const contact = {
  phone: "+1-551-355-5230",
  phoneHref: "tel:+15513555230",
  email: "info@classboxes.com",
  website: "www.classboxes.com",
  hq: "371 Hoes Lane, #200, Piscataway, New Jersey - 08854",
};

export const navLinks = [
  { label: "About us", href: routes.about },
  { label: "Find a Job", href: routes.findJob },
  { label: "Find Talent", href: routes.findTalent },
  { label: "Test your Skills", href: routes.testSkills },
  { label: "Contact Us", href: routes.contact },
];

/** Address / email / phone block shown next to the form on inner pages. */
export const contactInfo = [
  { icon: "map", title: "Address", lines: ["371 Hoes Lane, #200,", "Piscataway, New Jersey - 08854"] },
  { icon: "mail", title: "Email us", lines: [contact.email], href: `mailto:${contact.email}` },
  { icon: "phone", title: "Call us", lines: [contact.phone], href: contact.phoneHref },
] as const;

export const officeLocations = [
  { icon: "building", title: "New Jersey Office", lines: ["371 Hoes Lane, #200, Piscataway,", "New Jersey, USA - 08854"] },
  { icon: "map", title: "Canada Office", lines: ["5 Place Ville Marie Bureau 1400,", "Montréal, Quebec H3B 2G2, Canada"] },
] as const;

export const technologies = [
  "Salesforce", "Azure", "DevOps", "Amazon Web Services", "SailPoint", "Splunk",
  "Business Analysis", "Quality Analysis", "Java", "Dot Net", "Performance Testing",
];

/** The two checkboxes shown under every form. */
export const consent = {
  marketing:
    "I consent to receive promotional emails and SMS from ClassBoxes Technologies. Message and data rates may apply. I can opt out anytime — reply STOP to stop, HELP for help.",
  privacyPrefix: "I agree with the ",
  privacyLink: "Privacy Policy of the Website",
  privacySuffix: " of ClassBoxes Technologies.",
};

export const footer = {
  quickLinks: [
    { label: "Find Talent", href: routes.findTalent },
    { label: "Find a Job", href: routes.findJob },
    { label: "Share your Requirements", href: routes.shareRequirement },
    { label: "Test your Skills", href: routes.testSkills },
    { label: "Contact Us", href: routes.contact },
  ],
  bottomLinks: [
    { label: "Home", href: routes.home },
    { label: "About Us", href: routes.about },
    { label: "Blogs", href: "/#blogs" },
    { label: "Privacy Policy", href: routes.privacy },
  ],
  socials: [
    { label: "Facebook", href: "#", icon: "facebook" },
    { label: "X", href: "#", icon: "x" },
    { label: "YouTube", href: "#", icon: "youtube" },
    { label: "LinkedIn", href: "#", icon: "linkedin" },
    { label: "Instagram", href: "#", icon: "instagram" },
  ],
} as const;
