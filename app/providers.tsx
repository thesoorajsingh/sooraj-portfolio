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
      { duration: 0.5, ease: "easeOut" } // Added easing
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
            transform: "translateY(36px)",
          },
          {
            duration: 0.3,
            ease: "easeIn",
            transform: "translateY(0)",
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
            transform: "translateY(0)",
          },
          {
            duration: 0.5,
            ease: "easeOut",
            transform: ["translateY(36px)"],
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
