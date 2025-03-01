import { useMemo, useState } from "react";
import { cn } from "../../../../utils/cn";
import { buttonVariants } from "../../../Button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../../../Carousel";
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
    return availableWaterTypes.find((value) => value.index === activeSlideIndex);
  }, [activeSlideIndex]);

  return (
    <SectionContainer className="py-[120px] grid grid-cols-2">
      <div className="flex flex-col justify-between h-full items-start">
        <div>
          <h2 className="font-display text-secondary text-[9rem] leading-[98%]">{activeSlideContent?.title}</h2>
          <p className="text-secondary/80 mt-3">{activeSlideContent?.description}</p>
          <div className="flex items-center gap-x-2 mt-4">
            <img src="/leaft-icon.svg" className="w-[18px] h-[18px]" />
            <span className="uppercase font-semibold text-green">100% reciklabilno</span>
          </div>
        </div>
        <a className={cn(buttonVariants({ variant: "default" }))}>Katalog</a>
      </div>
      <div>
        <Carousel className="max-w-full">
          <CarouselContent>
            <CarouselItem>
              <img src="/aquanika-slide-1.png" className="w-auto mx-auto" width={400} height={550} />
            </CarouselItem>
            <CarouselItem>
              <img src="/aquanika-slide-1.png" className="w-auto mx-auto" width={400} height={550} />
            </CarouselItem>
            <CarouselItem>
              <img src="/aquanika-slide-1.png" className="w-auto mx-auto" width={400} height={550} />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious
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
      </div>
    </SectionContainer>
  );
}
