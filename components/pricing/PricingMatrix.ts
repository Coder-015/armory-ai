export type Tier = "starter" | "growth" | "enterprise";
export type Currency = "INR" | "USD" | "EUR";
export type BillingCycle = "monthly" | "annual";

interface TierConfig {
  baseMonthlyRate: number;        // in USD as canonical base
  regionalTariff: Record<Currency, number>; // multiplier per currency incl. FX + regional adjustment
}

const ANNUAL_DISCOUNT_MULTIPLIER = 0.8; // flat 20% off

export const PRICING_MATRIX: Record<Tier, TierConfig> = {
  starter:    { baseMonthlyRate: 29,  regionalTariff: { USD: 1, EUR: 0.95, INR: 83 } },
  growth:     { baseMonthlyRate: 99,  regionalTariff: { USD: 1, EUR: 0.95, INR: 83 } },
  enterprise: { baseMonthlyRate: 299, regionalTariff: { USD: 1, EUR: 0.95, INR: 83 } },
};

export function computePrice(tier: Tier, currency: Currency, cycle: BillingCycle): number {
  const cfg = PRICING_MATRIX[tier];
  const base = cfg.baseMonthlyRate * cfg.regionalTariff[currency];
  const monthly = cycle === "annual" ? base * ANNUAL_DISCOUNT_MULTIPLIER : base;
  return cycle === "annual" ? monthly * 12 : monthly;
}

export function localeFor(currency: Currency): string {
  switch (currency) {
    case "EUR": return "de-DE";
    case "INR": return "en-IN";
    case "USD":
    default:
      return "en-US";
  }
}
