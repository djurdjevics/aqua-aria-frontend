interface TestimonialCardProps {
  quote: string;
  img: string;
  fullName: string;
  location: string;
}

export function TestimonialCard({ quote, img, fullName, location }: TestimonialCardProps) {
  return (
    <div className="w-[400px] h-[480px] flex flex-col justify-between rounded-2xl bg-secondary p-8 mr-4 relative">
      <blockquote className="text-[2rem] text-bg max-w-[320px]">"{quote}"</blockquote>
      <div className="flex items-center text-bg gap-x-4">
        <div className="rounded-full w-[74px] h-[74px] overflow-hidden">
          <img src={img} alt={`${fullName} profile photo`} width={74} height={74} />
        </div>
        <div>
          <p className="text-[20px] font-semibold">{fullName}</p>
          <p className="text-bg/80">{location}</p>
        </div>
      </div>
    </div>
  );
}
