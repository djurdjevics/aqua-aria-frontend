import { cn } from "../../utils/cn";

export function AudioIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn(className)}
      width="27"
      height="20"
      viewBox="0 0 27 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.0689 0.42608C13.1622 -0.142027 12.0343 -0.142027 11.1276 0.42608L5.92166 3.59862C5.76107 3.69463 5.58024 3.74398 5.39563 3.74131H2.94123C1.32014 3.74931 0.0075749 5.1322 0 6.84181V13.1575C0.0075872 14.8671 1.32014 16.25 2.94123 16.258H5.39563C5.57898 16.262 5.75981 16.31 5.92166 16.4007L11.1276 19.5733C11.5727 19.852 12.0811 20 12.5983 20C14.2219 19.984 15.5319 18.5958 15.5382 16.8848V3.11451C15.5458 2.00499 14.9831 0.976845 14.0689 0.42608ZM13.6503 16.8835V16.8848C13.6554 17.2862 13.4543 17.6596 13.123 17.861C12.793 18.061 12.3858 18.0583 12.0583 17.8516L6.86623 14.6938C6.4186 14.4191 5.91279 14.2724 5.3956 14.267H2.9412C2.35952 14.267 1.88913 13.771 1.88913 13.1575V6.84181C1.88913 6.22837 2.35952 5.73229 2.9412 5.73229H5.3956C5.91279 5.73363 6.42112 5.5856 6.86623 5.30556L12.0596 2.1477H12.0583C12.3858 1.93833 12.7968 1.93833 13.1243 2.1477C13.4581 2.33973 13.6617 2.71447 13.6503 3.11451L13.6503 16.8835ZM26.7063 13.7963V13.7976C27.0768 14.191 27.0768 14.8258 26.7063 15.2205C26.5242 15.4006 26.2827 15.5019 26.0323 15.5046C25.7858 15.5032 25.5493 15.4006 25.371 15.2205L21.7697 11.4226L18.1684 15.2205C17.9863 15.4006 17.7448 15.5019 17.4944 15.5046C17.2478 15.5032 17.0114 15.4006 16.833 15.2205C16.4626 14.8258 16.4626 14.191 16.833 13.7976L20.4344 9.99965L16.833 6.20168C16.4613 5.8083 16.4613 5.17219 16.833 4.77877C17.2061 4.38672 17.8092 4.38672 18.1823 4.77877L21.7697 8.57674L25.371 4.77877C25.744 4.38672 26.3472 4.38672 26.7202 4.77877C27.0933 5.17216 27.0933 5.80827 26.7202 6.20168L23.0924 9.99965L26.7063 13.7963Z"
        fill="white"
      />
    </svg>
  );
}
