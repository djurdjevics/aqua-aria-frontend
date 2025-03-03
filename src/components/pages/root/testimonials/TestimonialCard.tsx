interface TestimonialCardProps {
  quote: string;
  img: string;
  fullName: string;
  location: string;
}

export function TestimonialCard({
  quote,
  img,
  fullName,
  location,
}: TestimonialCardProps) {
  return (
    <div className="bg-secondary relative mt-9 mr-[10px] flex h-[270px] w-[220px] flex-col justify-between rounded-2xl p-4 md:mt-0 md:mr-4 md:h-[480px] md:w-[400px] md:p-8">
      <blockquote className="text-bg max-w-[190px] text-xl md:max-w-[320px] md:text-[2rem]">
        "{quote}"
      </blockquote>
      <div className="text-bg flex items-center gap-x-3 md:gap-x-4">
        <div className="h-[44px] w-[44px] overflow-hidden rounded-full md:h-[74px] md:w-[74px]">
          <img
            src={img}
            alt={`${fullName} profile photo`}
            width={74}
            height={74}
          />
        </div>
        <div>
          <p className="text-base font-semibold md:text-[20px]">{fullName}</p>
          <p className="text-bg/80 text-sm">{location}</p>
        </div>
      </div>
    </div>
  );
}
