// Types

export interface IBillingPeriod {
  id: string;
  label: string;
  discount?: string;
  badge?: string;
}

// Billing periods
export const billingPeriods: IBillingPeriod[] = [
  { id: "Monthly", label: "Monthly" },
  { id: "Quarterly", label: "Quarterly", discount: "10%" },
  { id: "Yearly", label: "Yearly", badge: "1 month free" },
];

// Format price helper
export const formatPrice = ({
  price,
  currency,
}: {
  price?: number | string;
  currency: "GBP" | "USD";
}) => {
  if (!price) return "Custom";

  if (typeof price === "string") {
    price = Number(price);
  }

  if (price === 0) return "Custom";
  const symbol = currency === "GBP" ? "£" : "$";
  const convertedPrice = currency === "USD" ? Math.round(price * 1.27) : price;
  return `${symbol}${convertedPrice.toLocaleString()}`;
};

// Complete pricing data
