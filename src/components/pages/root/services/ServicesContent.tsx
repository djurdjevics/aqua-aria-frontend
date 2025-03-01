import { ServicesCard } from "./ServicesCard";

export function ServicesContent() {
  return (
    <div className="flex gap-x-4 mt-12">
      <ServicesCard
        index={"01"}
        title={"Servis aparata"}
        description={
          "Naša firma pruža usluge servisa aparata za vodu direktno na vašoj adresi, osiguravajući brz i efikasan popravak kako biste nesmetano uživali u čistoj vodi."
        }
        href={"/usluge#servis-aparata"}
      />
      <ServicesCard
        index={"02"}
        title={"Sanacija aparata"}
        description={
          "Naša firma pruža usluge servisa aparata za vodu direktno na vašoj adresi, osiguravajući brz i efikasan popravak kako biste nesmetano uživali u čistoj vodi."
        }
        href={"/usluge#servis-aparata"}
      />
      <ServicesCard
        index={"03"}
        title={"Otkup aparata"}
        description={
          "Naša firma pruža usluge servisa aparata za vodu direktno na vašoj adresi, osiguravajući brz i efikasan popravak kako biste nesmetano uživali u čistoj vodi."
        }
        href={"/usluge#servis-aparata"}
      />
      <ServicesCard
        index={"04"}
        title={"Prodaja aparata"}
        description={
          "Naša firma pruža usluge servisa aparata za vodu direktno na vašoj adresi, osiguravajući brz i efikasan popravak kako biste nesmetano uživali u čistoj vodi."
        }
        href={"/usluge#servis-aparata"}
      />
      <ServicesCard
        index={"05"}
        title={"Distribucija vode"}
        description={
          "Naša firma pruža usluge servisa aparata za vodu direktno na vašoj adresi, osiguravajući brz i efikasan popravak kako biste nesmetano uživali u čistoj vodi."
        }
        href={"/usluge#servis-aparata"}
      />
      <ServicesCard
        index={"06"}
        title={"Prodaja vode"}
        description={
          "Naša firma pruža usluge servisa aparata za vodu direktno na vašoj adresi, osiguravajući brz i efikasan popravak kako biste nesmetano uživali u čistoj vodi."
        }
        href={"/usluge#servis-aparata"}
      />
    </div>
  );
}
