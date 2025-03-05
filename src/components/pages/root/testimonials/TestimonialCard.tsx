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
    <div className="bg-secondary relative mt-9 mr-[10px] flex h-[270px] w-[220px] flex-col justify-between rounded-2xl p-4 lg:mt-0 lg:mr-4 lg:h-[480px] lg:w-[400px] lg:p-8">
      <blockquote className="text-bg max-w-[190px] text-xl lg:max-w-[320px] lg:text-[2rem]">
        "{quote}"
      </blockquote>
      <div className="text-bg flex items-center gap-x-3 lg:gap-x-4">
        <div className="h-[44px] w-[44px] overflow-hidden rounded-full lg:h-[74px] lg:w-[74px]">
          <img
            src={img}
            alt={`${fullName} profile photo`}
            width={74}
            height={74}
          />
        </div>
        <div>
          <p className="text-base font-semibold lg:text-[20px]">{fullName}</p>
          <p className="text-bg/80 text-sm">{location}</p>
        </div>
      </div>
    </div>
  );
}
