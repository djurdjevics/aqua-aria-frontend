import { cn } from "../../../../utils/cn";
import { Eyebrow } from "../../../Eyebrow";

interface DispenserInfoProps {
  eyebrowText: string;
  title: string;
  description: string;
  children: React.ReactNode;
  side: "left" | "right";
  imgOnMobile: string;
}

export function DispenserInfo({
  eyebrowText,
  title,
  description,
  children,
  side,
  imgOnMobile,
}: DispenserInfoProps) {
  return (
    <div
      className={cn(
        side === "left" ? "justify-self-end" : "justify-self-start",
      )}
    >
      <Eyebrow text={eyebrowText} />
      <h2 className="font-display text-bg mt-2 text-[40px] leading-[100%] uppercase md:mt-4 md:text-7xl">
        Aparat <span className="text-primary">{title}</span>
      </h2>
      <p className="mt-3 text-sm text-white/80 md:text-base">{description}</p>
      <div className="mt-7 overflow-hidden rounded-2xl md:hidden">
        <img src={imgOnMobile} alt={`Aparat ${title}`} />
      </div>
      {children}
    </div>
  );
}
