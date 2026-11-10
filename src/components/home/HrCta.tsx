import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { hrCta } from "@/data/home";
import { routes } from "@/lib/routes";

export default function HrCta() {
  return (
    <section className="py-10">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-[32px] bg-navy px-8 py-12 sm:px-14">
            <div className="stripes absolute -right-10 -top-10 h-48 w-48 rounded-full opacity-20" />
            <div className="absolute -bottom-20 right-1/3 h-56 w-56 rounded-full bg-brand/10" />
            <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div>
                <h2 className="font-sans text-[28px] font-extrabold leading-tight text-white sm:text-[34px]">
                  Need <span className="text-brand">First-Class</span> HR Consultants?
                </h2>
                <p className="mt-2 text-white/70">{hrCta.text}</p>
              </div>
              <Button href={routes.contact} variant="red" arrow className="shrink-0">
                {hrCta.cta}
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
