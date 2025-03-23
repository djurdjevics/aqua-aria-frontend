import { useState } from "react";
import { ServicesCard } from "./ServicesCard";

export const services = [
  {
    id: "01",
    title: "Servis aparata",
    href: "/usluge#servis-aparata",
    description: "Naš tim pruža usluge popravke aparata, osiguravajući da vaša voda ostane higijenski ispravna i sveža.",
  },
  {
    id: "02",
    title: "Sanitacija aparata",
    href: "/usluge#sanatacija-aparata",
    description:
      "Sanitacija aparata podrazumeva detaljno čišćenje, dezinfekciju i obnovu kako bi uređaj ponovo bio potpuno funkcionalan i siguran za upotrebu.",
  },
  {
    id: "03",
    title: "Otkup aparata",
    href: "/usluge#otkup-aparata",
    description: "Ukoliko posedujete aparat za vodu koji vam više nije potreban, nudimo mogućnost otkupa po fer i konkurentnim uslovima.",
  },
  {
    id: "04",
    title: "Prodaja aparata",
    href: "/usluge#prodaja-aparata",
    description:
      "Nudimo širok izbor aparata za vodu koji odgovaraju različitim potrebama – bilo da vam je potreban uređaj za kancelariju, ugostiteljski objekat ili vaš dom.",
  },
  {
    id: "05",
    title: "Distribucija vode",
    href: "/usluge#distribucija-vode",
    description: "Naša usluga distribucije vode omogućava vam jednostavan i pouzdan način da obezbedite kvalitetnu vodu za vaš dom ili poslovni prostor.",
  },
  {
    id: "06",
    title: "Dostava vode",
    href: "/usluge#prodaja-vode",
    description: "Naša firma uz prodaju nudi usluge isporuke vode direktno na vašu adresu brzo i fleksibilno.",
  },
];

export function ServicesContent() {
  const [activeServiceIndex, setActiveServiceIndex] = useState<string>("01");

  return (
    <div className="mt-12 hidden gap-x-4 md:flex">
      {services.map((service) => (
        <ServicesCard
          activeServiceIndex={activeServiceIndex}
          setActiveServiceIndex={setActiveServiceIndex}
          key={service.id}
          service={service}
        />
      ))}
    </div>
  );
}
