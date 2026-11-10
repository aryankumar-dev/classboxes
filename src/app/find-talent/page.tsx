import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import IntroSection from "@/components/sections/IntroSection";
import FeatureCards from "@/components/sections/FeatureCards";
import ProcessSteps from "@/components/sections/ProcessSteps";
import CtaBanner from "@/components/sections/CtaBanner";
import Button from "@/components/ui/Button";
import { findTalentPage } from "@/data/pages/find-talent";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Find Talent",
  description: findTalentPage.hero.text,
};

export default function FindTalentPage() {
  return (
    <>
      <PageHero hero={findTalentPage.hero} crumb="Find Talent" />
      <IntroSection
        intro={findTalentPage.intro}
        illustration="handshake"
        action={<Button href={routes.shareRequirement} arrow>Share Your Requirement</Button>}
      />
      <FeatureCards block={findTalentPage.services} tinted />
      <ProcessSteps block={findTalentPage.process} />
      <CtaBanner {...findTalentPage.cta} href={routes.shareRequirement} />
    </>
  );
}
