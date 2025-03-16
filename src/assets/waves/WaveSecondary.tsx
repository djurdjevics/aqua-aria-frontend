import { cn } from "../../utils/cn";

export function WaveSecondary({ className }: { className?: string }) {
  return (
    <svg
      className={cn(className)}
      width="1440"
      height="38"
      viewBox="0 0 1440 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1085.03 74.2787C1228.38 73.5045 1314.77 55.4267 1440 0V114H0V0C0 0 211.621 73.5045 354.971 74.2787C502.123 75.0735 572.845 -7.04787e-06 720 0C867.155 7.04787e-06 937.877 75.0735 1085.03 74.2787Z"
        fill="#1A262F"
      />
    </svg>
  );
}

export function WaveSecondaryMobile() {
  return (
    <svg
      className="absolute inset-x-0 -bottom-[20px] w-full"
      // width="375"
      // height="39"
      viewBox="0 0 375 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M-14 21.0002C-14 21.0002 41.3668 38.7463 83.707 38.9973C127.46 39.2566 141.657 21.0624 185.416 21.0002C229.529 20.9374 244.011 39.0495 288.125 38.9973C331.942 38.9454 390 21.0002 390 21.0002"
        stroke="#1A262F"
        stroke-width="41.5105"
      />
    </svg>
  );
}
