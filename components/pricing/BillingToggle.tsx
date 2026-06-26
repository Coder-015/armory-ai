"use client";
import { useState } from "react";
import { BillingCycle } from "./PricingMatrix";

interface BillingToggleProps {
  onChange: (cycle: BillingCycle) => void;
}

export function BillingToggle({ onChange }: BillingToggleProps) {
  const [active, setActive] = useState<BillingCycle>("monthly");

  const handleToggle = (cycle: BillingCycle) => {
    setActive(cycle);
    onChange(cycle);
  };

  return (
    <div className="flex bg-surface-secondary p-1 rounded-full w-max mx-auto mb-10">
      <button
        onClick={() => handleToggle("monthly")}
        className={`px-6 py-2 rounded-full font-bold transition-colors duration-[var(--duration-micro)] ease-[var(--ease-micro)] ${
          active === "monthly" ? "bg-text-primary text-surface-primary shadow" : "text-surface-dark hover:text-text-primary"
        }`}
      >
        Monthly
      </button>
      <button
        onClick={() => handleToggle("annual")}
        className={`px-6 py-2 rounded-full font-bold transition-colors duration-[var(--duration-micro)] ease-[var(--ease-micro)] ${
          active === "annual" ? "bg-text-primary text-surface-primary shadow" : "text-surface-dark hover:text-text-primary"
        }`}
      >
        Annual (Save 20%)
      </button>
    </div>
  );
}
