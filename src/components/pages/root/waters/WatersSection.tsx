import { useMemo, useState } from "react";
import { cn } from "../../../../utils/cn";
import { buttonVariants } from "../../../Button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../Carousel";
import { SectionContainer } from "../../../SectionContainer";

const availableWaterTypes = [
  // {
  //   index: 0,
  //   title: "Aquanika",
  //   description:
  //     "Naša CrystalPure voda dolazi iz prirodnih izvora i pažljivo je filtrirana kako bi pružila najviši kvalitet i osveženje. Ova voda je idealna svakodnevnu upotrebu, bilo da je koristite za piće, kuvanje, ili rad u kancelariji. Kristalno čista i bogata mineralima, CrystalPure je pravi izbor za zdrav život.",
  //   img: "/slide-1-img.png",
  // },
  {
    index: 1,
    title: "Ledena",
    img: "/slide-1-img.png",
    description:
      "Naša CrystalPure voda dolazi iz prirodnih izvora i pažljivo je filtrirana kako bi pružila najviši kvalitet i osveženje. Ova voda je idealna svakodnevnu upotrebu, bilo da je koristite za piće, kuvanje, ili rad u kancelariji. Kristalno čista i bogata mineralima, CrystalPure je pravi izbor za zdrav život.",
  },
  // {
  //   index: 2,
  //   title: "Kremanska",
  //   img: "/slide-1-img.png",
  //   description:
  //     "Naša CrystalPure voda dolazi iz prirodnih izvora i pažljivo je filtrirana kako bi pružila najviši kvalitet i osveženje. Ova voda je idealna svakodnevnu upotrebu, bilo da je koristite za piće, kuvanje, ili rad u kancelariji. Kristalno čista i bogata mineralima, CrystalPure je pravi izbor za zdrav život.",
  // },
];

export function WatersSection() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-14 lg:py-[120px]">
      <Carousel>
        <CarouselContent>
          {availableWaterTypes.map((waterType) => (
            <CarouselItem key={waterType.index}>
              <div className="grid grid-cols-1 md:grid-cols-2 md:items-center md:justify-items-center md:gap-x-4">
                <div className="flex h-full flex-col items-start justify-between md:justify-center md:self-center md:justify-self-center">
                  <div>
                    <h2 className="font-display text-secondary text-[56px] leading-[100%] md:text-[68px] lg:text-[80px] xl:text-[9rem] xl:leading-[98%]">
                      {waterType?.title}
                    </h2>
                    <p className="text-secondary/80 mt-3 text-sm lg:text-base">
                      {waterType?.description}
                    </p>
                    <div className="mt-6 flex items-center gap-x-2 md:mt-4">
                      <img
                        src="/leaft-icon.svg"
                        className="h-[18px] w-[18px]"
                      />
                      <span className="text-green text-base font-semibold uppercase">
                        100% reciklabilno
                      </span>
                    </div>
                  </div>
                  <a
                    className={cn(
                      buttonVariants({ variant: "default" }),
                      "hidden md:mt-[4.5rem] md:inline-block",
                    )}
                  >
                    Katalog
                  </a>
                </div>
                <div className="mx-auto mt-9 max-w-[217px] lg:max-w-[250px]">
                  <img src={waterType.img} alt={waterType.title} />
                </div>

                <a
                  className={cn(
                    buttonVariants({ variant: "default" }),
                    "mx-auto mt-[44px] inline-block text-center md:hidden",
                  )}
                >
                  Katalog
                </a>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute bottom-[50vw] z-20 sm:bottom-[40vw] md:top-1/2 md:left-[50vw] lg:left-[48vw]" />
        <CarouselNext className="absolute right-0 bottom-[50vw] z-20 sm:bottom-[40vw] md:top-1/2 lg:right-[6vw]" />
      </Carousel>
    </section>
  );
}
