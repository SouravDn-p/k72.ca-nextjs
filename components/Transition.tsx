"use client";

import React, { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Transition() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);

  useGSAP(() => {
    if (!containerRef.current) return;

    const stairs = containerRef.current.querySelectorAll(".stair");
    if (!stairs.length) return;

    const tl = gsap.timeline({
      onComplete: () => setVisible(false), // hide after animation
    });

    tl.fromTo(
      stairs,
      { height: 0 },
      {
        height: "100%",
        duration: 0.5,
        stagger: 0.07,
        ease: "power2.out",
      },
    ).to(stairs, {
      height: 0,
      duration: 0.5,
      stagger: 0.05,
      ease: "power2.in",
    });

    return () => tl.kill();
  });

  useEffect(() => {
    ScrollTrigger.refresh();
  }, []);

  if (!visible) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex w-full overflow-hidden pointer-events-none"
    >
      {Array.from({ length: 7 }).map((_, i) => (
        <div
          key={i}
          className="stair flex-1 bg-white"
          style={{ height: "0%" }}
        />
      ))}
    </div>
  );
}
