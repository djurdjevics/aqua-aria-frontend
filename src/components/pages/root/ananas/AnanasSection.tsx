import { cn } from "../../../../utils/cn";
import { AnanasLogo } from "../../../AnanasLogo";
import { buttonVariants } from "../../../Button";
import { SectionContainer } from "../../../SectionContainer";

export function AnanasSection() {
  return (
    <div className="bg-secondary py-[92px] my-[154px]">
      <SectionContainer className="flex items-end justify-between">
        <div className="-mt-[328px] w-[18.75rem] ml-20">
          <img src="ananas.png" className="w-full" width={300} height={680} alt="Ananas fruit" />
        </div>
        <div>
          <AnanasLogo />
          <h3 className="font-display text-bg text-7xl uppercase mt-3 leading-[100%] max-w-2xl">Poruči naše proizvode putem ananas platforme</h3>
          <p className="text-white/80 mt-3 max-w-[480px]">
            U saradnji sa ananas platformom za online kupovinu, sada naše proizvode možete poručiti i putem njihove veb prodavnice.
          </p>
          <a className={cn(buttonVariants({ variant: "default" }), "mt-6")}>Poruči</a>
        </div>
      </SectionContainer>
    </div>
  );
}
