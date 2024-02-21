import { type ReactNode } from "react";

import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "./drawer";

interface Props {
  children: ReactNode;
}

export function NavMobileButton({ children }: Props) {
  return (
    <Drawer direction="right">
      <DrawerTrigger
        asChild
        className="md:hidden md:invisible mr-4 "
      >
        <button
          className="group relative ms-4 h-7 w-7 text-current"
          type="button"
          aria-label="Open main menu"
          aria-expanded="false"
          aria-haspopup="menu"
        >
          <svg
            id="line-svg"
            className="absolute start-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 transition-all group-aria-expanded:scale-0 group-aria-expanded:opacity-0"
            aria-hidden="true"
            focusable="false"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 9h16.5m-16.5 6.75h16.5"
            ></path>
          </svg>
          <svg
            id="cross-svg"
            className="absolute start-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 scale-0 text-accent opacity-0 transition-all group-aria-expanded:scale-100 group-aria-expanded:opacity-100 "
            aria-hidden="true"
            focusable="false"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </DrawerTrigger>
      <DrawerContent>{children}</DrawerContent>
    </Drawer>
  );
}
