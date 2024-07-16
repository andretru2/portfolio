export const random = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min)) + min;

export function shuffle(array: any[]) {
  const shuffled = [...array]; // Create a copy to avoid mutating the original array
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function isFirefox() {
  return (
    typeof navigator !== "undefined" &&
    navigator.userAgent.toLowerCase().indexOf("firefox") >
      -1
  );
}

export function isSafari() {
  if (
    typeof window === "undefined" ||
    typeof navigator === "undefined"
  ) {
    return false; // We're not in a browser environment
  }

  const ua = navigator.userAgent.toLowerCase();
  // console.log("ua", ua, navigator);
  const isSafari =
    ua.indexOf("safari") > -1 &&
    ua.indexOf("chrome") === -1;
  const isSafariIOS =
    /iP(ad|hone|od).+Version\/[\d\.]+.*Safari/i.test(ua);

  return isSafari || isSafariIOS;
}
