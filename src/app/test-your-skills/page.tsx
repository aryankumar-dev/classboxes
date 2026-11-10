import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import ProcessSteps from "@/components/sections/ProcessSteps";
import TechChips from "@/components/sections/TechChips";
import FormSection from "@/components/sections/FormSection";
import { testSkillsPage } from "@/data/pages/test-your-skills";
import { skillTestFields } from "@/data/forms";

export const metadata: Metadata = {
  title: "Test your Skills",
  description: testSkillsPage.hero.text,
};

export default function TestSkillsPage() {
  const { steps } = testSkillsPage;
  return (
    <>
      <PageHero hero={testSkillsPage.hero} crumb="Test your Skills" />
      <ProcessSteps block={{ ...steps, steps: steps.items }} />
      <TechChips block={testSkillsPage.tech} tinted />
      <FormSection id="register" copy={testSkillsPage.form} fields={skillTestFields} tinted={false} />
    </>
  );
}
