import { useState } from "react";
import { NavItem } from "./NavItem";
import { cn } from "../utils/cn";

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="block md:hidden">
      <button onClick={() => setIsOpen(true)} className="cursor-pointer">
        <img src="/menu.svg" width={20} height={16} />
      </button>
      <nav
        className={cn(
          "w-full h-screen bg-white fixed translate-x-full inset-0 px-4 py-7 transition-all duration-500",
          isOpen && "translate-x-0",
          "transition-all duration-500"
        )}
      >
        <div className="flex justify-between items-center">
          <button className="cursor-pointer" onClick={() => setIsOpen(false)}>
            Close
          </button>
        </div>
        <ul className="flex flex-col gap-y-6 justify-center h-full items-center gap-x-10">
          <NavItem label="O nama" href="/o-nama" />
          <NavItem label="Katalog" href="/katalog" />
          <NavItem label="Usluge" href="/usluge" />
          <NavItem label="Kontakt" href="/kontakt" />
        </ul>
      </nav>
    </div>
  );
}
