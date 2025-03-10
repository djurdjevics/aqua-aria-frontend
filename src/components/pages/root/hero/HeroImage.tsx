import { useEffect, useMemo, useState } from "react";
import { Progress } from "../../../Progress";

const images = ["/hero-image-1.jpg", "/hero-image-2.jpg", "/hero-image-3.jpg"];

export function HeroImage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const duration = 8000; // 5 seconds per image
  const interval = 50; // Progress updates every 50ms
  const stepIncrement = 100 / (duration / interval); // How much to increment per step

  useEffect(() => {
    let progressTimer: any;

    const startProgress = () => {
      progressTimer = setInterval(() => {
        setProgress((prev) => {
          if (prev + stepIncrement >= 100) {
            clearInterval(progressTimer);
            setTimeout(() => {
              setActiveIndex((prev) => (prev + 1) % images.length);
              setProgress(0); // Reset progress
            }, 300); // Small delay for smooth transition
            return 100;
          }
          return prev + stepIncrement;
        });
      }, interval);
    };

    startProgress();
    return () => clearInterval(progressTimer);
  }, [activeIndex]);

  return (
    <div className="mt-6 flex h-full w-full max-w-[600px] justify-end md:my-0 md:max-w-[1200px] lg:h-full lg:w-full">
      <div className="relative aspect-square h-full w-full overflow-hidden rounded-2xl">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 h-full w-full transition-opacity duration-700 lg:w-full ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute inset-0 h-full w-full bg-linear-to-br from-white/70 to-transparent"></div>
            <img
              src={src}
              alt="Slide"
              className="object-cover lg:h-full lg:w-full"
            />
          </div>
        ))}

        <div className="bg-primary/20 absolute bottom-0 left-0 h-2 w-full">
          <div
            className="bg-primary h-full transition-all duration-50"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
