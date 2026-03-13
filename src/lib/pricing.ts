export type BudgetMode = "essential" | "signature" | "grand";

type Quote = {
  guestCount: number;
  tierGuests: number;
  perHead: number;
  subtotal: number;
  opsReserve: number;
  grandTotal: number;
  estimatedStaff: number;
};

const formatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

const tierRates: Record<number, Record<BudgetMode, number>> = {
  150: { essential: 720, signature: 860, grand: 1040 },
  250: { essential: 690, signature: 820, grand: 980 },
  400: { essential: 660, signature: 780, grand: 930 },
  600: { essential: 620, signature: 740, grand: 890 },
  800: { essential: 590, signature: 700, grand: 850 },
};

export const budgetOptions = [
  {
    value: "essential" as const,
    label: "Essential Premium",
    description: "Elegant buffet layouts with disciplined service and a tighter spend ceiling.",
  },
  {
    value: "signature" as const,
    label: "Signature Host",
    description: "The best balance of premium presentation, service depth, and commercial control.",
  },
  {
    value: "grand" as const,
    label: "Grand Occasion",
    description: "For statement events that need richer menus, stronger staffing, and VIP polish.",
  },
];

export const sanitizeGuests = (value: number) => {
  if (!Number.isFinite(value)) {
    return 180;
  }

  return Math.min(800, Math.max(100, Math.round(value / 10) * 10));
};

const resolveTierGuests = (guestCount: number) => {
  if (guestCount <= 150) return 150;
  if (guestCount <= 250) return 250;
  if (guestCount <= 400) return 400;
  if (guestCount <= 600) return 600;
  return 800;
};

export const buildQuote = (guestCount: number, budget: BudgetMode): Quote => {
  const cleanGuestCount = sanitizeGuests(guestCount);
  const tierGuests = resolveTierGuests(cleanGuestCount);
  const perHead = tierRates[tierGuests][budget];
  const subtotal = cleanGuestCount * perHead;
  const opsReserve = Math.max(18000, Math.round(cleanGuestCount * 115));
  const estimatedStaff = Math.max(10, Math.ceil(cleanGuestCount / 18));

  return {
    guestCount: cleanGuestCount,
    tierGuests,
    perHead,
    subtotal,
    opsReserve,
    grandTotal: subtotal + opsReserve,
    estimatedStaff,
  };
};

export const formatCurrency = (value: number) => formatter.format(value);
