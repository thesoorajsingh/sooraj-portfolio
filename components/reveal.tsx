"use client";

import { useTransitionState } from "next-transition-router";
import { ComponentProps, useEffect, useRef } from "react";
import { motion } from "framer-motion"; // Updated import

export function Reveal({
  children,
  ...rest
}: { children: React.ReactNode } & ComponentProps<"div">) {
  const { isReady } = useTransitionState();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Removed gsap context and animation
  }, [isReady]);
  return (
    <motion.div
      // @ts-expect-error
      ref={ref}
      initial={false} // Disable initial animation
      animate={isReady ? { scale: 1 } : {}} // Animate to scale 1 when ready
      transition={{ duration: 0.8, ease: "easeOut" }} // Transition settings
      {...rest}
    >
      {children}
    </motion.div>
  );
}
