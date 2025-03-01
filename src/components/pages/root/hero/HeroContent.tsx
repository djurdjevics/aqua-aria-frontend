import { Button, buttonVariants } from "../../../Button";

export function HeroContent() {
  return (
    <div className="overflow-visible relative z-30">
      <h1 className="font-display uppercase leading-[98%] text-[9rem] text-secondary">
        <span className="text-nowrap text-secondary">Kvalitetna voda.</span> Jednostavno <span className="text-primary">dostupna.</span>
      </h1>
      <p className="mt-2 text-secondary/80 max-w-[500px] leading-[140%]">
        Uz naše aparate, uvek imate pristup svežoj i kvalitetnoj vodi bez brige o instalaciji ili održavanju. Jednostavno postavi balon i uživaj u hidraciji
        bilo kada.
      </p>
      <div className="flex items-center gap-x-[18px] mt-[54px]">
        <a href="/katalog" className={buttonVariants({ variant: "default", size: "default" })}>
          Katalog
        </a>
        <a href="/kontakt" className={buttonVariants({ variant: "secondary", size: "default" })}>
          Kontakt
        </a>
      </div>
    </div>
  );
}
