import { Button, buttonVariants } from "../../../Button";

export function HeroContent() {
  return (
    <div className="relative z-30 md:overflow-visible">
      <h1 className="font-display text-secondary text-left text-[3.5rem] leading-[98%] uppercase md:text-[9rem]">
        <span className="text-secondary md:text-nowrap">Kvalitetna voda.</span>{" "}
        Jednostavno <span className="text-primary">dostupna.</span>
      </h1>
      <p className="text-secondary/80 mt-3 text-sm leading-[140%] md:max-w-[500px] md:text-base">
        Uz naše aparate, uvek imate pristup svežoj i kvalitetnoj vodi bez brige
        o instalaciji ili održavanju. Jednostavno postavi balon i uživaj u
        hidraciji bilo kada.
      </p>
      <div className="mt-4 flex items-center gap-x-5 gap-y-5 md:mt-[54px] md:flex-row md:gap-x-[18px]">
        <a
          href="/katalog"
          className={buttonVariants({ variant: "default", size: "default" })}
        >
          Katalog
        </a>
        <a
          href="/kontakt"
          className={buttonVariants({ variant: "secondary", size: "default" })}
        >
          Kontakt
        </a>
      </div>
    </div>
  );
}
