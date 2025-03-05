import { NewBadge } from "../../../../assets/badges/NewBadge";
import { PopularBadge } from "../../../../assets/badges/PopularBadge";
import { cn } from "../../../../utils/cn";

interface DispenserImageProps {
  imageSrc: string;
  badge: "new" | "popular";
  side: "left" | "right";
}

export function DispenserImage({ imageSrc, badge, side }: DispenserImageProps) {
  return (
    <div
      className={cn(
        "relative hidden w-full md:flex",
        side === "right" ? "lg:justify-center" : "lg:justify-start",
      )}
    >
      <div className="relative w-[500px] overflow-visible rounded-2xl md:w-[350px] lg:w-[500px]">
        <img src={imageSrc} width={500} className="h-full w-full rounded-2xl" />
        {badge === "new" ? (
          <NewBadge
            width={100}
            height={100}
            className="absolute top-0 right-0 hidden aspect-square translate-x-[20px] -translate-y-1/2 md:block lg:h-[174px] lg:w-[184px] lg:translate-x-[40px]"
          />
        ) : (
          <PopularBadge
            width={100}
            height={100}
            className="absolute top-0 right-0 hidden aspect-square translate-x-[20px] -translate-y-1/2 md:block lg:h-[174px] lg:w-[184px] lg:translate-x-[40px]"
          />
        )}
      </div>
    </div>
  );
}
