import { useEffect, useMemo, useState } from "react";
import type { Dispenser } from "../../../../types/Dispenser";
import { DispenserImage } from "./DispenserImage";
import { DispenserInfo } from "./DispenserInfo";
import { DispenserPerkMobile } from "./DispenserPerkMobile";
import { cn } from "../../../../utils/cn";

interface DispenserMobileProps {
  dispenser: Dispenser;
}

export function DispenserMobile({ dispenser }: DispenserMobileProps) {
  const [activePerkIndex, setActivePerkIndex] = useState(0);

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let progressTimer: any;

    const switchPerk = () => {
      setActivePerkIndex((prev) => (prev === 2 ? 0 : prev + 1));
      setProgress(0);
    };

    const progressInterval = 50;
    const steps = 5000 / progressInterval;
    const stepIncrement = 100 / steps;

    progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev + stepIncrement >= 100) {
          clearInterval(progressTimer);
          setTimeout(switchPerk, 10);
          return 100;
        }
        return prev + stepIncrement;
      });
    }, progressInterval);

    return () => clearInterval(progressTimer);
  }, [activePerkIndex]);

  const activePerk = useMemo(
    () => dispenser.perks.find((p) => p.id === activePerkIndex),
    [activePerkIndex],
  );

  return (
    <div
      className={cn(
        dispenser.id === 1 ? "pt-[88px] pb-[46px]" : "pt-14",
        "mx-auto grid max-w-7xl grid-cols-1 overflow-hidden px-4 md:grid-cols-2 lg:hidden",
      )}
    >
      {dispenser.imageSide === "left" && (
        <DispenserImage
          side={dispenser.imageSide}
          imageSrc={dispenser.image}
          badge={dispenser.badge}
        />
      )}
      <div className="flex flex-col justify-between md:hidden">
        <DispenserInfo
          imgOnMobile={dispenser.image}
          side="left"
          eyebrowText={dispenser.eyebrow}
          title={dispenser.title}
          description={dispenser.body}
        >
          <div className="mt-4 flex gap-x-4 gap-y-[52px] md:hidden">
            {dispenser.perks.map((perk) => (
              <DispenserPerkMobile
                isTablet={false}
                key={perk.id}
                perk={perk}
                progress={progress}
                isActive={activePerkIndex === perk.id}
              />
            ))}
          </div>
        </DispenserInfo>
        <p className="text-bg/80 mt-3 text-sm lg:hidden">
          <b className="text-bg">{activePerk?.title} - </b>
          {activePerk?.body}
        </p>
      </div>
      <div className="hidden flex-col justify-between md:flex lg:hidden">
        <DispenserInfo
          imgOnMobile={dispenser.image}
          side="left"
          eyebrowText={dispenser.eyebrow}
          title={dispenser.title}
          description={dispenser.body}
        >
          <div className="mt-4 flex gap-x-4 gap-y-[52px] lg:hidden">
            {dispenser.perks.map((perk) => (
              <DispenserPerkMobile
                isTablet={true}
                key={perk.id}
                perk={perk}
                progress={progress}
                isActive={activePerkIndex === perk.id}
              />
            ))}
          </div>
        </DispenserInfo>
        <p className="text-bg/80 mt-3 text-sm lg:hidden">
          <b className="text-bg">{activePerk?.title} - </b>
          {activePerk?.body}
        </p>
      </div>
      {dispenser.imageSide === "right" && (
        <DispenserImage
          side={dispenser.imageSide}
          imageSrc={dispenser.image}
          badge={dispenser.badge}
        />
      )}
    </div>
  );
}
