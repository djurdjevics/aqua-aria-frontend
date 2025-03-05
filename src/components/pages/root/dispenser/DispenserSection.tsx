import { buttonVariants } from "../../../Button";
import { DispenserImage } from "./DispenserImage";
import { DispenserInfo } from "./DispenserInfo";
import { DispenserPerk } from "./DispenserPerk";
import { SnowIcon } from "../../../../assets/icons/SnowIcon";
import { DropletIcon } from "../../../../assets/icons/DropletIcon";
import { LightBulbIcon } from "../../../../assets/icons/LightBulbIcon";
import { DispenserMobile } from "./DispenserMobile";
import { BoxIcon } from "../../../../assets/icons/BoxIcon";
import { AudioIcon } from "../../../../assets/icons/AudioIcon";
import { DollarIcon } from "../../../../assets/icons/DollarIcon";
import type { Dispenser } from "../../../../types/Dispenser";

const dispensers: Dispenser[] = [
  {
    id: 0,
    title: "Glacier white",
    body: "Generalni opis proizvoda. Tekst u kome se tgovori o tome gde i kako je ovaj proizvod najbolje upotrebiti. Ubaciti se u ulogu klijenta i shvatiti za koje potrebe je njima potreban bas ovaj aparat",
    eyebrow: "Kompresorski aparat",
    image: "/glacier-white.jpg",
    perks: [
      {
        id: 0,
        title: "Hlađenje",
        body: "Aparat koristi napredni kompresorski sistem koji omogućava brzo i pouzdano hlađenje vode, čak i u toplim uslovima.",
        Icon: SnowIcon,
      },
      {
        id: 1,
        title: "Kapacitet",
        body: "Dizajniran za dugotrajnu upotrebu i veći protok vode, idealan za kancelarije i komercijalne prostore.",
        Icon: DropletIcon,
      },
      {
        id: 2,
        title: "Efikasnost",
        body: "Aparat koristi energetski efikasan kompresorski sistem koji štedi struju i smanjuje troškove.",
        Icon: LightBulbIcon,
      },
    ],
    imageSide: "right",
    badge: "new",
  },
  {
    id: 1,
    title: "Harmony white",
    body: "Generalni opis proizvoda. Tekst u kome se tgovori o tome gde i kako je ovaj proizvod najbolje upotrebiti. Ubaciti se u ulogu klijenta i shvatiti za koje potrebe je njima potreban bas ovaj aparat",
    eyebrow: "Termoelektrični aparat",
    image: "/harmony-white.png",
    perks: [
      {
        id: 0,
        title: "Dizajn",
        body: "Termoelektrični aparati su manjih dimenzija, idealni za manje prostore i lako prenosivi.",
        Icon: BoxIcon,
      },
      {
        id: 1,
        title: "Tihi rad",
        body: "Ovi aparati rade gotovo nečujno, što ih čini savršenim za kancelarije, spavaće sobe i kuhinje.",
        Icon: AudioIcon,
      },
      {
        id: 2,
        title: "Pristupačna cena i održavanje",
        body: "Termoelektrični aparati su ekonomična opcija sa niskim troškovima održavanja.",
        Icon: DollarIcon,
      },
    ],
    imageSide: "left",
    badge: "popular",
  },
];

export function DispenserSection() {
  return (
    <section className="bg-secondary pb-14 md:pt-[120px] md:pb-[4.5rem] lg:pb-[120px]">
      {dispensers.map((dispenser) => (
        <DispenserMobile key={dispenser.id} dispenser={dispenser} />
      ))}
      {dispensers.map((dispenser) => (
        <div
          key={dispenser.id}
          className="mx-auto hidden max-w-7xl grid-cols-1 px-4 pt-14 pb-[88px] lg:grid lg:grid-cols-2 lg:gap-x-4 lg:pt-24 lg:pb-28"
        >
          {dispenser.imageSide === "left" && (
            <DispenserImage
              side={dispenser.imageSide}
              imageSrc={dispenser.image}
              badge={dispenser.badge}
            />
          )}
          <DispenserInfo
            imgOnMobile={dispenser.image}
            side="left"
            eyebrowText={dispenser.eyebrow}
            title={dispenser.title}
            description={dispenser.body}
          >
            <div className="mt-4 flex gap-x-4 gap-y-[52px] md:mt-[70px] lg:flex-col">
              {dispenser.perks.map((perk) => (
                <DispenserPerk key={perk.id} perk={perk} />
              ))}
            </div>
          </DispenserInfo>
          {dispenser.imageSide === "right" && (
            <DispenserImage
              side={dispenser.imageSide}
              imageSrc={dispenser.image}
              badge={dispenser.badge}
            />
          )}
        </div>
      ))}
      <div className="flex w-full items-center justify-center">
        <a
          href="/katalog"
          className={buttonVariants({ variant: "default", size: "default" })}
        >
          Vidi sve proizvode
        </a>
      </div>
    </section>
  );
}
