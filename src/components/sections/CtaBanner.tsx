import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

/** Red call-to-action band. */
export default function CtaBanner({ title, text, button, href }: { title: string; text: string; button: string; href: string }) {
  return (
    <section className="pb-24">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-[32px] bg-brand px-8 py-12 text-white sm:px-14">
            <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full border-[28px] border-white/10" />
            <div className="absolute -bottom-20 right-1/3 h-40 w-40 rounded-full bg-white/5" />
            <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div>
                <h2 className="font-sans text-[28px] font-extrabold leading-tight sm:text-[34px]">{title}</h2>
                <p className="mt-2 text-white/85">{text}</p>
              </div>
              <Button href={href} variant="white" arrow className="shrink-0">
                {button}
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
