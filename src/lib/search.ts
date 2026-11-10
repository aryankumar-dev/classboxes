// Site search: a small in-memory index built from the same data files the pages render,
// so results always match what's on the site (no placeholder text, links go to the real page).
import * as home from "@/data/home";
import { aboutPage } from "@/data/pages/about";
import { findJobPage } from "@/data/pages/find-a-job";
import { findTalentPage } from "@/data/pages/find-talent";
import { shareRequirementPage } from "@/data/pages/share-requirement";
import { testSkillsPage } from "@/data/pages/test-your-skills";
import { contactPage } from "@/data/pages/contact-us";
import { contactInfo, officeLocations, technologies } from "@/data/site";
import { routes } from "@/lib/routes";

export type SearchDoc = {
  type: "Page" | "Blog";
  title: string;
  href: string;
  date?: string;
  /** Short summary used when the match is only in the title. */
  summary: string;
  /** Readable pieces of the page (sentences, headings, lists) — excerpts come from these. */
  segments: string[];
  content: string;
};

export type SearchResult = SearchDoc & { excerpt: string; score: number };

// Keys whose values are not visible text (icons, URLs, images…).
const SKIP_KEYS = new Set(["icon", "image", "imageAlt", "href", "suffix", "value"]);

/**
 * Collects the visible text in a page's data object as readable segments.
 * Lists of short strings (e.g. technologies) become one comma-separated segment;
 * a heading split into red/navy parts is joined back into one line.
 */
function segmentsOf(value: unknown): string[] {
  if (typeof value === "string") return value.trim() ? [value.trim()] : [];
  if (Array.isArray(value)) {
    if (value.length > 1 && value.every((v) => typeof v === "string" && v.length <= 40)) return [value.join(", ")];
    return value.flatMap(segmentsOf);
  }
  if (value && typeof value === "object") {
    const o = value as Record<string, unknown>;
    const out: string[] = [];
    if (typeof o.titleRed === "string" && typeof o.titleNavy === "string") out.push(`${o.titleRed} ${o.titleNavy}`);
    for (const [k, v] of Object.entries(o)) {
      if (SKIP_KEYS.has(k) || k === "titleRed" || k === "titleNavy") continue;
      out.push(...segmentsOf(v));
    }
    return out;
  }
  return [];
}

const page = (title: string, href: string, summary: string, ...data: unknown[]): SearchDoc => {
  const segments = data.flatMap(segmentsOf);
  return { type: "Page", title, href, summary, segments, content: segments.join(" ") };
};

const { blogs, heroSlides, about, needCandidates, clients, hrCta, jobOpenings, testSkills, portfolio, testimonials, offices, newsletter } = home;

export const searchIndex: SearchDoc[] = [
  page("Home", routes.home, heroSlides[0].text, heroSlides, about, needCandidates, clients, hrCta, jobOpenings, testSkills, portfolio, testimonials, offices, newsletter),
  page("About us", routes.about, aboutPage.hero.text, aboutPage, technologies),
  page("Find a Job", routes.findJob, findJobPage.hero.text, findJobPage),
  page("Find Talent", routes.findTalent, findTalentPage.hero.text, findTalentPage),
  page("Share Your Requirement", routes.shareRequirement, shareRequirementPage.hero.text, shareRequirementPage),
  page("Test your Skills", routes.testSkills, testSkillsPage.hero.text, testSkillsPage, technologies),
  page("Contact Us", routes.contact, contactPage.hero.text, contactPage, officeLocations, contactInfo),
  ...blogs.items.map<SearchDoc>((b) => ({
    type: "Blog",
    title: b.title,
    // No individual post pages yet — link to the blog section on the home page.
    href: routes.blogs,
    date: b.date,
    summary: b.excerpt,
    segments: [b.excerpt],
    content: b.excerpt,
  })),
];

export const recentPosts = blogs.items.map((b) => ({ title: b.title, date: b.date, href: routes.blogs }));

export function searchTerms(query: string): string[] {
  return [...new Set(query.toLowerCase().split(/\s+/).filter((t) => t.length > 0))];
}

const MAX_EXCERPT = 200;

/** The segment matching the most terms (ties: the earliest), trimmed around the match if long. */
function excerptFor(doc: SearchDoc, terms: string[]): string {
  let best: string | undefined;
  let bestHits = 0;
  for (const seg of doc.segments) {
    const lower = seg.toLowerCase();
    const hits = terms.filter((t) => lower.includes(t)).length;
    if (hits > bestHits) [best, bestHits] = [seg, hits];
  }
  if (!best) return doc.summary;
  if (best.length <= MAX_EXCERPT) return best;

  const lower = best.toLowerCase();
  const hit = Math.min(...terms.map((t) => lower.indexOf(t)).filter((i) => i >= 0));
  const start = hit < 80 ? 0 : best.lastIndexOf(" ", hit - 60) + 1;
  const cut = best.lastIndexOf(" ", start + MAX_EXCERPT);
  const end = start + MAX_EXCERPT >= best.length || cut <= start ? best.length : cut;
  return `${start > 0 ? "…" : ""}${best.slice(start, end)}${end < best.length ? "…" : ""}`;
}

/** Every term must appear in the title or content. Title matches rank higher. */
export function search(query: string): SearchResult[] {
  const terms = searchTerms(query);
  if (terms.length === 0) return [];

  const results: SearchResult[] = [];
  for (const doc of searchIndex) {
    const title = doc.title.toLowerCase();
    const content = doc.content.toLowerCase();
    if (!terms.every((t) => title.includes(t) || content.includes(t))) continue;
    const score = terms.reduce(
      (s, t) => s + (title.includes(t) ? 10 : 0) + Math.min(content.split(t).length - 1, 5),
      0,
    );
    results.push({ ...doc, excerpt: excerptFor(doc, terms), score });
  }
  return results.sort((a, b) => b.score - a.score);
}
