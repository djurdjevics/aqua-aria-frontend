import type { Icon } from "../../../../types/Icon";

interface DispenserPerkProps {
  perk: {
    id: number;
    body: string;
    title: string;
    Icon: Icon;
  };
}

export function DispenserPerk({ perk }: DispenserPerkProps) {
  const { id, body, title, Icon } = perk;

  return (
    <div className="hidden md:flex md:items-center md:gap-x-6">
      <div className="bg-primary flex h-14 w-14 shrink-0 items-center justify-center rounded-full p-4">
        <Icon className="h-5 w-5" />
      </div>
      <p className="text-bg">
        <span className="font-semibold">{title} - </span>
        {body}
      </p>
    </div>
  );
}
