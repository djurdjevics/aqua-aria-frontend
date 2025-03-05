import { cn } from "../../../../utils/cn";
import { buttonVariants } from "../../../Button";

export function OurMissionContent() {
  return (
    <div className="h-full w-full md:flex md:flex-col md:items-start md:justify-between lg:max-w-[400px]">
      <div className="md:h-full">
        <h3 className="font-display text-secondary mb-3 text-[40px] leading-[100%] uppercase md:mb-4 md:text-[48px] lg:text-7xl">
          Naša misija
        </h3>
        <p className="text-secondary/80 mb-3 text-sm lg:text-base">
          Naša misija je da obezbedimo svakom domu i poslovnom prostoru pristup
          vrhunskoj hidrataciji. Verujemo da kvalitetna voda nije samo osnovna
          potreba, već i ključni deo zdravog i produktivnog života.
        </p>
        <div className="mb-3 overflow-hidden rounded-2xl md:hidden">
          <img src="/our-mission-img.jpg" />
        </div>
        <p className="text-secondary/80 mb-6 text-sm md:mb-[84px] lg:text-base">
          Sa fokusom na pouzdanost, održivost i vrhunski kvalitet, naša vizija
          je da postanemo sinonim za sigurnu i praktičnu distribuciju vode i
          aparata.
        </p>
      </div>
      <a
        href="/o-nama"
        className={cn(buttonVariants({ variant: "secondary" }))}
      >
        O nama
      </a>
    </div>
  );
}
