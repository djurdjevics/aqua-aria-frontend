import { cn } from "../../utils/cn";

interface DispenserImageProps {
  imageSrc: string;
  badgeSrc: string;
  side: "left" | "right";
}

export function DispenserImage({ imageSrc, badgeSrc, side }: DispenserImageProps) {
  return (
    <div className={cn("relative flex", side === "right" ? "justify-end" : "justify-start")}>
      <div className="rounded-2xl overflow-hidden w-[500px]">
        <img src={imageSrc} width={500} />
      </div>
      <img src={badgeSrc} width={200} className={cn("absolute", side === "right" ? "-right-20 -top-20" : "right-10 -top-20")} height={200} />
    </div>
  );
}
