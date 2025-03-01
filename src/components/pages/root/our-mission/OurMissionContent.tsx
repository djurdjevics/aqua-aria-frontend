import { cn } from "../../../../utils/cn";
import { buttonVariants } from "../../../Button";

export function OurMissionContent() {
  return (
    <div className="max-w-[400px]">
      <h3 className="uppercase font-display text-secondary text-7xl mb-4">Naša misija</h3>
      <p className="text-secondary/80 mb-2">
        Naša misija je da obezbedimo svakom domu i poslovnom prostoru pristup vrhunskoj hidrataciji. Verujemo da kvalitetna voda nije samo osnovna potreba, već
        i ključni deo zdravog i produktivnog života.
      </p>
      <p className="text-secondary/80 mb-[84px]">
        Sa fokusom na pouzdanost, održivost i vrhunski kvalitet, naša vizija je da postanemo sinonim za sigurnu i praktičnu distribuciju vode i aparata.
      </p>
      <a href="/o-nama" className={cn(buttonVariants({ variant: "secondary", size: "default" }))}>
        O nama
      </a>
    </div>
  );
}
