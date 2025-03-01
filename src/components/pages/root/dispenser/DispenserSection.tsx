import { buttonVariants } from "../../../Button";
import { DispenserImage } from "./DispenserImage";
import { DispenserInfo } from "./DispenserInfo";
import { DispenserPerk } from "./DispenserPerk";

export function DispenserSection() {
  return (
    <section className="bg-secondary pb-[120px]">
      <div className="grid grid-cols-2 pt-48 pb-28 max-w-7xl mx-auto px-4">
        <DispenserInfo
          side="left"
          eyebrowText="Kompresorski aparat"
          title="Glacier White"
          description="Generalni opis proizvoda. Tekst u kome se tgovori o tome gde i kako je ovaj proizvod najbolje upotrebiti. Ubaciti se u ulogu klijenta i shvatiti za koje potrebe je njima potreban bas ovaj aparat"
        >
          <div className="flex flex-col gap-y-[52px] mt-[70px]">
            <DispenserPerk
              title="Hlađenje"
              body="Aparat koristi napredni kompresorski sistem koji omogućava brzo i pouzdano hlađenje vode, čak i u toplim uslovima."
              icon="/snow.svg"
            />
            <DispenserPerk
              title="Kapacitet"
              body="Dizajniran za dugotrajnu upotrebu i veći protok vode, idealan za kancelarije i komercijalne prostore."
              icon="/droplet.svg"
            />
            <DispenserPerk
              title="Efikasnost"
              body="Aparat koristi energetski efikasan kompresorski sistem koji štedi struju i smanjuje troškove."
              icon="/lightbulb.svg"
            />
          </div>
        </DispenserInfo>
        <DispenserImage side="right" imageSrc="/glacier-white.jpg" badgeSrc="/new-badge.svg" />
      </div>
      <div className="grid grid-cols-2 pb-28 max-w-7xl mx-auto px-4">
        <DispenserImage side="left" imageSrc="/harmony-white.png" badgeSrc="/popular-badge.svg" />
        <DispenserInfo
          side="right"
          eyebrowText="Termoelektrični aparat"
          title="Harmony White"
          description="Generalni opis proizvoda. Tekst u kome se tgovori o tome gde i kako je ovaj proizvod najbolje upotrebiti. Ubaciti se u ulogu klijenta i shvatiti za koje potrebe je njima potreban bas ovaj aparat"
        >
          <div className="flex flex-col gap-y-[52px] mt-[70px]">
            <DispenserPerk title="Dizajn" body="Termoelektrični aparati su manjih dimenzija, idealni za manje prostore i lako prenosivi." icon="/box.svg" />
            <DispenserPerk
              title="Tihi rad"
              body="Ovi aparati rade gotovo nečujno, što ih čini savršenim za kancelarije, spavaće sobe i kuhinje."
              icon="/audio.svg"
            />
            <DispenserPerk
              title="Pristupačna cena i održavanje"
              body="Termoelektrični aparati su ekonomična opcija sa niskim troškovima održavanja."
              icon="/box.svg"
            />
          </div>
        </DispenserInfo>
      </div>
      <div className="flex w-full items-center justify-center">
        <a href="/katalog" className={buttonVariants({ variant: "default", size: "default" })}>
          Vidi sve proizvode
        </a>
      </div>
    </section>
  );
}
