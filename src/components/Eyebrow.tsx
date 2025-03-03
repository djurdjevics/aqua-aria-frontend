export function Eyebrow({ text }: { text: string }) {
  return (
    <div className="border-primary text-primary inline-block rounded-full border px-[10px] py-[6px] text-[9px] font-semibold md:px-7 md:py-2.5 md:text-sm">
      {text}
    </div>
  );
}
