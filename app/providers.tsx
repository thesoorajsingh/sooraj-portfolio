"use client";

import { HTMLAttributes, useRef } from "react";
import { animate } from "framer-motion/dom"; // Add this import
import { TransitionRouter } from "next-transition-router";

export function Providers({ children }: { children: React.ReactNode }) {
  const wrapperRef = useRef<HTMLDivElement>(null); // Updated type

  return (
    <TransitionRouter
      auto={true}
      leave={(next) => {
        // @ts-expect-error
        animate(
          wrapperRef.current,
          { opacity: [1, 0], filter: "blur(8px)" },
          { duration: 0.3, onComplete: next }
        );
      }}
      enter={(next) => {
        // @ts-expect-error
        animate(
          wrapperRef.current,
          { opacity: [0, 1], filter: "blur(0px)" },
          { duration: 0.3, onComplete: next }
        );
      }}
    >
      <div ref={wrapperRef}>{children}</div>
    </TransitionRouter>
  );
}
