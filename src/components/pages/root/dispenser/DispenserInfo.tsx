import { cn } from "../../../../utils/cn";
import { Eyebrow } from "../../../Eyebrow";

interface DispenserInfoProps {
  eyebrowText: string;
  title: string;
  description: string;
  children: React.ReactNode;
  side: "left" | "right";
}

export function DispenserInfo({ eyebrowText, title, description, children, side }: DispenserInfoProps) {
  return (
    <div className={cn(side === "left" ? "justify-self-end" : "justify-self-start")}>
      <Eyebrow text={eyebrowText} />
      <h2 className="uppercase font-display text-bg text-7xl mt-4">
        Aparat <span className="text-primary">{title}</span>
      </h2>
      <p className="text-base text-white/80 mt-3">{description}</p>
      {children}
    </div>
  );
}
