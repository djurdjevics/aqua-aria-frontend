import { cn } from "../../../../utils/cn";

interface DispenserImageProps {
  imageSrc: string;
  badgeSrc: string;
  side: "left" | "right";
}

export function DispenserImage({
  imageSrc,
  badgeSrc,
  side,
}: DispenserImageProps) {
  return (
    <div
      className={cn(
        "relative hidden md:flex",
        side === "right" ? "justify-end" : "justify-start",
      )}
    >
      <div className="w-[500px] overflow-hidden rounded-2xl">
        <img src={imageSrc} width={500} />
      </div>
      <img
        src={badgeSrc}
        width={200}
        className={cn(
          "absolute hidden md:block",
          side === "right" ? "-top-20 md:-right-20" : "-top-20 right-10",
        )}
        height={200}
      />
    </div>
  );
}
