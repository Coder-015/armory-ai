"use client";
import { useEffect, useRef } from "react";

export function useEntranceAnimation<T extends HTMLElement>(immediate = false) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const section = ref.current;
    if (!section) return;

    // Grab all elements marked for staggered entrance
    const elements = Array.from(
      section.querySelectorAll(".animate-enter")
    ) as HTMLElement[];
    
    if (elements.length === 0) return;

    // If not immediate (i.e. scroll reveal), hide them instantly on JS mount 
    // before the user scrolls to them, avoiding FOUC when they enter the viewport.
    // If JS fails, they remain at default opacity: 1 (fully visible for SEO).
    if (!immediate) {
      elements.forEach(el => {
        el.style.opacity = "0";
      });
    }

    let hasPlayed = false;

    const playAnimation = () => {
      if (hasPlayed) return;
      hasPlayed = true;

      const DURATION = 350;
      const TOTAL_BUDGET = 500;
      const STAGGER_POOL = TOTAL_BUDGET - DURATION; // 150ms
      
      const N = elements.length;
      const step = N > 1 ? STAGGER_POOL / (N - 1) : 0;

      elements.forEach((el, i) => {
        const delay = i * step;
        
        // For immediate animations, we snap opacity to 0 right before animating
        // to hide them during the delay period (e.g. element 3 waits 150ms).
        el.style.opacity = "0";

        el.animate(
          [
            { opacity: 0, transform: "translateY(20px)" },
            { opacity: 1, transform: "translateY(0)" }
          ],
          {
            duration: DURATION,
            delay: delay,
            easing: "cubic-bezier(0.2, 0.8, 0.2, 1)", 
            fill: "forwards"
          }
        );
      });
    };

    if (immediate) {
      // Execute instantly on load (for Hero initial load 500ms budget)
      playAnimation();
    } else {
      // Execute on scroll (for below the fold sections)
      const observer = new IntersectionObserver(
        (entries) => {
          const [entry] = entries;
          if (entry.isIntersecting) {
            observer.disconnect();
            playAnimation();
          }
        },
        { threshold: 0.15 }
      );

      observer.observe(section);

      // Fallback timer for headless crawlers/SEO audits that execute JS but never scroll.
      // After 2.5s, force play the animation so content isn't permanently stuck at opacity:0.
      const fallbackTimer = setTimeout(() => {
        observer.disconnect();
        playAnimation();
      }, 2500);

      return () => {
        observer.disconnect();
        clearTimeout(fallbackTimer);
      };
    }
  }, [immediate]);

  return ref;
}
