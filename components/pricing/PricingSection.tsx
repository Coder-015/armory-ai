"use client";
import { useRef } from "react";
import { PricingTierCard } from "./PricingTierCard";
import { CurrencyToggle } from "./CurrencyToggle";
import { BillingToggle } from "./BillingToggle";
import { Currency, BillingCycle } from "./PricingMatrix";
import type { PriceDisplayHandle } from "./PriceDisplay";

import { useEntranceAnimation } from "../useEntranceAnimation";

export function PricingSection() {
  const pricingRef = useEntranceAnimation<HTMLElement>(false);
  const starterRef = useRef<PriceDisplayHandle>(null);
  const growthRef = useRef<PriceDisplayHandle>(null);
  const enterpriseRef = useRef<PriceDisplayHandle>(null);

  // We intentionally do NOT store currency/cycle in React state here.
  // We keep a mutable ref for the current values so that when one changes, 
  // we can supply the other to the `.update()` method without triggering a re-render.
  const currentValues = useRef<{ currency: Currency; cycle: BillingCycle }>({
    currency: "USD",
    cycle: "monthly",
  });

  const updateAllDisplays = () => {
    const { currency, cycle } = currentValues.current;
    starterRef.current?.update("starter", currency, cycle);
    growthRef.current?.update("growth", currency, cycle);
    enterpriseRef.current?.update("enterprise", currency, cycle);
  };

  const handleCurrencyChange = (currency: Currency) => {
    currentValues.current.currency = currency;
    updateAllDisplays();
  };

  const handleBillingChange = (cycle: BillingCycle) => {
    currentValues.current.cycle = cycle;
    updateAllDisplays();
  };

  return (
    <section id="pricing" ref={pricingRef} className="py-20">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="font-heading text-4xl font-bold mb-10 text-center text-text-primary animate-enter">Pricing Matrix</h2>
        
        <div className="flex justify-center space-x-4 mb-10 animate-enter">
          <CurrencyToggle onChange={handleCurrencyChange} />
          <BillingToggle onChange={handleBillingChange} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingTierCard 
            ref={starterRef} 
            tier="starter" 
            description="Perfect for individual developers and small experiments." 
            features={["1 AI Agent", "1,000 requests/mo", "Community Support"]} 
          />
          <PricingTierCard 
            ref={growthRef} 
            tier="growth" 
            description="Scale your intelligence with advanced workflows." 
            features={["5 AI Agents", "50,000 requests/mo", "Priority Email Support"]} 
          />
          <PricingTierCard 
            ref={enterpriseRef} 
            tier="enterprise" 
            description="Unlimited power and custom integrations." 
            features={["Unlimited AI Agents", "Unlimited requests", "24/7 Dedicated Support"]} 
          />
        </div>
      </div>
    </section>
  );
}
