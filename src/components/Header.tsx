import { Logo } from "./Logo";
import { MobileNavigation } from "./MobileNavigation";
import { Navigation } from "./Navigation";
import { NavItem } from "./NavItem";

export function Header() {
  return (
    <header className="max-w-[74rem] mx-auto px-4 py-5 md:py-7 flex items-center justify-between">
      <Logo />
      <Navigation />
      <MobileNavigation />
    </header>
  );
}
