// import {
//   Twitter,
//   type Icon as LucideIcon,
//   Link2,
//   EyeOff,
//   any,
// } from "lucide-react";

// export type Icon = LucideIcon;

export const Icons = {
  eyeOff: EyeOff,
  logo: ({ ...props }: any) => (
    <svg
      width="62"
      height="36"
      viewBox="0 0 62 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.224 30.864C11.712 30.864 11.264 30.7147 10.88 30.416C10.496 30.1173 10.304 29.4773 10.304 28.496C10.304 28.048 10.464 27.3333 10.784 26.352C11.104 25.3707 11.5307 24.2187 12.064 22.896C12.6187 21.552 13.2373 20.1333 13.92 18.64C14.6027 17.1467 15.3173 15.664 16.064 14.192C16.8107 12.72 17.536 11.3547 18.24 10.096C18.944 8.83733 19.5947 7.77066 20.192 6.896C20.8107 6 21.312 5.40266 21.696 5.104C22.2507 4.69866 22.8053 4.496 23.36 4.496C23.6587 4.496 23.9467 4.528 24.224 4.592C24.5227 4.656 24.768 4.76267 24.96 4.912C25.408 5.18933 25.8027 5.72267 26.144 6.512C26.5067 7.28 26.8267 8.208 27.104 9.296C27.4027 10.384 27.648 11.5573 27.84 12.816C28.0533 14.0533 28.2347 15.28 28.384 16.496C29.1947 16.3893 29.7493 16.336 30.048 16.336C30.688 16.336 31.2533 16.432 31.744 16.624C32.2347 16.7947 32.4907 17.1573 32.512 17.712C32.5547 18.2453 32.384 18.6933 32 19.056C31.6373 19.4187 31.168 19.6853 30.592 19.856C30.336 19.9413 29.7173 20.08 28.736 20.272C28.8 21.36 28.832 22.2773 28.832 23.024C28.832 24.9227 28.7253 26.3947 28.512 27.44C28.32 28.4853 28.064 29.232 27.744 29.68C27.4453 30.128 27.1253 30.3947 26.784 30.48C26.464 30.5867 26.176 30.64 25.92 30.64C25.8987 30.64 25.8773 30.64 25.856 30.64C25.2373 30.64 24.7787 30.48 24.48 30.16C24.2027 29.84 24.064 29.3067 24.064 28.56V26.288C24.064 25.584 24.0533 24.7947 24.032 23.92C24.0107 23.0453 23.968 22.1173 23.904 21.136C22.6453 21.3493 21.3867 21.5627 20.128 21.776C18.8907 21.968 17.824 22.1387 16.928 22.288C16.5227 23.248 16.1707 24.112 15.872 24.88C15.5733 25.6267 15.3707 26.2133 15.264 26.64C14.944 27.6853 14.6453 28.5067 14.368 29.104C14.0907 29.68 13.824 30.0853 13.568 30.32C13.3333 30.576 13.1093 30.7253 12.896 30.768C12.6827 30.832 12.4587 30.864 12.224 30.864ZM18.688 18.352C19.584 18.1387 20.448 17.9467 21.28 17.776C22.112 17.584 22.9013 17.4133 23.648 17.264C23.5413 15.9413 23.4133 14.6507 23.264 13.392C23.1147 12.1333 22.944 11.0133 22.752 10.032C22.1973 11.0987 21.5467 12.3787 20.8 13.872C20.0747 15.344 19.3707 16.8373 18.688 18.352ZM32.2665 10.512C31.2425 10.512 30.4852 10.416 29.9945 10.224C29.5252 10.0107 29.2158 9.76533 29.0665 9.488C28.9385 9.18933 28.8745 8.92267 28.8745 8.688C28.8745 8.38933 29.0452 8.048 29.3865 7.664C29.7278 7.25867 30.3892 6.96 31.3705 6.768C32.3518 6.55467 33.5145 6.36267 34.8585 6.192C36.2025 6 37.6318 5.84 39.1465 5.712C40.6612 5.56267 42.1972 5.43467 43.7545 5.328C45.3118 5.22133 46.7945 5.14667 48.2025 5.104C49.6105 5.04 50.8585 5.008 51.9465 5.008C53.0772 5.008 53.9518 5.072 54.5705 5.2C55.1892 5.328 55.6265 5.488 55.8825 5.68C56.1598 5.872 56.3198 6.07467 56.3625 6.288C56.4265 6.50133 56.4585 6.704 56.4585 6.896C56.4585 6.93867 56.4585 6.97067 56.4585 6.992C56.4585 7.248 56.3945 7.52533 56.2665 7.824C56.1598 8.12267 55.9145 8.37867 55.5305 8.592C55.1465 8.784 54.5705 8.88 53.8025 8.88C53.5252 8.88 52.9065 8.92267 51.9465 9.008C50.9865 9.09333 49.8132 9.2 48.4265 9.328C47.0398 9.456 45.5678 9.584 44.0105 9.712C43.7758 10.672 43.5092 11.792 43.2105 13.072C42.9332 14.352 42.6452 15.696 42.3465 17.104C42.0692 18.512 41.8025 19.8987 41.5465 21.264C41.2905 22.608 41.0772 23.856 40.9065 25.008C40.7358 26.1387 40.6185 27.0667 40.5545 27.792C40.4692 28.7733 40.1812 29.4667 39.6905 29.872C39.2212 30.256 38.7518 30.448 38.2825 30.448C37.9412 30.448 37.5998 30.3733 37.2585 30.224C36.9172 30.096 36.6398 29.808 36.4265 29.36C36.2132 28.8907 36.1065 28.1973 36.1065 27.28C36.1065 26.3413 36.1918 25.1893 36.3625 23.824C36.5332 22.4373 36.7572 20.9547 37.0345 19.376C37.3332 17.7973 37.6638 16.208 38.0265 14.608C38.4105 13.008 38.8052 11.5147 39.2105 10.128C37.7812 10.2347 36.4585 10.3307 35.2425 10.416C34.0265 10.48 33.0345 10.512 32.2665 10.512Z"
        fill="#FAFAFA"
      />
    </svg>
  ),

  astro: ({ ...props }: any) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#fff"
      viewBox="0 0 24 24"
    >
      <path
        fill-rule="evenodd"
        d="M19.3 4.5H4.7a.3.3 0 0 0-.2.3v14.4c0 .2.1.3.3.3h.1l9.9-9.8a1.8 1.8 0 0 1 2.4 0l2.3 2.2V4.7a.3.3 0 0 0-.2-.2zm.2 9.6-3.3-3.4a.3.3 0 0 0-.4 0l-8.7 8.8h12.2a.3.3 0 0 0 .2-.3v-5.1zM4.7 3A1.8 1.8 0 0 0 3 4.8v14.4c0 1 .8 1.8 1.8 1.8h14.4a1.8 1.8 0 0 0 1.8-1.8V4.8A1.8 1.8 0 0 0 19.2 3H4.8zm3.8 6.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 1.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"
      />
    </svg>
  ),

  nextjs: ({ ...props }: any) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#fff"
      viewBox="0 0 394 80"
    >
      <path d="M262 0h68.5v12.7h-27.2v66.6h-13.6V12.7H262V0ZM149 0v12.7H94v20.4h44.3v12.6H94v21h55v12.6H80.5V0h68.7Zm34.3 0h-17.8l63.8 79.4h17.9l-32-39.7 32-39.6h-17.9l-23 28.6-23-28.6Zm18.3 56.7-9-11-27.1 33.7h17.8l18.3-22.7Z" />
      <path
        fill-rule="evenodd"
        d="M81 79.3 17 0H0v79.3h13.6V17l50.2 62.3H81Z"
        clip-rule="evenodd"
      />
      <path d="M333.6 78.9c-1 0-1.8-.4-2.5-1-.8-.8-1.1-1.6-1.1-2.6s.3-1.8 1-2.5c.8-.7 1.6-1 2.6-1s1.8.3 2.5 1a3.4 3.4 0 0 1 .6 4.3 3.7 3.7 0 0 1-3 1.8Zm23.2-33.5h6v23.3c0 2.1-.4 4-1.3 5.5a9.1 9.1 0 0 1-3.8 3.5c-1.6.8-3.5 1.3-5.7 1.3-2 0-3.7-.4-5.3-1a8.5 8.5 0 0 1-3.7-3.2c-.9-1.3-1.4-3-1.4-5h6c.1.8.3 1.6.7 2.2.4.7 1 1.2 1.6 1.5.7.4 1.5.5 2.4.5 1 0 1.8-.2 2.4-.6a4 4 0 0 0 1.6-1.8c.3-.8.5-1.8.5-3V45.5Zm30.9 9.1a4.4 4.4 0 0 0-2-3.3 7.5 7.5 0 0 0-4.3-1.1c-1.3 0-2.4.2-3.3.5-.9.4-1.6 1-2 1.6a3.5 3.5 0 0 0-.3 4c.3.5.7.9 1.3 1.2l1.8 1 2.1.5 3.1.8c1.3.3 2.5.7 3.7 1.2a13 13 0 0 1 3.2 1.8 8.1 8.1 0 0 1 3 6.5c0 2-.5 3.7-1.5 5.1a10 10 0 0 1-4.4 3.5c-1.8.8-4.1 1.2-6.8 1.2-2.6 0-4.9-.4-6.8-1.2-2-.8-3.4-2-4.5-3.5a10 10 0 0 1-1.7-5.6h6a5 5 0 0 0 3.5 4.6c1 .4 2.2.6 3.4.6 1.3 0 2.5-.2 3.5-.6 1-.4 1.8-1 2.4-1.7a4 4 0 0 0 .8-2.4c0-.9-.2-1.6-.7-2.2a11 11 0 0 0-2.1-1.4l-3.2-1-3.8-1c-2.8-.7-5-1.7-6.6-3.2a7.2 7.2 0 0 1-2.4-5.7 8 8 0 0 1 1.7-5 10 10 0 0 1 4.3-3.5c2-.8 4-1.2 6.4-1.2 2.3 0 4.4.4 6.2 1.2 1.8.8 3.2 2 4.3 3.4 1 1.4 1.5 3 1.5 5h-5.8Z" />
    </svg>
  ),
  react: ({ ...props }: any) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 228"
    >
      <path
        fill="#00D8FF"
        d="M210 74a171 171 0 0 0-8-3l2-5c6-31 2-55-12-63s-35 0-58 19a171 171 0 0 0-6 6 156 156 0 0 0-4-4C101 4 78-5 64 3S46 34 52 63a171 171 0 0 0 2 8l-10 3C17 83 0 98 0 114s19 31 47 41a146 146 0 0 0 7 2 167 167 0 0 0-2 9c-6 29-1 51 12 59 14 8 37-1 59-20a146 146 0 0 0 5-5 168 168 0 0 0 7 6c22 19 44 26 57 19 14-8 18-32 12-61a145 145 0 0 0-1-7l5-2c29-10 48-25 48-41s-18-31-46-40Zm-6 71-4 1-13-32 12-32 8 2c24 8 38 20 38 30s-16 22-41 31Zm-10 21c2 13 3 24 1 33s-5 14-9 16c-8 5-25-1-43-17a157 157 0 0 1-7-6l22-27c12-1 24-3 34-6a134 134 0 0 1 2 7ZM87 215c-8 2-14 2-18 0-8-4-11-22-7-47a157 157 0 0 1 2-8l35 5c7 10 14 19 22 27a135 135 0 0 1-5 5c-10 8-20 14-29 18Zm-37-70c-12-5-22-10-30-16-6-6-9-11-9-15 0-10 14-22 37-30l9-2 12 32-12 33a135 135 0 0 1-7-2Zm13-85c-5-24-2-43 6-47 9-5 28 2 48 20a144 144 0 0 1 3 3L99 63l-35 5a160 160 0 0 1-1-8Zm110 28a348 348 0 0 0-8-13l24 4-8 22a381 381 0 0 0-8-13Zm-45-44 15 18a322 322 0 0 0-30 0l15-18ZM83 88a323 323 0 0 0-7 13c-4-7-6-15-9-22l24-4a322 322 0 0 0-8 13Zm8 65-24-4 9-22a321 321 0 0 0 7 13l8 13Zm37 31-15-18a383 383 0 0 0 30 0l-15 18Zm53-58 8 23-24 4a382 382 0 0 0 8-13 347 347 0 0 0 8-14Zm-17 8a359 359 0 0 1-13 20 329 329 0 0 1-23 1l-23-1a310 310 0 0 1-13-19 307 307 0 0 1-11-21 310 310 0 0 1 11-21 307 307 0 0 1 13-19l23-1 23 1a329 329 0 0 1 13 19 358 358 0 0 1 11 21 329 329 0 0 1-11 20Zm22-122c9 5 12 25 7 51l-1 5-35-5-21-27a161 161 0 0 1 6-5c19-17 36-23 44-19Zm-58 79a23 23 0 1 1 0 46 23 23 0 0 1 0-46Z"
      />
    </svg>
  ),
  tailwind: ({ ...props }: any) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 154"
    >
      <defs>
        <linearGradient
          id="a"
          x1="-2.8%"
          x2="100%"
          y1="32%"
          y2="67.6%"
        >
          <stop offset="0%" stop-color="#2298BD" />
          <stop offset="100%" stop-color="#0ED7B5" />
        </linearGradient>
      </defs>
      <path
        fill="url(#a)"
        d="M128 0C94 0 73 17 64 51c13-17 28-23 45-19 10 2 16 9 24 17 13 13 27 28 59 28 34 0 55-17 64-51-13 17-28 23-45 19-10-3-16-10-24-18-13-12-27-27-59-27ZM64 77C30 77 9 94 0 128c13-17 28-23 45-19 10 2 16 9 24 17 13 13 27 28 59 28 34 0 55-17 64-52-13 17-28 24-45 20-10-3-16-10-24-18-13-12-27-27-59-27Z"
      />
    </svg>
  ),
  gitHub: ({ ...props }: any) => (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fab"
      data-icon="github"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 496 512"
      {...props}
    >
      <path
        fill="currentColor"
        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
      ></path>
    </svg>
  ),
  menu: ({ ...props }: any) => (
    <svg
      width="24"
      height="17"
      viewBox="0 0 24 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <line
        y1="0.5"
        x2="24"
        y2="0.5"
        stroke="currentColor"
      />
      <line
        y1="8.5"
        x2="24"
        y2="8.5"
        stroke="currentColor"
      />
      <line
        y1="16.5"
        x2="24"
        y2="16.5"
        stroke="currentColor"
      />
    </svg>
  ),
  twitter: Twitter,
};
