import { Logo } from "./Logo";
import { MobileNavigation } from "./MobileNavigation";
import { Navigation } from "./Navigation";
import { NavItem } from "./NavItem";

export function Header() {
  return (
    <header className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 md:py-[30px]">
      <Logo />
      <Navigation />
      <MobileNavigation />
    </header>
  );
}
