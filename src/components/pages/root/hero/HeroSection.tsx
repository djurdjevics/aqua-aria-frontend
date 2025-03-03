import { HeroContent } from "./HeroContent";
import { HeroImage } from "./HeroImage";

export function HeroSection() {
  return (
    <section className="mx-auto grid max-w-7xl grid-cols-1 items-end gap-x-3 px-4 pt-4 pb-10 md:grid-cols-2 md:py-7">
      <HeroContent />
      <HeroImage />
    </section>
  );
}
