import { useState } from "react";
import { ServicesCard } from "./ServicesCard";
import { services } from "./ServicesSection.astro";

export function ServicesContent() {
  const [activeServiceIndex, setActiveServiceIndex] = useState<string>("01");

  return (
    <div className="mt-12 hidden gap-x-4 md:flex">
      {services.map((service) => (
        <ServicesCard
          activeServiceIndex={activeServiceIndex}
          setActiveServiceIndex={setActiveServiceIndex}
          key={service.id}
          service={service}
        />
      ))}
    </div>
  );
}
