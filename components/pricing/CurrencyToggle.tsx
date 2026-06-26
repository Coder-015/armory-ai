"use client";
import { useState } from "react";
import { Currency } from "./PricingMatrix";

interface CurrencyToggleProps {
  onChange: (currency: Currency) => void;
}

export function CurrencyToggle({ onChange }: CurrencyToggleProps) {
  const [active, setActive] = useState<Currency>("USD");
  const options: Currency[] = ["USD", "EUR", "INR"];

  const handleToggle = (currency: Currency) => {
    setActive(currency);
    onChange(currency);
  };

  return (
    <div className="flex bg-surface-secondary p-1 rounded-full w-max mx-auto mb-6">
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => handleToggle(opt)}
          className={`px-4 py-2 rounded-full font-bold transition-colors duration-[var(--duration-micro)] ease-[var(--ease-micro)] ${
            active === opt ? "bg-brand-primary text-text-primary shadow" : "text-surface-dark hover:text-text-primary"
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}
