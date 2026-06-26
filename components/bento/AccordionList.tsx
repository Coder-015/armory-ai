"use client";
import { useEffect } from "react";
import { useActiveIndex, setActiveIndex, cancelClearTimer } from "./useActiveNodeStore";
import { BentoFeature } from "./featuresData";

export function AccordionList({ features }: { features: BentoFeature[] }) {
  const activeIndex = useActiveIndex();

  useEffect(() => {
    // When the Accordion mounts, if there's a pending clear timer 
    // from a recent desktop hover-leave, cancel it so it doesn't snap closed.
    cancelClearTimer();
  }, []);

  return (
    <div className="space-y-4 md:hidden">
      {features.map((feat, idx) => {
        const isOpen = activeIndex === idx;
        return (
          <div
            key={idx}
            className="animate-enter border border-surface-secondary rounded-xl bg-surface-primary overflow-hidden"
          >
            <button
              className="w-full text-left px-6 py-5 flex justify-between items-center bg-surface-primary hover:bg-surface-secondary transition-colors duration-[var(--duration-micro)] ease-[var(--ease-micro)] focus:outline-none"
              onClick={() => setActiveIndex(isOpen ? null : idx)}
              aria-expanded={isOpen}
            >
              <div className="flex items-center">
                <img src={feat.icon} alt="" aria-hidden="true" className="w-6 h-6 mr-4" />
                <h3 className="font-heading text-lg font-bold text-text-primary">{feat.title}</h3>
              </div>
              <img
                src="/assets/chevron-down.svg"
                alt=""
                aria-hidden="true"
                className={`w-5 h-5 transform transition-transform duration-[var(--duration-structural)] ease-[var(--ease-structural)] ${
                  isOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            <div 
              className="accordion-content" 
              data-state={isOpen ? "open" : "closed"}
            >
              <div className="px-6 pb-5 pt-0">
                <p className="text-surface-dark pl-10">{feat.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
