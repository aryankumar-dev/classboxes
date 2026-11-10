import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import StatsStrip from "@/components/sections/StatsStrip";
import ProcessSteps from "@/components/sections/ProcessSteps";
import HighlightGrid from "@/components/sections/HighlightGrid";
import TechChips from "@/components/sections/TechChips";
import FormSection from "@/components/sections/FormSection";
import Button from "@/components/ui/Button";
import { findTalentPage as p } from "@/data/pages/find-talent";
import { contactFields } from "@/data/forms";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Find Talent",
  description: p.hero.text,
};

export default function FindTalentPage() {
  return (
    <>
      <PageHero
        hero={p.hero}
        crumb="Find Talent"
        actions={
          <>
            <Button href={routes.shareRequirement} arrow>{p.hero.primaryCta}</Button>
            <Button href={routes.contact} variant="navy">{p.hero.secondaryCta}</Button>
          </>
        }
      />
      <StatsStrip stats={p.stats} />
      <ProcessSteps
        block={p.process}
        action={<Button href={routes.shareRequirement} arrow>{p.process.cta}</Button>}
      />
      <HighlightGrid block={p.why} tinted />
      <TechChips block={p.tech} items={p.tech.items} showMore={false} />
      <FormSection copy={p.contact} info={p.contact.info} fields={contactFields} />
    </>
  );
}
