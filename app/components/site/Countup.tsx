"use client";
import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";

type Props = {
  target: number;
  duration?: number;     // seconds
  decimals?: number;     // digits after decimal
};

export default function CountUp({ target, duration = 2, decimals = 0 }: Props) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, target, {
      duration,
      ease: "easeOut",
      onUpdate: (latest) => setValue(latest),
    });
    return () => controls.stop();
  }, [inView, target, duration]);

  const formatted = Number(value).toLocaleString(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return <span ref={ref}>{formatted}</span>;
}
