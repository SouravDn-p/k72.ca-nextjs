"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

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
    <div ref={containerRef} className="h-screen w-screen">
      <div ref={boxRef} className="box w-20 h-20 bg-blue-500 rounded-md"></div>
    </div>
  );
}
