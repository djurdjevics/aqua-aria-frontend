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
    body: "Glacier White je kompresorski aparat koji omogućava brzo hlađenje vode na nižim temperaturama i veći kapacitet hladne vode, što ga čini savršenim za veće potrebe i pruža dugoročnu pouzdanost.",
    eyebrow: "Kompresorski aparat",
    image: "/glacier_white_side_open_shadow.jpg",
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
    body: "Harmony White je stoni termoelektrični aparat za vodu je kompaktan i energetski efikasan, pružajući povoljan izbor za manje prostore i sa pristupačnom cenom.",
    eyebrow: "Termoelektrični aparat",
    image: "/harmony_white_front_shadow.jpg",
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
