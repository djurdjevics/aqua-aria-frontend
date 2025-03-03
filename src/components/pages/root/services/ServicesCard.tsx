import { useState } from "react";
import { cn } from "../../../../utils/cn";

interface ServicesCardProps {
  service: { title: string; id: string; description: string; href: string };
}

export function ServicesCard({ service }: ServicesCardProps) {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <div
      className={cn(
        isActive
          ? "md:flex-2/6 md:border-white"
          : "md:flex-1/6 md:border-white/50",
        "flex h-[300px] flex-col justify-between rounded-2xl border-2 border-white px-4 pt-4 pb-7 transition-all duration-200 md:p-4",
      )}
      onMouseOver={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      <div>
        <span
          className={cn(
            isActive ? "md:text-bg" : "md:text-bg/50",
            "text-bg transition-all duration-200",
          )}
        >
          {service.id}
        </span>
        <h4
          className={cn(
            isActive
              ? "md:text-bg text-[2rem] md:font-semibold"
              : "md:text-bg/50 md:mt-[3px] md:text-[1.25rem] md:font-normal md:transition-all md:duration-200",
            "text-bg text-2xl font-semibold",
          )}
        >
          {service.title}
        </h4>
        <p
          className={cn(
            isActive ? "md:block" : "md:hidden",
            "text-bg/80 mt-3 overflow-hidden text-sm transition-all duration-200 md:w-[250px] md:text-base",
          )}
        >
          {service.description}
        </p>
      </div>
      <div className="flex items-center justify-between">
        <div
          className={cn(
            isActive
              ? "md:bg-primary md:outline-primary"
              : "md:bg-transparent md:outline-white/50",
            "hidden h-6 w-6 rounded-full outline-2 outline-offset-3 transition-all duration-200 md:block",
          )}
        />
        <a
          href={service.href}
          className={cn(
            isActive ? "md:block" : "md:hidden",
            "text-sm text-white underline underline-offset-3 md:text-base md:hover:underline md:hover:underline-offset-3",
          )}
        >
          Pročitaj više
        </a>
      </div>
    </div>
  );
}
