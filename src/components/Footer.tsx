export function Footer() {
  return (
    <footer className="bg-secondary text-bg relative overflow-hidden pb-14 md:pb-[120px]">
      <div className="mx-auto flex max-w-7xl flex-col justify-between md:flex-row">
        <div className="space-y-1 text-center md:space-y-2 md:text-left">
          <p className="text-lg font-semibold md:text-[2rem]">Adresa</p>
          <p className="text-bg/80 text-sm md:text-base">
            Sarajevska 15, Zrenjanin
          </p>
        </div>
        <div className="mt-6 space-y-1 text-center md:text-left">
          <p className="text-lg font-semibold md:text-[2rem]">Telefon</p>
          <a className="text-bg/80 mt-3 text-sm md:text-base" href="">
            +381 11 234 999
          </a>
          <a className="text-bg/80 mt-2 block" href="">
            +381 11 333 876
          </a>
        </div>
        <div className="mt-6 space-y-1 text-center md:text-left">
          <p className="text-lg font-semibold md:text-[2rem]">
            Društvene mreže
          </p>
          <div className="flex flex-col items-center gap-x-4">
            <a href="" className="block h-8 w-8">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.8"
                  d="M9.37356 0.111901C7.67114 0.192221 6.50857 0.463902 5.49224 0.863263C4.44039 1.27318 3.54886 1.82327 2.66181 2.71351C1.77476 3.60375 1.22852 4.49592 0.821474 5.54936C0.42755 6.56792 0.160668 7.73145 0.0854668 9.43481C0.0102661 11.1382 -0.00637412 11.6857 0.00194596 16.0307C0.010266 20.3757 0.0294662 20.9203 0.112027 22.6272C0.193308 24.3293 0.464031 25.4915 0.863395 26.5082C1.27396 27.56 1.8234 28.4512 2.71397 29.3386C3.60454 30.2259 4.49607 30.7709 5.55208 31.1786C6.56969 31.5718 7.73355 31.84 9.4366 31.9146C11.1397 31.9891 11.6878 32.0064 16.0315 31.9981C20.3753 31.9898 20.9222 31.9706 22.6287 31.8896C24.3353 31.8086 25.4915 31.536 26.5085 31.1386C27.5603 30.727 28.4522 30.1786 29.3389 29.2877C30.2256 28.3968 30.7715 27.504 31.1783 26.4499C31.5725 25.4323 31.8403 24.2685 31.9143 22.5667C31.9888 20.8589 32.0064 20.3136 31.9981 15.9692C31.9898 11.6249 31.9703 11.0803 31.8893 9.37401C31.8083 7.66777 31.5373 6.50904 31.1383 5.49176C30.7271 4.43992 30.1783 3.54935 29.288 2.66135C28.3978 1.77335 27.5043 1.22774 26.4505 0.821983C25.4323 0.428062 24.2691 0.159581 22.566 0.0859805C20.863 0.0123802 20.3148 -0.00649984 15.9695 0.00182018C11.6241 0.0101402 11.0801 0.0287003 9.37356 0.111901ZM9.56044 29.0362C8.00043 28.9683 7.15338 28.7091 6.58889 28.4922C5.84137 28.2042 5.30888 27.856 4.74631 27.2989C4.18375 26.7418 3.83815 26.2073 3.5463 25.4614C3.3271 24.8969 3.0631 24.0509 2.99014 22.4909C2.91078 20.8048 2.89414 20.2985 2.88486 16.0268C2.87558 11.7551 2.8919 11.2495 2.96582 9.56281C3.03238 8.00409 3.29318 7.15609 3.50982 6.59192C3.79782 5.84344 4.14471 5.31192 4.70311 4.74968C5.26152 4.18743 5.79432 3.84119 6.54089 3.54935C7.10474 3.32919 7.95083 3.06743 9.5102 2.99319C11.1976 2.91319 11.7032 2.89719 15.9743 2.88791C20.2454 2.87863 20.7522 2.89463 22.4403 2.96887C23.999 3.03671 24.8473 3.29495 25.4108 3.51287C26.1587 3.80087 26.6909 4.14679 27.2531 4.70616C27.8153 5.26552 28.1619 5.7964 28.4538 6.54456C28.6742 7.1068 28.936 7.95257 29.0096 9.51289C29.0899 11.2003 29.1082 11.7062 29.1158 15.9769C29.1235 20.2477 29.1085 20.7549 29.0346 22.4409C28.9664 24.0009 28.7078 24.8483 28.4906 25.4134C28.2026 26.1606 27.8553 26.6934 27.2966 27.2554C26.7379 27.8173 26.2057 28.1635 25.4588 28.4554C24.8956 28.6752 24.0486 28.9376 22.4905 29.0118C20.8031 29.0912 20.2975 29.1078 16.0248 29.1171C11.7521 29.1264 11.2481 29.1091 9.56076 29.0362M22.6041 7.44857C22.6047 7.82833 22.718 8.19938 22.9295 8.51479C23.141 8.83019 23.4413 9.07578 23.7925 9.2205C24.1436 9.36522 24.5297 9.40256 24.9021 9.3278C25.2744 9.25305 25.6162 9.06955 25.8843 8.80052C26.1523 8.53149 26.3345 8.18902 26.4079 7.81641C26.4813 7.4438 26.4426 7.05779 26.2966 6.70721C26.1506 6.35663 25.9039 6.05722 25.5877 5.84685C25.2715 5.63648 24.9 5.5246 24.5203 5.52536C24.0112 5.52638 23.5233 5.72955 23.164 6.0902C22.8046 6.45086 22.6032 6.93946 22.6041 7.44857ZM7.78475 16.016C7.79371 20.5536 11.4789 24.2237 16.0156 24.215C20.5522 24.2064 24.2249 20.5216 24.2163 15.984C24.2076 11.4463 20.5215 7.77529 15.9842 7.78425C11.4469 7.79321 7.7761 11.479 7.78475 16.016ZM10.6667 16.0102C10.6646 14.9553 10.9754 13.9236 11.5597 13.0453C12.144 12.1671 12.9756 11.4818 13.9494 11.0762C14.9232 10.6706 15.9953 10.5629 17.0303 10.7666C18.0653 10.9704 19.0167 11.4764 19.7641 12.2209C20.5114 12.9653 21.0213 13.9146 21.2291 14.9488C21.437 15.983 21.3335 17.0555 20.9317 18.0309C20.53 19.0063 19.848 19.8406 18.9721 20.4284C18.0962 21.0162 17.0656 21.331 16.0107 21.3331C15.3103 21.3346 14.6165 21.198 13.9688 20.9313C13.3211 20.6646 12.7324 20.2729 12.2361 19.7786C11.7399 19.2843 11.3458 18.6971 11.0766 18.0505C10.8073 17.4039 10.668 16.7106 10.6667 16.0102Z"
                  fill="white"
                />
              </svg>
            </a>
            <a href="" className="block">
              <img src="facebook-logo.png" />
            </a>
          </div>
        </div>
        <div className="mt-6 text-center md:text-left">
          <p className="text-lg font-semibold md:text-[2rem]">Aqua Aria</p>
          <ul className="mt-3 space-y-2 text-sm md:text-base">
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
      <div className="absolute inset-x-0 bottom-0">
        <svg
          width="1440"
          height="148"
          className="relative z-10 h-full w-full"
          viewBox="0 0 1440 148"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-44 79.0006C-44 79.0006 165.407 147.027 325.545 147.989C491.029 148.984 544.723 79.2392 710.225 79.0006C877.07 78.7601 931.844 148.19 1098.69 147.989C1264.42 147.791 1484 79.0006 1484 79.0006"
            stroke="#6AA8D4"
            stroke-width="157"
          />
        </svg>
        <p className="text-bg/80 absolute z-20">
          &copy;2025 Aqua Aria. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
