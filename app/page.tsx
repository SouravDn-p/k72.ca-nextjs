"use client";

import Hero from "@/components/home/hero/Hero";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Home() {
  const containerRef = useRef(null);
  const boxRef = useRef(null);

  useGSAP(
    () => {
      gsap.to(boxRef.current, {
        x: 1000,
        duration: 3,
      });
    },
    { scope: containerRef },
  );

  return (
    <div>
      <div className="h-screen w-screen">
        <Hero />
      </div>
    </div>
  );
}
