export function Eyebrow({ text }: { text: string }) {
  return (
    <div className="border-primary text-primary inline-block rounded-full border px-[10px] py-[6px] text-[9px] font-semibold sm:px-5 sm:py-2 sm:text-[11px] md:px-5 md:py-2 md:text-sm lg:px-7 lg:py-2.5">
      {text}
    </div>
  );
}
