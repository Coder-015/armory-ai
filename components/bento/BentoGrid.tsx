"use client";
import { useActiveIndex, setActiveIndex, clearActiveIndexDeferred } from "./useActiveNodeStore";
import { BentoFeature } from "./featuresData";

export function BentoGrid({ features }: { features: BentoFeature[] }) {
  const activeIndex = useActiveIndex();

  return (
    <div className="hidden md:grid grid-cols-3 gap-6">
      {features.map((feat, idx) => {
        const isActive = activeIndex === idx;
        const isDimmed = activeIndex !== null && !isActive;
        
        return (
          <div
            key={idx}
            className={`animate-enter p-8 rounded-xl border border-surface-secondary bg-surface-primary transition-all duration-[var(--duration-micro)] ease-[var(--ease-micro)] cursor-pointer
              ${feat.colSpan === 2 ? "col-span-2" : "col-span-1"} 
              ${isActive ? "border-brand-primary shadow-xl scale-[1.02]" : "shadow hover:border-surface-dark"} 
              ${isDimmed ? "opacity-50 grayscale" : "opacity-100"}`}
            onMouseEnter={() => setActiveIndex(idx)}
            onMouseLeave={clearActiveIndexDeferred}
            onFocus={() => setActiveIndex(idx)}
            onBlur={clearActiveIndexDeferred}
            tabIndex={0}
            role="region"
            aria-label={feat.title}
          >
            <div className="bg-surface-secondary w-12 h-12 rounded flex items-center justify-center mb-6">
              <img src={feat.icon} alt="" aria-hidden="true" className="w-6 h-6" />
            </div>
            <h3 className="font-heading text-2xl font-bold mb-4 text-text-primary">{feat.title}</h3>
            <p className="text-surface-dark">{feat.description}</p>
          </div>
        );
      })}
    </div>
  );
}
