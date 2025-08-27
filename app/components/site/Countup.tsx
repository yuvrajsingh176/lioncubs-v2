"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function CountUp({ target, duration = 2 }: { target: number; duration?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (inView) {
      controls.start({
        val: target,
        transition: { duration, ease: "easeOut" },
      });
    }
  }, [inView, target, duration, controls]);

  return (
    <motion.span
      ref={ref}
      animate={controls}
      initial={{ val: 0 }}
      variants={{}}
      onUpdate={(latest) => {
        // Round for display
        setValue(Math.floor((latest as any).val || 0));
      }}
    >
      {value.toLocaleString()}
    </motion.span>
  );
}

export default CountUp;
