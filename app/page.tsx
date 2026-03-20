"use client";

import Hero from "@/components/home/hero/Hero";
import Transitions from "@/components/Transition";

export default function Home() {
  return (
    <div>
      <div className="h-screen w-screen">
        <Transitions />
        <Hero />
      </div>
    </div>
  );
}
