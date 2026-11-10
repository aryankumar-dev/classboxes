import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import OfficeCards from "@/components/sections/OfficeCards";
import FormSection from "@/components/sections/FormSection";
import { contactPage } from "@/data/pages/contact-us";
import { contactFields } from "@/data/forms";

export const metadata: Metadata = {
  title: "Contact Us",
  description: contactPage.hero.text,
};

export default function ContactPage() {
  return (
    <>
      <PageHero hero={contactPage.hero} crumb="Contact Us" />
      <OfficeCards copy={contactPage.offices} />
      <FormSection copy={contactPage.form} fields={contactFields} />
    </>
  );
}
