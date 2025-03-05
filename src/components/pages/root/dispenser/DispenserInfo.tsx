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
        side === "left" ? "md:justify-self-end" : "md:justify-self-start",
      )}
    >
      <Eyebrow text={eyebrowText} />
      <h2 className="font-display text-bg mt-2 text-[40px] leading-[100%] uppercase sm:text-[48px] md:mt-4 md:text-[48px] lg:text-[4.5rem]">
        Aparat <span className="text-primary">{title}</span>
      </h2>
      <p className="mt-3 text-sm text-white/80 md:text-base">{description}</p>
      <div className="mt-7 w-full max-w-[450px] overflow-hidden rounded-2xl md:hidden">
        <img
          src={imgOnMobile}
          alt={`Aparat ${title}`}
          className="object-cover"
        />
      </div>
      {children}
    </div>
  );
}
