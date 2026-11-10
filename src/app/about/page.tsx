import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import IntroSection from "@/components/sections/IntroSection";
import TechChips from "@/components/sections/TechChips";
import FeatureCards from "@/components/sections/FeatureCards";
import FormSection from "@/components/sections/FormSection";
import { aboutPage } from "@/data/pages/about";
import { contactFields } from "@/data/forms";

export const metadata: Metadata = {
  title: "About Us",
  description: aboutPage.hero.text,
};

export default function AboutPage() {
  return (
    <>
      <PageHero hero={aboutPage.hero} crumb="About Us" />
      <IntroSection intro={aboutPage.intro} illustration="handshake" />
      <TechChips block={aboutPage.tech} tinted />
      <FeatureCards block={aboutPage.help} />
      <FormSection
        copy={{ eyebrow: "Get in touch", titleRed: "Contact", titleNavy: "Us", text: "Have a question about our courses or hiring services? Send us a message." }}
        fields={contactFields}
      />
    </>
  );
}
