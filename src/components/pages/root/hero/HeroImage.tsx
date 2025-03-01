export function HeroImage() {
  return (
    <div className="w-full flex justify-end">
      <div className="rounded-2xl relative overflow-hidden w-[600px]">
        <img src="/hero-image.jpg" className="object-cover" />
        <div className="absolute inset-0 bg-white/10 z-10" />
      </div>
    </div>
  );
}
