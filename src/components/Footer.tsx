export function Footer() {
  return (
    <footer className="bg-secondary text-bg relative overflow-hidden px-4 pb-14 md:pb-[4rem]">
      <div className="mx-auto flex max-w-7xl flex-col justify-between md:flex-row md:flex-wrap">
        <div className="space-y-1 text-center md:text-left lg:space-y-2">
          <p className="text-lg font-semibold md:text-xl lg:text-[2rem]">
            Adresa
          </p>
          <p className="text-bg/80 text-sm lg:text-base">
            Sarajevska 15, Zrenjanin
          </p>
        </div>
        <div className="mt-6 space-y-1 text-center md:mt-0 md:text-left">
          <p className="text-lg font-semibold md:text-xl lg:text-[2rem]">
            Telefon
          </p>
          <a className="text-bg/80 mt-3 text-sm lg:text-base" href="">
            +381 60 55 10 377
          </a>
          <a className="text-bg/80 mt-2 block" href="">
            +381 61 30 14 647
          </a>
        </div>
        <div className="mt-6 space-y-1 text-center md:mt-0 md:text-left">
          <p className="text-lg font-semibold md:text-xl lg:text-[2rem]">
            Društvene mreže
          </p>
          <div className="flex flex-col items-center gap-x-4 md:flex-row">
            <a href="#" className="inline-block h-8 w-8">
              <img
                src="instagram-icon.svg"
                className="h-full w-full opacity-80"
              />
            </a>
            <a href="#" className="inline-block h-8 w-8">
              <img
                src="facebook-icon.svg"
                className="h-full w-full opacity-80"
              />
            </a>
          </div>
        </div>
        <div className="mt-6 text-center md:mt-0 md:text-left">
          <p className="text-lg font-semibold md:text-xl lg:text-[2rem]">
            Aqua Aria
          </p>
          <ul className="mt-3 space-y-2 text-sm lg:text-base">
            <li>
              <a className="text-bg/80">O nama</a>
            </li>
            <li>
              <a className="text-bg/80">Katalog</a>
            </li>
            <li>
              <a className="text-bg/80">Usluge</a>
            </li>
            <li>
              <a className="text-bg/80">Kontakt</a>
            </li>
          </ul>
        </div>
      </div>

      <p className="text-bg/80 mx-auto pt-[2rem] text-center text-xs">
        &copy;2025 Aqua Aria. All rights reserved.
      </p>
    </footer>
  );
}
