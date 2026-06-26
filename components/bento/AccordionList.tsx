"use client";
import { useEffect } from "react";
import { useActiveIndex, setActiveIndex, cancelClearTimer } from "./useActiveNodeStore";
import { BentoFeature } from "./featuresData";

import { useRef } from "react";

function AccordionItem({ feat, isOpen, idx }: { feat: BentoFeature; isOpen: boolean; idx: number }) {
  const contentRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<Animation | null>(null);
  const isFirstMount = useRef(true);
  const previousHeightRef = useRef<number>(0);

  useEffect(() => {
    const contentEl = contentRef.current;
    const innerEl = innerRef.current;
    if (!contentEl || !innerEl) return;

    // Read structural tokens securely 
    const styles = getComputedStyle(document.documentElement);
    const durationStr = styles.getPropertyValue("--duration-structural").trim();
    const duration = durationStr.endsWith("ms") 
      ? parseInt(durationStr) 
      : parseFloat(durationStr) * (durationStr.endsWith("s") ? 1000 : 1) || 350;
    const ease = styles.getPropertyValue("--ease-structural").trim() || "cubic-bezier(0.4, 0, 0.2, 1)";

    const animateTo = (targetHeight: number) => {
      if (animRef.current) {
        animRef.current.cancel();
      }
      
      const currentHeight = contentEl.getBoundingClientRect().height;
      previousHeightRef.current = targetHeight;
      
      const animation = contentEl.animate(
        [
          { height: `${currentHeight}px` },
          { height: `${targetHeight}px` }
        ],
        {
          duration,
          easing: ease,
          fill: "forwards"
        }
      );
      animRef.current = animation;
      
      animation.onfinish = () => {
        try {
          animation.commitStyles();
        } catch (e) {
          // Fallback if commitStyles is not supported by older engines
          contentEl.style.height = `${targetHeight}px`;
        }
        animation.cancel();
      };
    };

    if (isFirstMount.current) {
      isFirstMount.current = false;
      contentEl.style.height = isOpen ? `${innerEl.scrollHeight}px` : "0px";
      previousHeightRef.current = isOpen ? innerEl.scrollHeight : 0;
    } else {
      const targetHeight = isOpen ? innerEl.scrollHeight : 0;
      if (targetHeight !== previousHeightRef.current) {
        animateTo(targetHeight);
      }
    }

    const ro = new ResizeObserver(() => {
      if (!isOpen) return;
      const newHeight = innerEl.scrollHeight;
      if (newHeight !== previousHeightRef.current) {
        animateTo(newHeight);
      }
    });
    
    ro.observe(innerEl);

    return () => {
      ro.disconnect();
      if (animRef.current) {
        animRef.current.cancel();
      }
    };
  }, [isOpen]);

  return (
    <div
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
        ref={contentRef}
        className="overflow-hidden"
      >
        <div ref={innerRef} className="px-6 pb-5 pt-0">
          <p className="text-surface-dark pl-10">{feat.description}</p>
        </div>
      </div>
    </div>
  );
}

export function AccordionList({ features }: { features: BentoFeature[] }) {
  const activeIndex = useActiveIndex();

  useEffect(() => {
    cancelClearTimer();
  }, []);

  return (
    <div className="space-y-4 md:hidden">
      {features.map((feat, idx) => (
        <AccordionItem key={idx} feat={feat} isOpen={activeIndex === idx} idx={idx} />
      ))}
    </div>
  );
}
