interface DispenserPerkProps {
  title: string;
  body: string;
  icon: string;
}

export function DispenserPerk({ title, body, icon }: DispenserPerkProps) {
  return (
    <div className="flex items-center gap-x-6">
      <div className="rounded-full shrink-0 p-4 w-14 h-14 bg-primary flex items-center justify-center">
        <img src={icon} alt={title} width={20} height={20} className="" />
      </div>
      <p className="text-bg">
        <span className="font-semibold">{title} - </span>
        {body}
      </p>
    </div>
  );
}
