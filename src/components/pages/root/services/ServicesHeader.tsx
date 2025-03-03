import { cn } from "../../../../utils/cn";
import { buttonVariants } from "../../../Button";

export function ServicesHeader() {
  return (
    <div className="flex flex-col items-center justify-between md:flex-row md:px-0">
      <div className="space-y-3">
        <h3 className="text-bg font-display text-[40px] leading-[100%] md:text-7xl">
          Usluge koje nudimo
        </h3>
        <p className="text-bg/80 max-w-[500px] text-sm md:text-base">
          Nudimo razne ulsluge kako bi Vam omogućili prijatno iskustvo kada je u
          pitanju Vaša hidratacaija.
        </p>
      </div>
      <a
        href="/kontakt"
        className={cn(
          buttonVariants({ variant: "outline" }),
          "hidden md:inline-block",
        )}
      >
        Kontakt
      </a>
    </div>
  );
}
