"use client";

import { usePathname } from "next/navigation";
import Transition from "@/components/Transition";

export default function RouteTransition() {
  const pathname = usePathname();

  // Remount on route change so the GSAP timeline replays.
  return <Transition key={pathname} />;
}

