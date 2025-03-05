import { HeroContent } from "./HeroContent";
import { HeroImage } from "./HeroImage";

export function HeroSection() {
  return (
    <section className="mx-auto grid max-w-7xl grid-cols-1 px-4 pt-4 pb-10 md:grid-cols-2 md:gap-x-3 md:py-6 lg:items-start lg:gap-x-0 lg:pt-7 lg:pb-[186px]">
      <HeroContent />
      <HeroImage />
    </section>
  );
}
