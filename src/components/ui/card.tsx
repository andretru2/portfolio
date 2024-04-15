import * as React from "react";
import { cn } from "@/utils/cn";

// Card
const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, ...props }, ref) => (
  <article
    ref={ref}
    className={cn(
      // "relative flex min-w-0 flex-col panel rounded-2xl text-card-foreground stroke-[0.1] hover:stroke-[0.15] backdrop-blur-sm",
      "relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

// CardGlow
const CardGlow = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      " absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl",
      className
    )}
    {...props}
  />
));
CardGlow.displayName = "CardGlow";

// CardHeader
const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex flex-col space-y-1.5 p-6",
      className
    )}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

// CardSvg
const CardSvg = React.forwardRef<
  SVGSVGElement,
  React.SVGAttributes<SVGSVGElement>
>(({ className, ...props }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className={cn("h-2 w-2 text-gray-300", className)}
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
    />
  </svg>
));
CardSvg.displayName = "CardSvg";

// CardTitle
const CardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h1
    ref={ref}
    className={cn(
      "font-bold text-xl text-white mb-4 relative z-50",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

// CardContent
const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "font-normal text-base text-slate-500 mb-4 relative z-50",
      className
    )}
    {...props}
  />
));
CardContent.displayName = "CardContent";

// // CardParagraph
// const CardParagraph = React.forwardRef<
//   HTMLParagraphElement,
//   React.HTMLAttributes<HTMLParagraphElement>
// >(({ className, ...props }, ref) => (
//   <p ref={ref} className={cn("", className)} {...props}></p>
// ));
// CardParagraph.displayName = "CardParagraph";

// CardFooter
const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "border px-4 py-1 rounded-lg border-gray-500 text-gray-300",
      className
    )}
    {...props}
  >
    Explore
  </div>
));
CardFooter.displayName = "CardFooter";

// CardNavigators
const CardNavigators = React.forwardRef<
  HTMLDivElement,
  { number: number; onPrev: () => void; onNext: () => void }
>(({ number, onPrev, onNext }, ref) => (
  <div
    ref={ref}
    className="relative flex justify-between w-full"
  >
    <button
      onClick={onPrev}
      className="absolute left-4 bottom-4 bg-gray-800 p-2 rounded-full hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
    >
      {/* <ChevronLeftIcon className="h-6 w-6 text-gray-300" /> */}
      <svg
        width="64"
        height="36"
        viewBox="0 0 64 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M63.3135 30.4C63.3135 16.8649 63.3135 10.0973 59.48 5.60883C58.9356 4.97147 58.342 4.37786 57.7046 3.8335C53.2162 0 46.4486 0 32.9135 0H-0.000232697V4.91372C-0.000232697 18.4489 -0.000232697 25.2164 3.83327 29.7049C4.37763 30.3422 4.97123 30.9358 5.6086 31.4802C10.0971 35.3137 16.8646 35.3137 30.3998 35.3137H63.3135V30.4Z"
          fill="#848485"
        />
        <path
          d="M37.3136 17.0319H37.9386V18.2819L37.3136 18.2819L37.3136 17.0319ZM25.9999 18.2819C25.6547 18.2819 25.3749 18.002 25.3749 17.6569C25.3749 17.3117 25.6547 17.0319 25.9999 17.0319L25.9999 18.2819ZM37.3136 18.2819H25.9999L25.9999 17.0319H37.3136L37.3136 18.2819Z"
          fill="#FCFCFC"
        />
        <path
          d="M31.6567 12L25.9999 17.6569L31.6567 23.3137"
          stroke="#FCFCFC"
          stroke-width="1.25"
          stroke-linecap="square"
          stroke-linejoin="round"
        />
      </svg>
    </button>
    {/* <Meteors number={number} /> */}
    <button
      onClick={onNext}
      className="absolute right-4 bottom-4 bg-gray-800 p-2 rounded-full hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
    >
      {/* <ChevronRightIcon className="h-6 w-6 text-gray-300" /> */}
      <svg
        width="64"
        height="36"
        viewBox="0 0 64 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.313477 30.4C0.313477 16.8649 0.313477 10.0973 4.14698 5.60883C4.69134 4.97147 5.28494 4.37786 5.92231 3.8335C10.4108 0 17.1783 0 30.7135 0H63.6272V4.91372C63.6272 18.4489 63.6272 25.2164 59.7937 29.7049C59.2493 30.3422 58.6557 30.9358 58.0184 31.4802C53.5299 35.3137 46.7623 35.3137 33.2272 35.3137H0.313477V30.4Z"
          fill="#848485"
        />
        <path
          d="M26.3134 17.0319H25.6884V18.2819L26.3134 18.2819L26.3134 17.0319ZM37.6271 18.2819C37.9722 18.2819 38.2521 18.002 38.2521 17.6569C38.2521 17.3117 37.9722 17.0319 37.6271 17.0319L37.6271 18.2819ZM26.3134 18.2819H37.6271L37.6271 17.0319H26.3134L26.3134 18.2819Z"
          fill="#FCFCFC"
        />
        <path
          d="M31.9702 12L37.6271 17.6569L31.9702 23.3137"
          stroke="#FCFCFC"
          stroke-width="1.25"
          stroke-linecap="square"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  </div>
));
CardNavigators.displayName = "CardNavigators";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  //   CardDescription,
  CardContent,
  CardGlow,
  CardNavigators,
  // CardParagraph,
  CardSvg,
};

// MeteorsDemo
// export function MeteorsDemo() {
//   return (
//     <div className="">
//       <div className=" w-full relative max-w-xs">
//         <Card>
//           <CardGlow />
//           <CardHeader>
//             <CardSvg />
//           </CardHeader>
//           <CardTitle>
//             Meteors because they're cool
//           </CardTitle>
//           <CardContent>
//             <CardParagraph />
//           </CardContent>
//           <CardFooter />
//           <CardNavigators number={20} />
//         </Card>
//       </div>
//     </div>
//   );
// }
