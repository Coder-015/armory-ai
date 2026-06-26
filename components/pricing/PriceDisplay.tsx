"use client";

import { useRef, useImperativeHandle, forwardRef, useEffect } from "react";
import { Tier, Currency, BillingCycle, computePrice, localeFor } from "./PricingMatrix";

export interface PriceDisplayHandle {
  update: (tier: Tier, currency: Currency, cycle: BillingCycle) => void;
}

interface PriceDisplayProps {
  initialTier: Tier;
  initialCurrency?: Currency;
  initialCycle?: BillingCycle;
}

export const PriceDisplay = forwardRef<PriceDisplayHandle, PriceDisplayProps>(
  ({ initialTier, initialCurrency = "USD", initialCycle = "monthly" }, ref) => {
    const nodeRef = useRef<HTMLSpanElement>(null);

    // Initial SSR Value computation
    const initialValue = computePrice(initialTier, initialCurrency, initialCycle);
    const initialFormatted = new Intl.NumberFormat(localeFor(initialCurrency), {
      style: "currency",
      currency: initialCurrency,
      maximumFractionDigits: 0,
    }).format(initialValue);

    useImperativeHandle(ref, () => ({
      update: (tier, currency, cycle) => {
        if (!nodeRef.current) return;
        const value = computePrice(tier, currency, cycle);
        const formatted = new Intl.NumberFormat(localeFor(currency), {
          style: "currency",
          currency,
          maximumFractionDigits: 0,
        }).format(value);
        nodeRef.current.textContent = formatted; // direct DOM mutation, bypasses React state
      },
    }));

    return (
      <span ref={nodeRef} className="price-text text-4xl font-bold font-heading text-text-primary">
        {initialFormatted}
      </span>
    );
  }
);
PriceDisplay.displayName = "PriceDisplay";
