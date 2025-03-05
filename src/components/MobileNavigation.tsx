import { useState } from "react";
import { NavItem } from "./NavItem";
import { cn } from "../utils/cn";
import { Logo } from "./Logo";

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="block lg:hidden">
      <button onClick={() => setIsOpen(true)} className="cursor-pointer">
        <img src="/menu.svg" width={20} height={16} />
      </button>
      <nav
        className={cn(
          "fixed inset-0 z-50 h-screen w-full translate-x-full bg-white px-4 py-7 transition-all duration-500",
          isOpen && "translate-x-0",
          "transition-all duration-500",
        )}
      >
        <div className="flex items-center justify-between">
          <Logo />
          <button className="cursor-pointer" onClick={() => setIsOpen(false)}>
            <img src="/close.svg" width={20} height={16} />
          </button>
        </div>
        <ul className="flex h-full flex-col items-center justify-center gap-x-10 gap-y-6">
          <NavItem label="O nama" href="/o-nama" />
          <NavItem label="Katalog" href="/katalog" />
          <NavItem label="Usluge" href="/usluge" />
          <NavItem label="Kontakt" href="/kontakt" />
        </ul>
      </nav>
    </div>
  );
}
