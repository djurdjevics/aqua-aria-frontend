import type { Icon } from "./Icon";

export type Dispenser = {
  id: number;
  title: string;
  eyebrow: string;
  body: string;
  image: string;
  perks: {
    id: number;
    body: string;
    title: string;
    Icon: Icon;
  }[];
  imageSide: "left" | "right";
  badge: "new" | "popular";
};
