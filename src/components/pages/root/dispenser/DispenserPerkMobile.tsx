import type { Icon } from "../../../../types/Icon";

export function DispenserPerkMobile({
  isActive,
  progress,
  perk,
}: {
  isActive: boolean;
  progress: number;
  perk: {
    id: number;
    body: string;
    Icon: Icon;
  };
}) {
  const size = 40;
  const strokeWidth = 2;
  const radius = (size - strokeWidth * 2) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  const { body, Icon } = perk;

  return (
    <div
      style={{
        width: size,
        height: size,
        position: "relative",
        opacity: isActive ? "100%" : "40%",
        transition: "all 200ms",
      }}
    >
      <svg width={size} height={size}>
        {/* Background Circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#6aa8d4"
          strokeWidth={strokeWidth}
          fill="#6aa8d4"
        />
        {/* Progress Stroke */}
        {isActive && (
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#fff"
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            transform={`rotate(-90 ${size / 2} ${size / 2})`}
            style={{
              transition: "stroke-dashoffset 0.1s linear",
              filter: "inset(0px 0px 2px rgba(0, 0, 0, 0.2))", // Soft inset shadow
            }}
          />
        )}
      </svg>
      {/* Center Icon */}
      <div className="bg-primary absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center">
        <Icon className="h-4 w-4" />
      </div>
    </div>
  );
}
