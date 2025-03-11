import Marquee from "react-fast-marquee";
import { GoogleReviews } from "./GoogleReviews";
import { TestimonialCard } from "./TestimonialCard";
import {
  WaveSecondary,
  WaveSecondaryMobile,
} from "../../../../assets/waves/WaveSecondary";

export function TestimonialsSection() {
  return (
    <>
      <section className="relative grid w-full grid-cols-1 gap-x-5 overflow-hidden py-14 md:grid-cols-[1fr_390px_890px_1fr] md:pt-[120px] md:pb-[240px]">
        <div className="flex flex-col justify-between px-4 md:col-start-2 md:col-end-3">
          <div>
            <h3 className="font-display text-secondary mx-auto max-w-[10ch] text-center text-[40px] leading-none uppercase md:mx-0 md:text-left md:text-7xl">
              Zadovoljni klijenti
            </h3>
            <GoogleReviews className="hidden md:mt-4 md:block" />
          </div>
          <p className="text-secondary/80 hidden max-w-[300px] md:block">
            Ovo su komentari naših klijenata koji sada nikad lakše i
            kvalitetnije hidriraju svoje telo.
          </p>
        </div>
        <div className="md:col-span-2 md:col-start-3">
          <Marquee loop={0} speed={50}>
            <TestimonialCard
              quote={"Vrhunski kvalitet usluge, svaka preporuka!"}
              img="avatar.svg"
              fullName="Antonije Erdeljan"
              location="Novi Sad, Srbija"
            />
            <TestimonialCard
              quote={
                "Odlicna usluga, prilikom porucivanja voda stize u istom danu"
              }
              img="avatar.svg"
              fullName="Ognjen Radivojević"
              location="Zrenjanin, Srbija"
            />
            <TestimonialCard
              quote={"Aparat servisiran u dogovorenom roku. Svaka preporuka!"}
              img="avatar.svg"
              fullName="Jovan Cvetkov"
              location="Beograd, Srbija"
            />
            <TestimonialCard
              quote={
                "Svaka čast za kompaniju, efikasna i profesionalna pre svega. Voda odlična."
              }
              img="avatar.svg"
              fullName="Dušan Runjevac"
              location="Zrenjanin, Srbija"
            />
          </Marquee>
        </div>
        <div className="mt-7 flex flex-col items-center justify-between gap-y-3 px-4 pb-4 text-center md:hidden md:flex-row md:justify-start md:text-left">
          <GoogleReviews className="block" />
          <p className="text-secondary/80 block max-w-[200px] text-sm">
            Ovo su komentari naših klijenata koji sada nikad lakše i
            kvalitetnije hidriraju svoje telo.
          </p>
        </div>
        <WaveSecondaryMobile />
      </section>
    </>
  );
}
