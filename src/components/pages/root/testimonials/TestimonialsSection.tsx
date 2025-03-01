import Marquee from "react-fast-marquee";
import { GoogleReviews } from "./GoogleReviews";
import { TestimonialCard } from "./TestimonialCard";

export function TestimonialsSection() {
  return (
    <section className="grid grid-cols-[1fr_390px_890px_1fr] w-full pt-[120px] pb-[240px] gap-x-5 relative">
      <div className="col-start-2 col-end-3 flex flex-col justify-between">
        <div>
          <h3 className="text-7xl uppercase font-display text-secondary">Zadovoljni klijenti</h3>
          <GoogleReviews />
        </div>
        <p className="text-secondary/80 max-w-[300px]">Ovo su komentari naših klijenata koji sada nikad lakše i kvalitetnije hidriraju svoje telo.</p>
      </div>
      <div className="col-start-3 col-span-2">
        <Marquee loop={0} speed={100}>
          <TestimonialCard
            quote={"Aparat je servisiran perfektno, u dogovorenom roku. Sve pohvale za momke!"}
            img="avatar-1.jpg"
            fullName="Mika Mikic"
            location="Zrenjanin, Serbia"
          />
          <TestimonialCard
            quote={"Aparat je servisiran perfektno, u dogovorenom roku. Sve pohvale za momke!"}
            img="img-1.jpg"
            fullName="Mika Mikic"
            location="Zrenjanin, Serbia"
          />
          <TestimonialCard
            quote={"Aparat je servisiran perfektno, u dogovorenom roku. Sve pohvale za momke!"}
            img="img-1.jpg"
            fullName="Mika Mikic"
            location="Zrenjanin, Serbia"
          />
          <TestimonialCard
            quote={"Aparat je servisiran perfektno, u dogovorenom roku. Sve pohvale za momke!"}
            img="img-1.jpg"
            fullName="Mika Mikic"
            location="Zrenjanin, Serbia"
          />
        </Marquee>
      </div>
      <img src="/under-hero-wave.svg" className="w-full absolute bottom-0" />
    </section>
  );
}
