import { SectionContainer } from "../../../SectionContainer";
import { OurMissionContent } from "./OurMissionContent";
import { OurMissionImage } from "./OurMissionImage";

export function OurMissionSection() {
  return (
    <SectionContainer className="grid grid-cols-1 items-center py-14 md:grid-cols-2 md:py-[120px]">
      <OurMissionContent />
      <OurMissionImage />
    </SectionContainer>
  );
}
