import { SectionContainer } from "../../../SectionContainer";
import { ServicesContent } from "./ServicesContent";
import { ServicesContentMobile } from "./ServicesContentMobile";
import { ServicesHeader } from "./ServicesHeader";

export const services = [
  {
    id: "01",
    title: "Servis aparata",
    href: "/usluge#servis-aparata",
    description:
      "Naš tim pruža usluge popravke aparata, osiguravajući da vaša voda ostane higijenski ispravna i sveža.",
  },
  {
    id: "02",
    title: "Sanitacija aparata",
    href: "/usluge#sanitacija-aparata",
    description:
      "Sanitacija aparata podrazumeva detaljno čišćenje, dezinfekciju i obnovu kako bi uređaj ponovo bio potpuno funkcionalan i siguran za upotrebu.",
  },
  {
    id: "03",
    title: "Otkup aparata",
    href: "/usluge#otkup-aparata",
    description:
      "Ukoliko posedujete aparat za vodu koji vam više nije potreban, nudimo mogućnost otkupa po fer i konkurentnim uslovima.",
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
    description:
      "Naša usluga distribucije vode omogućava vam jednostavan i pouzdan način da obezbedite kvalitetnu vodu za vaš dom ili poslovni prostor.",
  },
  {
    id: "06",
    title: "Dostava vode",
    href: "/usluge#dostava-vode",
    description:
      "Naša firma uz prodaju nudi usluge isporuke vode direktno na vašu adresu brzo i fleksibilno.",
  },
];

export function ServicesSection() {
  return (
    <div className="bg-secondary py-14 md:py-[4.5rem] lg:py-[120px]">
      <SectionContainer className="hidden lg:block">
        <ServicesHeader />
        <ServicesContent />
      </SectionContainer>
      <section className="px-4 lg:hidden">
        <ServicesHeader />
        <ServicesContentMobile />
      </section>
    </div>
  );
}
