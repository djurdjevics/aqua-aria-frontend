import { SectionContainer } from "../../../SectionContainer";
import { ServicesContent } from "./ServicesContent";
import { ServicesHeader } from "./ServicesHeader";

export function ServicesSection() {
  return (
    <div className="py-[120px] bg-secondary">
      <SectionContainer>
        <ServicesHeader />
        <ServicesContent />
      </SectionContainer>
    </div>
  );
}
