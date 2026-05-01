export interface Service {
  slug: string;
  number: string;
  name: string;
  shortDesc: string;
  longDesc: string;
  outcomeDesc: string;
  image: string;
  galleryImage: string;
  snapshot: { stages: string; stagesDesc: string; time: string; timeUnit: string; timeDesc: string; priceFrom: string; priceDesc: string; };
  hasTiers: boolean;
  tierIntro?: string;
  tiers?: { name: string; subtitle: string; duration: string; unit: string; blurb: string; price: string; }[];
}

export const services: Service[] = [
  {
    slug: "ceramic-coating",
    number: "01",
    name: "Ceramic Coating",
    shortDesc: "Multi-year hydrophobic gloss protection.",
    longDesc: "A liquid polymer that bonds chemically with your car's paint and cures into a hard, transparent layer. Once cured, it makes water bead, washes faster, and adds resistance to swirl marks and minor scratches.",
    outcomeDesc: "Multi-year gloss that beads water and resists swirl marks.",
    image: "/media/hero_slides/ceramic-coating-water-beading-suv.webp",
    galleryImage: "/real-photos/jos_ig_12.jpg",
    snapshot: { stages: "4", stagesDesc: "Prep, paint correction, ceramic application, curing.", time: "1–2", timeUnit: "days", timeDesc: "Standard application. Paint correction adds another day if needed.", priceFrom: "12,000", priceDesc: "Final price depends on car size, paint condition, and tier." },
    hasTiers: true,
    tierIntro: "Pick the protection that matches how long you'll keep the car.",
    tiers: [
      { name: "Tier 1 · Daily driver", subtitle: "Daily driver", duration: "1", unit: "year", blurb: "For cars you'll likely change in a year or two. Single-stage prep, hydrophobic finish, manufacturer warranty.", price: "₹12,000" },
      { name: "Tier 2 · Sweet spot", subtitle: "Sweet spot", duration: "3", unit: "years", blurb: "For cars you'll keep three to five years. The most common pick. Two-stage prep, deeper coating, manufacturer warranty.", price: "WhatsApp for quote" },
      { name: "Tier 3 · Long-keep", subtitle: "Long-keep", duration: "5", unit: "years", blurb: "For cars you plan to keep for the long haul. Multi-stage prep, flagship product, longest warranty.", price: "WhatsApp for quote" },
    ],
  },
  {
    slug: "graphene-coating",
    number: "02",
    name: "Graphene Coating",
    shortDesc: "Premium coating with heat dissipation. Longer-lasting than ceramic.",
    longDesc: "Graphene-based protection adds heat dissipation and longer durability than ceramic at equivalent tier — typically 30–40% premium pricing for the upgrade. Glossy finish, scratch resistance, 3–5 year durability.",
    outcomeDesc: "Premium coating with heat dissipation. Longer-lasting than ceramic.",
    image: "/media/hero_slides/graphene-coating-luxury-carbon-fiber.webp",
    galleryImage: "/real-photos/jos_ig_12.jpg",
    snapshot: { stages: "4", stagesDesc: "Prep, paint correction, graphene application, curing.", time: "1–2", timeUnit: "days", timeDesc: "Same workflow as ceramic. Higher-grade product.", priceFrom: "18,000", priceDesc: "Roughly 30–40% premium over ceramic at equivalent tier." },
    hasTiers: false,
  },
  {
    slug: "borophine-coating",
    number: "03",
    name: "Borophine Coating",
    shortDesc: "Hard-shell. Industry-leading scratch resistance for daily traffic.",
    longDesc: "Borophine is the latest hard-shell coating tech. The strongest scratch resistance of any coating we offer — ideal for daily drivers in city traffic. Includes paint prep and full curing.",
    outcomeDesc: "Hard-shell coating. Industry-leading scratch resistance for daily traffic.",
    image: "/media/hero_slides/premium-car-detailing-kochi-workshop.webp",
    galleryImage: "/real-photos/jos_ig_08.jpg",
    snapshot: { stages: "4", stagesDesc: "Prep, paint correction, borophine application, curing.", time: "1–2", timeUnit: "days", timeDesc: "Standard application workflow.", priceFrom: "20,000", priceDesc: "Premium tier — ~10–15% above graphene." },
    hasTiers: false,
  },
  {
    slug: "ppf",
    number: "04",
    name: "Paint Protection Film",
    shortDesc: "Self-healing film. Stops stone chips and scratches.",
    longDesc: "Self-healing protective film for full body, partial body, or impact zones (front, hood, fenders, mirrors). Imported, factory-spec material. Invisible finish.",
    outcomeDesc: "Self-healing film. Keeps stone chips and scratches off your paint.",
    image: "/media/hero_slides/ppf-paint-protection-film-kochi.webp",
    galleryImage: "/real-photos/3.png",
    snapshot: { stages: "3", stagesDesc: "Prep, film cutting and application, finishing.", time: "2–3", timeUnit: "days", timeDesc: "Full-body PPF. Partial PPF in 1–2 days.", priceFrom: "35,000", priceDesc: "Partial coverage. Full body sedan ₹1.2L+; SUV ₹1.5L+." },
    hasTiers: false,
  },
  {
    slug: "car-painting",
    number: "05",
    name: "Car Painting",
    shortDesc: "Full or partial repaint. Colour matched, multi-coat.",
    longDesc: "Full-body or partial repainting using factory-grade paint and our dust-controlled spray booth. Colour matching, multi-coat finish, polish, and seal.",
    outcomeDesc: "Full or partial repaint in our dust-controlled spray booth. Colour matched.",
    image: "/media/hero_slides/car-painting-fresh-paint-kerala.webp",
    galleryImage: "/real-photos/jos_ig_12.jpg",
    snapshot: { stages: "5", stagesDesc: "Prep, primer, base coat, clear coat, polish.", time: "5–7", timeUnit: "days", timeDesc: "Full-body. Single panel: 1–2 days.", priceFrom: "15,000", priceDesc: "Single panel. Full repaint typically ₹50,000–80,000+." },
    hasTiers: false,
  },
  {
    slug: "paint-correction",
    number: "06",
    name: "Paint Correction",
    shortDesc: "Removes swirl marks, light scratches, oxidation.",
    longDesc: "Removes swirl marks, light scratches, oxidation, and water spots. 1-stage, 2-stage, or full multi-stage correction depending on paint condition.",
    outcomeDesc: "Removes swirl marks, light scratches, oxidation, water spots.",
    image: "/media/service_images/paint_correction.webp",
    galleryImage: "/real-photos/jos_ig_12.jpg",
    snapshot: { stages: "1–3", stagesDesc: "Single, two-stage, or full multi-stage correction.", time: "1–2", timeUnit: "days", timeDesc: "Depends on paint condition.", priceFrom: "4,000", priceDesc: "Single-stage correction. Multi-stage scales up." },
    hasTiers: false,
  },
  {
    slug: "scratch-dent-repair",
    number: "07",
    name: "Scratch & Dent Repair",
    shortDesc: "Body patchwork, dent reshape, paint match.",
    longDesc: "Body patchwork for dents, scratches, and minor accident repair. Panel reshape, putty, primer, paint match, and clear-coat finish.",
    outcomeDesc: "Body patchwork, dent reshape, paint match. Like it never happened.",
    image: "/media/service_images/Patchwork.webp",
    galleryImage: "/real-photos/jos_ig_06.jpg",
    snapshot: { stages: "5", stagesDesc: "Reshape, putty, primer, paint match, clear coat.", time: "1–3", timeUnit: "days", timeDesc: "Depends on damage extent.", priceFrom: "2,000", priceDesc: "Per dent or scratch panel." },
    hasTiers: false,
  },
  {
    slug: "foam-wash",
    number: "08",
    name: "Foam Wash",
    shortDesc: "Two-bucket wash. Exterior decontamination, tyre and rim clean.",
    longDesc: "Two-bucket foam wash, exterior decontamination, tyre and rim clean, exterior trim dressing. Standalone or part of a larger detailing package.",
    outcomeDesc: "Two-bucket foam wash, exterior decontamination, tyre and rim clean.",
    image: "/media/service_images/carwash.webp",
    galleryImage: "/real-photos/jos_ig_06.jpg",
    snapshot: { stages: "3", stagesDesc: "Pre-rinse, two-bucket wash, decontamination, drying.", time: "Same", timeUnit: "day", timeDesc: "Walk-in service.", priceFrom: "500", priceDesc: "Hatchback. SUVs ₹700–1,000." },
    hasTiers: false,
  },
  {
    slug: "exterior-detailing",
    number: "09",
    name: "Exterior Detailing",
    shortDesc: "Decontamination, paint cleanse, trim dressing.",
    longDesc: "Decontamination, paint cleanse, and trim dressing. Standalone service or as a top-up between coating renewals.",
    outcomeDesc: "Decontamination, paint cleanse, trim dressing. Top-up for coatings.",
    image: "/media/hero_slides/car-detailing-services-udayamperoor.webp",
    galleryImage: "/real-photos/1.png",
    snapshot: { stages: "4", stagesDesc: "Wash, decontamination, paint cleanse, trim dressing.", time: "Same", timeUnit: "day", timeDesc: "Most jobs same-day.", priceFrom: "1,500", priceDesc: "Standalone. Bundled with foam wash for less." },
    hasTiers: false,
  },
  {
    slug: "interior-detailing",
    number: "10",
    name: "Interior Detailing",
    shortDesc: "Vacuum, leather, dashboard care, glass clean.",
    longDesc: "Vacuum, fabric and leather cleaning, dashboard and trim care, glass clean, odour treatment. For sedans, SUVs, and luxury cars.",
    outcomeDesc: "Vacuum, leather, dashboard care, glass clean. Restored cabin.",
    image: "/real-photos/4.png",
    galleryImage: "/real-photos/4.png",
    snapshot: { stages: "5", stagesDesc: "Vacuum, fabric clean, leather treatment, dashboard care, odour.", time: "Same", timeUnit: "day", timeDesc: "Most jobs same-day.", priceFrom: "2,000", priceDesc: "Sedan. SUV/luxury scales up." },
    hasTiers: false,
  },
  {
    slug: "restoration",
    number: "11",
    name: "Full Vehicle Restoration",
    shortDesc: "End-to-end. Body, repaint, interior, coating.",
    longDesc: "End-to-end restoration for older or project cars: body patchwork, full repaint, interior re-trim, paint protection, and final polish. Multi-day project work.",
    outcomeDesc: "End-to-end for older or project cars. Body, repaint, interior, coating.",
    image: "/real-photos/jos_ig_07.jpg",
    galleryImage: "/real-photos/jos_ig_08.jpg",
    snapshot: { stages: "6+", stagesDesc: "Body, paint, interior, coating, polish.", time: "10–20", timeUnit: "days", timeDesc: "Project work. Timeline confirmed at inspection.", priceFrom: "Custom", priceDesc: "Varies widely. WhatsApp for assessment." },
    hasTiers: false,
  },
  {
    slug: "undercoating",
    number: "12",
    name: "Underbody Coating",
    shortDesc: "Anti-rust and sound dampening for the chassis. Coastal-Kerala protection.",
    longDesc: "Underbody coating combines anti-rust treatment for the chassis and floor pan with sound-dampening properties that cut road noise inside the cabin. Sprayed onto the cleaned underbody and cured into a tough, flexible layer. Particularly relevant for cars driven in Kerala's coastal humidity, monsoon-flooded roads, and salt-air corridors. Available for individual cars and fleet / commercial vehicle programs.",
    outcomeDesc: "Anti-rust + sound dampening. Underbody protected against monsoon and coastal corrosion.",
    image: "/media/service_images/undercoating.webp",
    galleryImage: "/media/service_images/undercoating.webp",
    snapshot: { stages: "4", stagesDesc: "Underbody cleaning, masking, application, curing.", time: "Custom", timeUnit: "", timeDesc: "Confirmed after inspection. Drop-off; we WhatsApp updates through the day.", priceFrom: "Custom", priceDesc: "Varies by car size and coverage. WhatsApp for an assessment quote." },
    hasTiers: false,
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
