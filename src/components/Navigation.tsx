import { NavItem } from "./NavItem";

export function Navigation() {
  return (
    <nav className="hidden lg:block">
      <ul className="flex items-center gap-x-10">
        <NavItem label="O nama" href="/o-nama" />
        <NavItem label="Katalog" href="/katalog" />
        <NavItem label="Usluge" href="/usluge" />
        <NavItem label="Kontakt" href="/kontakt" />
      </ul>
    </nav>
  );
}
