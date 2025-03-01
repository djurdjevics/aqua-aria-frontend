import { SectionContainer } from "../../../SectionContainer";
import { OurMissionContent } from "./OurMissionContent";
import { OurMissionImage } from "./OurMissionImage";

export function OurMissionSection() {
  return (
    <SectionContainer className="py-[120px] grid grid-cols-2 items-center">
      <OurMissionContent />
      <OurMissionImage />
    </SectionContainer>
  );
}
