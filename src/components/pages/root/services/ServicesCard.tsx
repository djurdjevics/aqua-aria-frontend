import { useState } from "react";
import { cn } from "../../../../utils/cn";

interface ServicesCardProps {
  title: string;
  index: string;
  description: string;
  href: string;
}

export function ServicesCard({ title, index, description, href }: ServicesCardProps) {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <div
      className={cn(
        isActive ? "flex-2/6 border-white" : "flex-1/6 border-white/50",
        "p-4 flex flex-col justify-between border-2 transition-all duration-200 rounded-2xl h-[300px]"
      )}
      onMouseOver={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      <div>
        <span className={cn(isActive ? "text-bg" : "text-bg/50", "transition-all duration-200")}>{index}</span>
        <h4 className={cn(isActive ? "text-[2rem] text-bg font-semibold" : "text-[1.25rem] transition-all duration-200 font-normal text-bg/50 mt-[3px]")}>
          {title}
        </h4>
        <p className={cn(isActive ? "block" : "hidden", "transition-all w-[250px] duration-200 overflow-hidden text-bg/80 mt-3")}>{description}</p>
      </div>
      <div className="flex items-center justify-between">
        <div
          className={cn(
            isActive ? "bg-primary outline-primary" : "bg-transparent outline-white/50",
            "w-6 h-6 rounded-full transition-all duration-200  outline-2 outline-offset-3"
          )}
        />
        <a href={href} className={cn(isActive ? "block" : "hidden", "text-white hover:underline hover:underline-offset-3")}>
          Pročitaj više
        </a>
      </div>
    </div>
  );
}
