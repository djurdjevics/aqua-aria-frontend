import type { Icon } from "../../../../types/Icon";

interface DispenserPerkProps {
  perk: {
    id: number;
    body: string;
    title: string;
    icon: string;
  };
}

export function DispenserPerk({ perk }: DispenserPerkProps) {
  const { id, body, title, icon } = perk;

  return (
    <div className="hidden md:flex md:items-center md:gap-x-6 lg:w-[450px]">
      <div className="bg-primary flex h-14 w-14 shrink-0 items-center justify-center rounded-full p-4">
        <img src={icon} className="h-5 w-5" />
      </div>
      <p className="text-bg">
        <span className="font-semibold">{title} - </span>
        {body}
      </p>
    </div>
  );
}
