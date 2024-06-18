import ParallaxText from './ParallaxText.jsx';

export default function ScrollingWords() {
  return (
    <div
      id="examples"
      className="pointer-events-none flex min-h-[16rem] flex-row items-center sm:min-h-[24rem]"
    >
      <ParallaxText
        baseVelocity={1}
        className="font-cursive text-7xl uppercase sm:text-9xl md:my-0"
      >
        Abracadabra Presto Alakazam Hocus Pocus
      </ParallaxText>
    </div>
  );
}

// combine this and parallax text into one component and rename PT to wrapper
