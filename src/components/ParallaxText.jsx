import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from 'framer-motion';
import { wrap } from '@motionone/utils';

export default function ParallaxText({
  children,
  className,
  baseVelocity = 100,
}) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -80, v)}%`);

  useAnimationFrame((t, delta) => {
    let moveBy = baseVelocity * (delta / 1000);

    moveBy += moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div
      className={`flex flex-nowrap overflow-visible whitespace-nowrap text-5xl ${className}`}
    >
      <motion.p
        style={{ x }}
        className="flex flex-nowrap whitespace-nowrap uppercase"
      >
        <span className="text-gradient-parallax mr-8 block">{children}</span>
        <span className="text-gradient-parallax mr-8 block">{children}</span>
        <span className="text-gradient-parallax mr-8 block">{children}</span>
        <span className="text-gradient-parallax mr-8 block">{children}</span>
        <span className="text-gradient-parallax mr-8 block">{children}</span>
      </motion.p>
    </div>
  );
}
