import { forwardRef } from "react";
import { PriceDisplay, PriceDisplayHandle } from "./PriceDisplay";
import { Tier, Currency, BillingCycle } from "./PricingMatrix";

interface PricingTierCardProps {
  tier: Tier;
  features: string[];
  description: string;
}

export const PricingTierCard = forwardRef<PriceDisplayHandle, PricingTierCardProps>(
  ({ tier, features, description }, ref) => {
    return (
      <div className="animate-enter bg-surface-primary border border-surface-secondary p-8 rounded-xl shadow-lg flex flex-col hover:-translate-y-1 transition-transform duration-[var(--duration-micro)] ease-[var(--ease-micro)]">
        <h3 className="font-heading text-2xl font-bold mb-2 capitalize text-text-primary">{tier}</h3>
        <p className="text-surface-dark mb-6">{description}</p>
        
        <div className="mb-6 flex items-baseline">
          <PriceDisplay ref={ref} initialTier={tier} />
          <span className="text-surface-dark ml-2">/ cycle</span>
        </div>

        <ul className="mb-8 flex-1 space-y-3">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center text-text-primary">
              <img src="/assets/cube-16-solid.svg" alt="" aria-hidden="true" className="w-5 h-5 mr-3" />
              {feature}
            </li>
          ))}
        </ul>

        <button className="w-full bg-surface-dark text-surface-primary py-3 rounded font-bold hover:bg-brand-primary hover:text-text-primary transition-colors duration-[var(--duration-micro)] ease-[var(--ease-micro)]">
          Get Started
        </button>
      </div>
    );
  }
);
PricingTierCard.displayName = "PricingTierCard";
