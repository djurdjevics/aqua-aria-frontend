import EmblaCarousel, { type EmblaOptionsType } from "embla-carousel";
import { setupTweenParallax } from "./EmblaCarouselTweenParallax";
import { addPrevNextBtnsClickHandlers } from "./EmblaCarouselArrowButtons";
import "../../../styles/embla.css";

const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true };

const emblaNode = <HTMLElement>document.querySelector(".embla");
const viewportNode = <HTMLElement>emblaNode.querySelector(".embla__viewport");
const prevBtn = <HTMLElement>emblaNode.querySelector(".embla__button--prev");
const nextBtn = <HTMLElement>emblaNode.querySelector(".embla__button--next");
const dotsNode = <HTMLElement>document.querySelector(".embla__dots");

const emblaApi = EmblaCarousel(viewportNode, OPTIONS);
const removeTweenParallax = setupTweenParallax(emblaApi);

const removePrevNextBtnsClickHandlers = addPrevNextBtnsClickHandlers(
  emblaApi,
  prevBtn,
  nextBtn,
);

emblaApi
  .on("destroy", removeTweenParallax)
  .on("destroy", removePrevNextBtnsClickHandlers);
