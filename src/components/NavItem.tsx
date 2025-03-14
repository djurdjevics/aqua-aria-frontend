import "../styles/wave.css";

interface NavItemProps {
  label: string;
  href: string;
}

export function NavItem({ label, href }: NavItemProps) {
  return (
    <li>
      <a
        href={href}
        className="md:hover:text-primary text-secondary relative block text-2xl font-semibold uppercase transition-all duration-200 sm:text-2xl md:text-base"
      >
        {label}
        <svg
          viewBox="0 0 455.555 48"
          fill="transparent"
          className="absolute -bottom-1 left-0 w-full"
        >
          <path d="M0 2c37.962 0 37.962 44 75.924 44s37.962-44 75.924-44 37.962 44 75.923 44c37.962 0 37.962-44 75.925-44 37.965 0 37.965 44 75.929 44s37.965-44 75.93-44" />
          <path d="M0 2c37.962 0 37.962 44 75.924 44s37.962-44 75.924-44 37.962 44 75.923 44c37.962 0 37.962-44 75.925-44 37.965 0 37.965 44 75.929 44s37.965-44 75.93-44" />
        </svg>
      </a>
    </li>
  );
}
