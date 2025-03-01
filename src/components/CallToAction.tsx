import { cn } from "../utils/cn";
import { buttonVariants } from "./Button";

export function CallToAction() {
  return (
    <section className="py-[120px] mx-auto bg-secondary w-full">
      <h3 className="text-[144px] uppercase leading-[98%] text-bg font-display text-center">Tu smo za vas</h3>
      <p className="text-bg/80 text-center max-w-[600px] mx-auto mt-3">
        Uz nas kvalitetna hidratacija nikad nije bila jednostavnija. Vaš pouzdan partner za sve što vam je potrebno – od sveže vode do vrhunskih aparata!
      </p>
      <div className="mx-auto w-full text-center mt-8">
        <a href="/kontakt" className={cn(buttonVariants(), "inline-flex justify-center")}>
          Kontakt
        </a>
      </div>
    </section>
  );
}
