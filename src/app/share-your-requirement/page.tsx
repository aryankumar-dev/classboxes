import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import FormSection from "@/components/sections/FormSection";
import { shareRequirementPage } from "@/data/pages/share-requirement";
import { requirementFields } from "@/data/forms";

export const metadata: Metadata = {
  title: "Share Your Requirement",
  description: shareRequirementPage.hero.text,
};

export default function ShareRequirementPage() {
  return (
    <>
      <PageHero hero={shareRequirementPage.hero} crumb="Share Your Requirement" />
      <FormSection copy={shareRequirementPage.form} fields={requirementFields} tinted={false} />
    </>
  );
}
