import { cn } from "../../../../utils/cn";
import { buttonVariants } from "../../../Button";

export function ServicesHeader() {
  return (
    <div className="flex justify-between items-center">
      <div className="space-y-3">
        <h3 className="text-7xl text-bg font-display">Usluge koje nudimo</h3>
        <p className="text-bg/80 max-w-[500px]">Nudimo razne ulsluge kako bi Vam omogućili prijatno iskustvo kada je u pitanju Vaša hidratacaija.</p>
      </div>
      <a href="/kontakt" className={cn(buttonVariants({ variant: "outline" }))}>
        Kontakt
      </a>
    </div>
  );
}
