import useEmblaCarousel from "embla-carousel-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../Carousel";
import { ServicesCard } from "./ServicesCard";
import { services } from "./ServicesSection";
import { cn } from "../../../../utils/cn";
import { buttonVariants } from "../../../Button";

export function ServicesContentMobile() {
  return (
    <Carousel className="mt-9 w-full">
      <CarouselContent className="gap-x-4 pr-24">
        {services.map((service) => (
          <CarouselItem key={service.id}>
            <ServicesCard service={service} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="mt-6 flex flex-row items-center justify-between gap-y-4">
        <a
          href="/kontakt"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "inline-block md:hidden",
          )}
        >
          Kontakt
        </a>
        <div className="flex h-full w-full items-center justify-end gap-x-3">
          <CarouselPrevious className="h-10 w-10" />
          <CarouselNext className="h-10 w-10" />
        </div>
      </div>
    </Carousel>
  );
}
