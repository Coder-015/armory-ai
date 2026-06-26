"use client";
import { useEffect, useState } from "react";
import { BentoGrid } from "./BentoGrid";
import { AccordionList } from "./AccordionList";
import { FEATURES } from "./featuresData";

export function BentoAccordionWrapper() {
  const [isMobile, setIsMobile] = useState<boolean>(false); // default to desktop for SSR

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 767px)");
    setIsMobile(mql.matches); // corrects immediately on client mount
    
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  return isMobile ? <AccordionList features={FEATURES} /> : <BentoGrid features={FEATURES} />;
}
