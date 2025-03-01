import { HeroContent } from "./HeroContent";
import { HeroImage } from "./HeroImage";

export function HeroSection() {
  return (
    <section className="grid grid-cols-2 gap-x-3 items-end max-w-7xl mx-auto px-4 py-7">
      <HeroContent />
      <HeroImage />
    </section>
  );
}
