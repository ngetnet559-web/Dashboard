import { useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const AnimatedNumber = ({ value, duration = 1.5 }) => {
  const motionValue = useMotionValue(0);

  const spring = useSpring(motionValue, {
    duration: duration * 1000,
  });

  const [display, setDisplay] = useState(0);

  useEffect(() => {
    motionValue.set(value);
  }, [value, motionValue]);

  useEffect(() => {
    const unsubscribe = spring.on("change", (latest) => {
      setDisplay(Math.floor(latest));
    });

    return () => unsubscribe();
  }, [spring]);

  return <span>{display.toLocaleString()}</span>;
};

export default AnimatedNumber;
