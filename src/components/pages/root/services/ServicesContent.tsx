import { ServicesCard } from "./ServicesCard";
import { services } from "./ServicesSection";

export function ServicesContent() {
  return (
    <div className="mt-12 hidden flex-col gap-x-4 md:flex">
      {services.map((service) => (
        <ServicesCard key={service.id} service={service} />
      ))}
    </div>
  );
}
