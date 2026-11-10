import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import IntroSection from "@/components/sections/IntroSection";
import StatsStrip from "@/components/sections/StatsStrip";
import FormSection from "@/components/sections/FormSection";
import Button from "@/components/ui/Button";
import { findJobPage } from "@/data/pages/find-a-job";
import { contactFields } from "@/data/forms";

export const metadata: Metadata = {
  title: "Find a Job",
  description: findJobPage.hero.text,
};

export default function FindJobPage() {
  return (
    <>
      <PageHero hero={findJobPage.hero} crumb="Find a Job" />
      <IntroSection
        intro={findJobPage.intro}
        illustration="job"
        action={<Button href="#apply" arrow>Apply Now</Button>}
      />
      <StatsStrip stats={findJobPage.stats} />
      <FormSection id="apply" copy={{ ...findJobPage.contact, submit: "Apply Now" }} fields={contactFields} tinted={false} />
    </>
  );
}
