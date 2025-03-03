import Marquee from "react-fast-marquee";
import { GoogleReviews } from "./GoogleReviews";
import { TestimonialCard } from "./TestimonialCard";

export function TestimonialsSection() {
  return (
    <>
      <section className="relative grid w-full grid-cols-1 gap-x-5 py-14 md:grid-cols-[1fr_390px_890px_1fr] md:pt-[120px] md:pb-[240px]">
        <div className="flex flex-col justify-between px-4 md:col-start-2 md:col-end-3">
          <div>
            <h3 className="font-display text-secondary mx-auto max-w-[10ch] text-center text-[40px] leading-none uppercase md:text-left md:text-7xl">
              Zadovoljni klijenti
            </h3>
            <GoogleReviews className="hidden md:block" />
          </div>
          <p className="text-secondary/80 hidden max-w-[300px] md:block">
            Ovo su komentari naših klijenata koji sada nikad lakše i
            kvalitetnije hidriraju svoje telo.
          </p>
        </div>
        <div className="md:col-span-2 md:col-start-3">
          <Marquee loop={0} speed={50}>
            <TestimonialCard
              quote={
                "Aparat je servisiran perfektno, u dogovorenom roku. Sve pohvale za momke!"
              }
              img="avatar-1.jpg"
              fullName="Mika Mikic"
              location="Zrenjanin, Serbia"
            />
            <TestimonialCard
              quote={
                "Aparat je servisiran perfektno, u dogovorenom roku. Sve pohvale za momke!"
              }
              img="img-1.jpg"
              fullName="Mika Mikic"
              location="Zrenjanin, Serbia"
            />
            <TestimonialCard
              quote={
                "Aparat je servisiran perfektno, u dogovorenom roku. Sve pohvale za momke!"
              }
              img="img-1.jpg"
              fullName="Mika Mikic"
              location="Zrenjanin, Serbia"
            />
            <TestimonialCard
              quote={
                "Aparat je servisiran perfektno, u dogovorenom roku. Sve pohvale za momke!"
              }
              img="img-1.jpg"
              fullName="Mika Mikic"
              location="Zrenjanin, Serbia"
            />
          </Marquee>
        </div>
        <div className="mt-7 flex flex-col items-center justify-between gap-y-3 px-4 text-center md:hidden md:flex-row md:text-left">
          <GoogleReviews className="block" />
          <p className="text-secondary/80 block max-w-[200px] text-sm">
            Ovo su komentari naših klijenata koji sada nikad lakše i
            kvalitetnije hidriraju svoje telo.
          </p>
        </div>
      </section>
      <img src="/under-hero-wave.svg" className="w-full" />
    </>
  );
}
