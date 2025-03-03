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
      "Naša firma pruža usluge servisa aparata za vodu direktno na vašoj adresi, osiguravajući brz i efikasan popravak kako biste nesmetano uživali u čistoj vodi.",
  },
  {
    id: "02",
    title: "Servis aparata",
    href: "/usluge#servis-aparata",
    description:
      "Naša firma pruža usluge servisa aparata za vodu direktno na vašoj adresi, osiguravajući brz i efikasan popravak kako biste nesmetano uživali u čistoj vodi.",
  },
  {
    id: "03",
    title: "Servis aparata",
    href: "/usluge#servis-aparata",
    description:
      "Naša firma pruža usluge servisa aparata za vodu direktno na vašoj adresi, osiguravajući brz i efikasan popravak kako biste nesmetano uživali u čistoj vodi.",
  },
  {
    id: "04",
    title: "Servis aparata",
    href: "/usluge#servis-aparata",
    description:
      "Naša firma pruža usluge servisa aparata za vodu direktno na vašoj adresi, osiguravajući brz i efikasan popravak kako biste nesmetano uživali u čistoj vodi.",
  },
  {
    id: "05",
    title: "Servis aparata",
    href: "/usluge#servis-aparata",
    description:
      "Naša firma pruža usluge servisa aparata za vodu direktno na vašoj adresi, osiguravajući brz i efikasan popravak kako biste nesmetano uživali u čistoj vodi.",
  },
  {
    id: "06",
    title: "Servis aparata",
    href: "/usluge#servis-aparata",
    description:
      "Naša firma pruža usluge servisa aparata za vodu direktno na vašoj adresi, osiguravajući brz i efikasan popravak kako biste nesmetano uživali u čistoj vodi.",
  },
];

export function ServicesSection() {
  return (
    <div className="bg-secondary py-14 md:py-[120px]">
      <SectionContainer className="hidden md:block">
        <ServicesHeader />
        <ServicesContent />
      </SectionContainer>
      <section className="px-4">
        <ServicesHeader />
        <ServicesContentMobile />
      </section>
    </div>
  );
}
