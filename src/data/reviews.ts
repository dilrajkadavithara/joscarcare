export interface Review {
  name: string;
  initials: string;
  body: string;
  date: string;
  source: string;
  stars: number;
  isFeatured?: boolean;
  serviceContext?: string[]; // service slugs this review is most relevant to
}

export const reviews: Review[] = [
  {
    name: "Nimil Raj",
    initials: "NR",
    body: "Took my Ford Figo to Jos Car Care, Udayamperoor for scratch removal. They handled it brilliantly — the deep scratch on my driver-side door is completely gone, you can't see where it was. Fair pricing, finished on time.",
    date: "3 hours ago",
    source: "Google review",
    stars: 5,
    isFeatured: true,
    serviceContext: ["scratch-dent-repair", "paint-correction", "car-painting"],
  },
  {
    name: "Priyadarsisni N",
    initials: "PN",
    body: "I am very pleased with the results of the car scratch removal and polished service. The vehicle's appearance significantly improved. The team demonstrated professionalism and delivered high-quality work. I highly recommend their services.",
    date: "9 months ago",
    source: "Google review",
    stars: 5,
    isFeatured: true,
    serviceContext: ["scratch-dent-repair", "paint-correction", "ceramic-coating"],
  },
  {
    name: "PEPOGRAPHY",
    initials: "PG",
    body: "Good job and affordable.",
    date: "Local Guide · 130 reviews · A year ago",
    source: "Google review",
    stars: 5,
    isFeatured: true,
    serviceContext: ["foam-wash", "exterior-detailing", "ceramic-coating"],
  },
  {
    name: "Joseph George",
    initials: "JG",
    body: "Neat and fast service. Decent behaviour of the owner and employee.",
    date: "Local Guide · 22 reviews · 3 years ago",
    source: "Google review",
    stars: 5,
  },
  {
    name: "Kailasnadh Narayanan",
    initials: "KN",
    body: "Excellent service.",
    date: "13 reviews · 2 years ago",
    source: "Google review",
    stars: 5,
  },
];

export const ribbonQuotes = [
  '"Excellent service." — Kailasnadh Narayanan',
  '"Good job and affordable." — PEPOGRAPHY, Local Guide',
  '"Neat and fast service." — Joseph George, Local Guide',
  '"Took my Ford Figo for scratch removal — completely gone." — Nimil Raj',
];

export function getReviewsForService(serviceSlug: string, limit = 2): Review[] {
  const matched = reviews.filter((r) => r.serviceContext?.includes(serviceSlug));
  if (matched.length >= limit) return matched.slice(0, limit);
  // Fallback: featured reviews
  return reviews.filter((r) => r.isFeatured).slice(0, limit);
}
