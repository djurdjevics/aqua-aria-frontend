import { cn } from "../utils/cn";
import { buttonVariants } from "./Button";

export function CallToAction() {
  return (
    <section className="bg-secondary mx-auto w-full px-4 py-14 md:py-[100px] lg:py-[120px]">
      <h3 className="text-bg font-display text-center text-[56px] leading-[98%] uppercase md:text-[72px] lg:text-[144px]">
        Tu smo za vas
      </h3>
      <p className="text-bg/80 mx-auto mt-3 text-center text-sm md:max-w-[500px] lg:max-w-[600px] lg:text-base">
        Uz nas kvalitetna hidratacija nikad nije bila jednostavnija. Vaš pouzdan
        partner za sve što vam je potrebno – od sveže vode do vrhunskih aparata!
      </p>
      <div className="mx-auto mt-9 w-full text-center md:mt-8">
        <a
          href="/kontakt"
          className={cn(buttonVariants(), "inline-flex justify-center")}
        >
          Kontakt
        </a>
      </div>
    </section>
  );
}
