import { useEffect, useMemo, useState } from "react";
import { Progress } from "../../../Progress";

const images = [
  {
    idx: 1,
    url: "/hero-image-1.jpg",
  },
  {
    idx: 2,
    url: "/hero-image-2.jpg",
  },
  {
    idx: 3,
    url: "/hero-image-3.jpg",
  },
];

export function HeroImage() {
  const [progress, setProgress] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState<1 | 2 | 3>(1);
  const duration = 10000;
  const interval = 40;

  useEffect(() => {
    const steps = duration / interval;
    const stepIncrement = 100 / steps;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveImageIndex((prev) => {
            if (prev >= 3) {
              return 1;
            }

            return (prev + 1) as 1 | 2 | 3;
          });

          clearInterval(timer);

          setTimeout(() => setProgress(0), 500);

          return 100;
        }
        return prev + stepIncrement;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [progress === 0]);

  const activeImage = useMemo(() => {
    return images.find((img) => img.idx === activeImageIndex)!;
  }, [activeImageIndex]);

  return (
    <div className="mt-6 flex w-full justify-end md:my-0">
      <div className="relative w-[600px] overflow-hidden rounded-2xl">
        <img src={activeImage.url} className="object-cover" />
        <div className="absolute inset-0 z-10 bg-white/10" />
        <Progress value={progress} className="absolute bottom-0" />
      </div>
    </div>
  );
}
