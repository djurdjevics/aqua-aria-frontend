import { Carousel, CarouselContent, CarouselItem } from "@components/Carousel.tsx";


export default function ImagesCarousel({ images }: {images: ImageMetadata[]}) {
  return <Carousel>
    <CarouselContent className="gap-x-2 h-full">
      {images.map(image => (<CarouselItem className={"basis-4/5 rounded-2xl overflow-hidden relative h-[26rem]"} key={image.src}>
        <img src={image.src} width={image.width} height={image.height} className={"w-full h-full object-cover"} alt={"Slide image"} />
      </CarouselItem>))}
    </CarouselContent>
  </Carousel>;
}