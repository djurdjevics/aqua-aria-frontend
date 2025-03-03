import { cn } from "../../utils/cn";

export function LightBulbIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn(className)}
      width="20"
      height="28"
      viewBox="0 0 20 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.1459 2.5193C14.0907 0.607709 11.431 -0.261198 8.65043 0.0683875C6.50887 0.326063 4.48244 1.35677 2.95111 2.95675C1.41402 4.56273 0.452624 6.67807 0.239619 8.90727C0.0611553 10.5971 0.297188 12.299 0.913175 13.8211C1.50613 15.2773 2.44451 16.5776 3.63043 17.5844C4.38458 18.2615 4.80483 19.1604 4.80483 20.1132C4.80483 20.1551 4.81059 20.1971 4.81059 20.233V24.1101C4.81059 25.9918 6.27859 27.5498 8.09201 27.5498H11.431C13.2387 27.5498 14.7124 26.0038 14.7124 24.1221L14.7067 20.263C14.7067 19.2982 15.1212 18.3514 15.8178 17.7282C18.0572 15.7926 19.3467 12.9702 19.3467 9.98591C19.341 7.12151 18.1781 4.40693 16.1459 2.5193ZM11.431 25.5064H8.09201C7.36089 25.5064 6.76793 24.8652 6.76793 24.1041V20.9521H9.55426C9.62334 20.9521 9.69243 20.9761 9.76151 20.9761C9.83059 20.9761 9.90543 20.9521 9.96876 20.9521H12.7493L12.7551 24.1281C12.7551 24.8892 12.1621 25.5064 11.431 25.5064ZM14.5628 16.1522C14.557 16.1581 14.5512 16.1701 14.5512 16.1761C13.7568 16.8832 13.1926 17.836 12.922 18.9147H10.7402V13.0361C11.2525 13.0061 11.6613 12.5627 11.6613 12.0233C11.6613 11.4601 11.2238 11.0046 10.6826 11.0046H8.84041C8.29926 11.0046 7.86174 11.4601 7.86174 12.0233C7.86174 12.5687 8.27048 13.0061 8.78284 13.0361V18.9147H6.61825C6.35919 17.7761 5.76623 16.8113 4.89694 16.0383C4.89118 16.0323 4.88543 16.0203 4.87967 16.0143C3.93554 15.2173 3.18715 14.1806 2.72084 13.0301C2.22574 11.8076 2.04728 10.4893 2.18545 9.123C2.18545 9.123 2.18545 9.117 2.18545 9.11101C2.53662 5.47359 5.34598 2.5193 8.87495 2.09384C11.0914 1.83017 13.2156 2.5193 14.8506 4.04139C16.4625 5.5395 17.3894 7.70278 17.3894 9.97992C17.3836 12.3529 16.3589 14.6061 14.5628 16.1522Z"
        fill="white"
      />
    </svg>
  );
}
