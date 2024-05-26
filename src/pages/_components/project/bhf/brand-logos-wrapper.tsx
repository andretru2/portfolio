import { Suspense } from "react";
import { BhfBrandLogos } from "./brand-logos";

const logoPaths = import.meta.glob(
  "/src/pages/_assets/bhf/*.{png,jpg,jpeg,webp,svg}",
  {
    query: "?raw",
    import: "default",
  }
);

// Use Promise.all to wait for all imports to complete
export default function BhfBrandLogosWrapper() {
  return <Logos />;
}

async function Logos() {
  const logos = await Promise.all(
    Object.values(logoPaths).map(async (logoPath) => {
      return logoPath().then((rawContent) => ({
        rawContent,
      }));
    })
  ).then((logoObjects) =>
    logoObjects.map(({ rawContent }) => rawContent)
  );
  <Suspense>
    <BhfBrandLogos logos={logos} />
  </Suspense>;
}
