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
  {
    index: 0,
    title: "Aquanika",
    description:
      "Naša CrystalPure voda dolazi iz prirodnih izvora i pažljivo je filtrirana kako bi pružila najviši kvalitet i osveženje. Ova voda je idealna svakodnevnu upotrebu, bilo da je koristite za piće, kuvanje, ili rad u kancelariji. Kristalno čista i bogata mineralima, CrystalPure je pravi izbor za zdrav život.",
  },
  {
    index: 1,
    title: "Ledena",
    description:
      "Naša CrystalPure voda dolazi iz prirodnih izvora i pažljivo je filtrirana kako bi pružila najviši kvalitet i osveženje. Ova voda je idealna svakodnevnu upotrebu, bilo da je koristite za piće, kuvanje, ili rad u kancelariji. Kristalno čista i bogata mineralima, CrystalPure je pravi izbor za zdrav život.",
  },
  {
    index: 2,
    title: "Kremanska",
    description:
      "Naša CrystalPure voda dolazi iz prirodnih izvora i pažljivo je filtrirana kako bi pružila najviši kvalitet i osveženje. Ova voda je idealna svakodnevnu upotrebu, bilo da je koristite za piće, kuvanje, ili rad u kancelariji. Kristalno čista i bogata mineralima, CrystalPure je pravi izbor za zdrav život.",
  },
];

export function WatersSection() {
  const [activeSlideIndex, setActiveSlideIndex] = useState<0 | 1 | 2>(0);

  const activeSlideContent = useMemo(() => {
    return availableWaterTypes.find(
      (value) => value.index === activeSlideIndex,
    );
  }, [activeSlideIndex]);

  return (
    <SectionContainer className="grid grid-cols-1 py-14 md:grid-cols-2 md:py-[120px]">
      <div className="flex h-full flex-col items-start justify-between">
        <div>
          <h2 className="font-display text-secondary text-[56px] leading-[100%] md:text-[9rem] md:leading-[98%]">
            {activeSlideContent?.title}
          </h2>
          <p className="text-secondary/80 mt-3 text-sm md:text-base">
            {activeSlideContent?.description}
          </p>
          <div className="mt-6 flex items-center gap-x-2 md:mt-4">
            <img src="/leaft-icon.svg" className="h-[18px] w-[18px]" />
            <span className="text-green text-base font-semibold uppercase">
              100% reciklabilno
            </span>
          </div>
        </div>
        <a
          className={cn(
            buttonVariants({ variant: "default" }),
            "hidden md:inline-block",
          )}
        >
          Katalog
        </a>
      </div>
      <Carousel className="relative mt-9 md:max-w-full">
        <CarouselContent className="mx-auto">
          <CarouselItem className="mx-auto">
            <div className="mx-auto h-[400px] w-[200px]">
              <img
                src="/aquanika-slide-1.png"
                className="mx-auto w-auto"
                width={200}
                height={400}
              />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="mx-auto h-[400px] w-[200px]">
              <img
                src="/aquanika-slide-1.png"
                className="mx-auto w-auto"
                width={200}
                height={400}
              />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="mx-auto h-[400px] w-[200px]">
              <img
                src="/aquanika-slide-1.png"
                className="mx-auto w-auto"
                width={200}
                height={400}
              />
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious
          className="absolute top-1/2 left-0 -translate-y-1/2"
          activeIndex={activeSlideIndex}
          onClick={() => {
            setActiveSlideIndex((curr) => {
              if (curr > 0) {
                return (curr - 1) as 0 | 1 | 2;
              } else {
                return 0;
              }
            });
          }}
        />
        <CarouselNext
          className="absolute top-1/2 right-0 -translate-y-1/2"
          activeIndex={activeSlideIndex}
          onClick={() => {
            setActiveSlideIndex((curr) => {
              if (curr < 2) {
                return (curr + 1) as 0 | 1 | 2;
              } else {
                return 2;
              }
            });
          }}
        />
      </Carousel>
      <div className="mx-auto mt-[44px]">
        <a
          className={cn(
            buttonVariants({ variant: "default" }),
            "inline-block md:hidden",
          )}
        >
          Katalog
        </a>
      </div>
    </SectionContainer>
  );
}
