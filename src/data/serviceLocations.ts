// 25 service-location combinations from site_plan.md
export const serviceLocations: { service: string; area: string }[] = [
  { service: "ceramic-coating", area: "udayamperoor" },
  { service: "ceramic-coating", area: "tripunithura" },
  { service: "ceramic-coating", area: "maradu" },
  { service: "graphene-coating", area: "udayamperoor" },
  { service: "ppf", area: "udayamperoor" },
  { service: "ppf", area: "tripunithura" },
  { service: "ppf", area: "maradu" },
  { service: "car-painting", area: "udayamperoor" },
  { service: "car-painting", area: "tripunithura" },
  { service: "car-painting", area: "maradu" },
  { service: "car-painting", area: "mulanthuruthy" },
  { service: "car-painting", area: "chottanikkara" },
  { service: "car-painting", area: "amballoor" },
  { service: "foam-wash", area: "udayamperoor" },
  { service: "foam-wash", area: "tripunithura" },
  { service: "paint-correction", area: "udayamperoor" },
  { service: "scratch-dent-repair", area: "udayamperoor" },
  { service: "interior-detailing", area: "tripunithura" },
  { service: "restoration", area: "udayamperoor" },
  { service: "ppf", area: "thiruvankulam" },
  { service: "foam-wash", area: "thiruvankulam" },
  { service: "ceramic-coating", area: "irumpanam" },
  { service: "foam-wash", area: "irumpanam" },
  { service: "ceramic-coating", area: "thiruvaniyoor" },
  { service: "foam-wash", area: "thiruvaniyoor" },
];

// URL slug pattern: {service-slug}-{area-slug}
export function slLink(service: string, area: string): string {
  return `/${service}-${area}`;
}

// Reverse: given a slug like "ceramic-coating-tripunithura", get { service, area }
export function parseSlSlug(slug: string): { service: string; area: string } | null {
  const services = ["ceramic-coating", "graphene-coating", "borophine-coating", "ppf", "car-painting", "paint-correction", "scratch-dent-repair", "foam-wash", "exterior-detailing", "interior-detailing", "restoration"];
  const areas = ["udayamperoor", "tripunithura", "maradu", "mulanthuruthy", "thiruvankulam", "chottanikkara", "irumpanam", "amballoor", "thiruvaniyoor"];
  for (const s of services) {
    if (slug.startsWith(s + "-")) {
      const area = slug.slice(s.length + 1);
      if (areas.includes(area)) return { service: s, area };
    }
  }
  return null;
}
