import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import SplitSection from "@/components/home/SplitSection";
import Clients from "@/components/home/Clients";
import HrCta from "@/components/home/HrCta";
import Portfolio from "@/components/home/Portfolio";
import Testimonials from "@/components/home/Testimonials";
import Offices from "@/components/home/Offices";
import Blogs from "@/components/home/Blogs";
import Newsletter from "@/components/home/Newsletter";
import { jobOpenings, needCandidates, testSkills } from "@/data/home";
import { routes } from "@/lib/routes";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <SplitSection id="candidates" content={needCandidates} illustration="handshake" ctaHref={routes.shareRequirement} tinted />
      <Clients />
      <HrCta />
      <SplitSection id="jobs" content={jobOpenings} illustration="job" reverse ctaHref={routes.findJob} ctaVariant="navy" />
      <SplitSection id="skills" content={testSkills} illustration="skills" ctaHref={routes.testSkills} tinted />
      <Portfolio />
      <Testimonials />
      <Offices />
      <Blogs />
      <Newsletter />
    </>
  );
}
