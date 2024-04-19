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
      "relative shadow-xl p-m flex min-w-0 flex-col h-full panel rounded-2xl text-card-foreground stroke-[0.1] hover:stroke-[0.15] backdrop-blur-sm",
      // "relative shadow-xl p-m bg-teal-950  border border-teal-800  flex-1 h-full overflow-hidden rounded-2xl flex flex-col ",
      // "relative shadow-xl bg-gray-900  border border-gray-800  flex-1 h-full overflow-hidden rounded-2xl flex flex-col stroke-[0.1] hover:stroke-[0.15] backdrop-blur-sm p-m",
      // "relative shadow-xl bg-[#228B22]  border border-[#228B22]/90  flex-1 h-full overflow-hidden rounded-2xl flex flex-col ",
      // "relative shadow-xl bg-[#355E3B]  border border-[#355E3B]/90  flex-1 h-full overflow-hidden rounded-2xl flex flex-col ",
      // "relative shadow-xl bg-[#1B4D3E]  border  border-[#1B4D3E]/90  flex-1 h-full overflow-hidden rounded-2xl flex flex-col ",
      // "relative shadow-xl bg-[#00A36C]  border  border-[#00A36C]/90  flex-1 h-full overflow-hidden rounded-2xl flex flex-col ",
      // "relative shadow-xl bg-[#638B59]  border  border-[#638B59]/90  flex-1 h-full overflow-hidden rounded-2xl flex flex-col ",
      // "relative shadow-xl bg-[#8D9E74]  border  border-[#8D9E74]/90  flex-1 h-full overflow-hidden rounded-2xl flex flex-col ",
      // "relative shadow-xl bg-[#1C4E80]  border  border-[#1C4E80]/90  flex-1 h-full overflow-hidden rounded-2xl flex flex-col ",
      // "relative shadow-xl bg-neutral-900  border  border-neutral-800 flex-1 h-full overflow-hidden rounded-2xl flex flex-col ",
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
      " absolute glow  inset-0 h-full w-full bg-gradient-to-r from-green-500 to-teal-500 transform scale-[0.80] rounded-full blur-3xl",
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
    className={cn("flex flex-col p-m ", className)}
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
    width="36"
    height="48"
    viewBox="0 0 36 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="fill-textColor"
  >
    <path
      d="M17.85 1.69688C17.9437 1.575 18.0938 1.5 18.2531 1.5C18.525 1.5 18.75 1.725 18.75 1.99687V4.06875C18.75 5.70938 19.425 7.28437 20.6156 8.40937L27.9469 15.3937C32.1281 19.3875 34.5 24.9187 34.5 30.6937C34.5 39.4219 27.4219 46.5 18.6937 46.5H17.2781C8.56875 46.5 1.5 39.4313 1.5 30.7219V29.6438C1.5 25.4625 3.15937 21.4594 6.1125 18.5062L7.78125 16.8375C7.99687 16.6219 8.2875 16.5 8.59687 16.5C9.23438 16.5 9.75 17.0156 9.75 17.6531V27C9.75 29.8969 12.1031 32.25 15 32.25C17.8969 32.25 20.25 29.8969 20.25 27V25.6875C20.25 24.2719 19.7906 22.8844 18.9375 21.75L15.9375 17.7469C14.3906 15.6938 13.6594 13.1344 13.875 10.575L13.9594 9.5625C14.1187 7.59375 14.8406 5.70937 16.0219 4.13437L17.85 1.69688ZM16.65 0.796875L14.8219 3.23438C13.4719 5.04375 12.6469 7.19062 12.4594 9.44062L12.375 10.4531C12.1313 13.3781 12.9656 16.3031 14.7375 18.6469L17.7375 22.65C18.3937 23.5219 18.75 24.5906 18.75 25.6875V27C18.75 29.0719 17.0719 30.75 15 30.75C12.9281 30.75 11.25 29.0719 11.25 27V17.6531C11.25 16.1906 10.0594 15 8.59687 15C7.89375 15 7.21875 15.2812 6.72187 15.7781L5.05313 17.4469C1.81875 20.6813 0 25.0688 0 29.6438V30.7219C0 40.2656 7.73438 48 17.2781 48H18.6937C28.2562 48 36 40.2562 36 30.6937C36 24.4969 33.4594 18.5813 28.9781 14.3063L21.6469 7.33125C20.7562 6.47812 20.25 5.30625 20.25 4.06875V1.99687C20.25 0.9 19.35 0 18.2531 0C17.625 0 17.0344 0.3 16.65 0.796875Z"
      // fill="white"
    />
  </svg>
));
CardSvg.displayName = "CardSvg";

// CardTitle
const CardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn(
      " text-textColor  relative z-50",
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
      "font-normal text-base text-slate-500 p-m relative z-50",
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
      "border mt-auto px-4 py-1 rounded-lg border-gray-500 text-gray-300",
      className
    )}
    {...props}
  ></div>
));
CardFooter.displayName = "CardFooter";

// CardNavigators
const CardNavigators = React.forwardRef<
  HTMLDivElement,
  { number: number; onPrev: () => void; onNext: () => void }
>(({ number, onPrev, onNext }, ref) => (
  <div
    ref={ref}
    className=" flex justify-between w-full mt-auto"
  >
    <button
      onClick={onPrev}
      className=" absolute left-0 bottom-0 bg-gray-800 p-2 rounded-full hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
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
          strokeWidth="1.25"
          strokeLinecap="square"
          strokeLinejoin="round"
        />
      </svg>
    </button>
    {/* <Meteors number={number} /> */}
    <button
      onClick={onNext}
      className="absolute right-0 bottom-0 bg-gray-800 p-2 rounded-full hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
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
          strokeWidth="1.25"
          strokeLinecap="square"
          strokeLinejoin="round"
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
