import { cn } from "../../../../utils/cn";
import { AnanasLogo } from "../../../AnanasLogo";
import { buttonVariants } from "../../../Button";
import { SectionContainer } from "../../../SectionContainer";

export function AnanasSection() {
  return (
    <div className="bg-secondary py-14 md:my-[154px] md:py-[66px]">
      <SectionContainer className="items-end justify-between md:flex md:items-end md:gap-x-5">
        <div className="relative ml-20 hidden w-full md:mx-auto md:-mt-[300px] md:block md:w-[215px] md:shrink-0 lg:-mt-[328px] lg:w-[18.75rem]">
          <img
            src="ananas.png"
            className="hidden w-full object-cover md:block md:h-full md:w-full"
            width={300}
            height={680}
            alt="Ananas fruit"
          />
        </div>
        <div className="flex flex-col items-center md:block md:pb-6">
          <AnanasLogo className="h-7 w-[74px]" />
          <h3 className="font-display text-bg mt-[14px] max-w-[15ch] text-center text-[40px] leading-[100%] uppercase md:mt-3 md:max-w-[20ch] md:text-left md:text-5xl lg:max-w-2xl lg:text-7xl">
            Poruči naše proizvode putem ananas platforme
          </h3>
          <p className="mt-3 max-w-[280px] text-center text-sm text-white/80 md:max-w-[480px] md:text-left lg:text-base">
            U saradnji sa ananas platformom za online kupovinu, sada naše
            proizvode možete poručiti i putem njihove veb prodavnice.
          </p>
          <a className={cn(buttonVariants({ variant: "default" }), "mt-6")}>
            Poruči
          </a>
        </div>
      </SectionContainer>
    </div>
  );
}
