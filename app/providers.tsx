"use client";

import { useRef, useEffect, useState } from "react"; // Added useEffect import
import { animate } from "framer-motion/dom"; // Add this import
import { TransitionRouter } from "next-transition-router";

export function Providers({ children }: { children: React.ReactNode }) {
  const wrapperRef = useRef<HTMLDivElement>(null); // Updated type
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // @ts-expect-error
    animate(
      wrapperRef.current,
      {
        opacity: [0, 1],
        filter: "blur(0px)",
      },
      { duration: 0.35, ease: "easeInOut" }
    );
  }, []);

  return (
    <TransitionRouter
      auto={true}
      leave={(next) => {
        // @ts-expect-error
        animate(
          wrapperRef.current,
          {
            opacity: [1, 0],
            filter: "blur(8px)",
          },
          {
            ease: "easeInOut",
            onComplete: next,
          } // Added easing
        );
      }}
      enter={(next) => {
        // @ts-expect-error
        animate(
          wrapperRef.current,
          {
            opacity: [0, 1],
            filter: "blur(0px)",
          },
          {
            duration: 0.35,
            ease: "easeInOut",
            onComplete: next,
          } // Added easing
        );
      }}
    >
      <div
        ref={wrapperRef}
        style={{
          opacity: 0,
          filter: "blur(8px)",
        }}
      >
        {children}
      </div>
    </TransitionRouter>
  );
}
