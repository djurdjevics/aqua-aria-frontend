import { useMemo, useState } from "react";
import { cn } from "../../../../utils/cn";

interface ServicesCardProps {
  service: { title: string; id: string; description: string; href: string };
  activeServiceIndex?: string;
  setActiveServiceIndex?: (value: string) => void;
}

export function ServicesCard({
  service,
  activeServiceIndex,
  setActiveServiceIndex,
}: ServicesCardProps) {
  const isActive = useMemo(
    () => service.id === activeServiceIndex,
    [activeServiceIndex],
  );

  return (
    <div
      className={cn(
        isActive
          ? "hover:border-white lg:flex-2/6"
          : "lg:flex-1/6 lg:border-white/50 lg:hover:border-white",
        "flex h-[300px] cursor-pointer flex-col justify-between rounded-2xl border-2 border-white px-4 pt-4 pb-7 transition-all duration-200 lg:p-4",
      )}
      onClick={() => {
        setActiveServiceIndex?.(service.id);
      }}
    >
      <div>
        <span
          className={cn(
            isActive ? "lg:text-bg" : "lg:text-bg/50",
            "text-bg transition-all duration-200",
          )}
        >
          {service.id}
        </span>
        <h4
          className={cn(
            isActive
              ? "lg:text-bg text-[2rem] lg:font-semibold"
              : "lg:text-bg/50 lg:mt-[3px] lg:text-[1.25rem] lg:font-normal lg:transition-all lg:duration-200",
            "text-bg text-2xl font-semibold",
          )}
        >
          {service.title}
        </h4>
        <p
          className={cn(
            isActive ? "lg:block" : "lg:hidden",
            "text-bg/80 mt-3 overflow-hidden text-sm transition-all duration-200 lg:w-[250px] lg:text-base",
          )}
        >
          {service.description}
        </p>
      </div>
      <div className="flex items-center justify-between">
        <div
          className={cn(
            isActive
              ? "lg:bg-primary lg:outline-primary"
              : "lg:bg-transparent lg:outline-white/50",
            "hidden h-6 w-6 rounded-full outline-2 outline-offset-3 transition-all duration-200 lg:block",
          )}
        />
        <a
          href={service.href}
          className={cn(
            isActive ? "lg:block" : "lg:hidden",
            "text-sm text-white underline underline-offset-3 lg:text-base lg:hover:underline lg:hover:underline-offset-3",
          )}
        >
          Pročitaj više
        </a>
      </div>
    </div>
  );
}
