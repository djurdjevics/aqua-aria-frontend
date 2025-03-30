import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@components/Carousel.tsx";

export default function ImagesCarousel({
  images,
}: {
  images: ImageMetadata[];
}) {
  return (
    <Carousel>
      <CarouselContent className="h-full gap-x-2">
        {images.map((image) => (
          <CarouselItem
            className={
              "relative h-[26rem] basis-4/5 overflow-hidden rounded-2xl"
            }
            key={image.src}
          >
            <img
              src={image.src}
              width={image.width}
              height={image.height}
              className={"h-full w-full object-cover"}
              alt={"Slide image"}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
