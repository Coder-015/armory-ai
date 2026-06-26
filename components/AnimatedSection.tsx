"use client";
import { useEntranceAnimation } from "./useEntranceAnimation";
import React from "react";

export function AnimatedSection({
  id,
  className,
  immediate = false,
  children
}: {
  id: string;
  className?: string;
  immediate?: boolean;
  children: React.ReactNode;
}) {
  const ref = useEntranceAnimation<HTMLElement>(immediate);
  return (
    <section id={id} ref={ref} className={className}>
      {children}
    </section>
  );
}
