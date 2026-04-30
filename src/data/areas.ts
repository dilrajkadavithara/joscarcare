export interface Area {
  slug: string;
  name: string;
  isWorkshop?: boolean;
  shortContext: string;
  paragraphs: string[];
  driveRoute: string;
  landmarks: string[];
  demographics: string;
  areaFaqs: { q: string; a: string }[];
  hasSL: { [serviceSlug: string]: boolean };
}

export const areas: Area[] = [
  {
    slug: "udayamperoor",
    name: "Udayamperoor",
    isWorkshop: true,
    shortContext: "Our workshop is here. Drop-off for service, walk-in for inspection.",
    paragraphs: [
      "Our workshop sits on Police Station Road, opposite Manakunnam Village Office. From any side of Udayamperoor you're a five-minute drive away — drop the car, walk over for chai, come back when we WhatsApp you.",
      "Udayamperoor is a Mulanthuruthy-block panchayat eight kilometres south of Tripunithura, historically known for the Synod of Udayamperoor (Synod of Diamper) held in 1599 at the old St. Mary's Church on the eastern side of the village. Today it's primarily residential — daily-driver hatchbacks, freshly-delivered SUVs, and family sedans owned by working-age locals who commute via SH-15 toward Tripunithura and Ernakulam.",
      "Most local jobs we book are pre-monsoon ceramic on Innovas, Fortuners, and recently-delivered Harriers — owners who want their paint protected before the four months of rain that start in June. Daily-driver Marutis and Hyundais come in for foam wash and quarterly polish.",
      "Bring your car in. Or WhatsApp us photos and your make-model and we'll quote the same day."
    ],
    driveRoute: "Workshop is on Police Station Road, opposite Manakunnam Village Office. Easy 2–5 minute drive from anywhere in Udayamperoor.",
    landmarks: [
      "Manakunnam Village Office (directly opposite our workshop)",
      "St. Mary's Old Church / Synod of Diamper site (~2 km east)",
      "Udayamperoor Police Station (50 m from us)",
      "SH-15 / Ernakulam–Ettumanoor State Highway (your route to Tripunithura)"
    ],
    demographics: "Residential. Daily-driver hatchbacks, family sedans, freshly-delivered SUVs. Owners who commute to Tripunithura and Ernakulam.",
    areaFaqs: [
      { q: "Where exactly is your Udayamperoor workshop?", a: "Police Station Road, Udayamperoor 682305 — directly opposite Manakunnam Village Office. The yellow Jos Car Care signage on the front is hard to miss. Parking is at the workshop." },
      { q: "Do you handle pre-delivery coating for new cars?", a: "Yes — pre-delivery ceramic is the most efficient time to coat. Paint is fresh, no correction needed, application bonds at full effectiveness. Most Udayamperoor customers we coat pre-delivery save a day on the timeline. Bring the new car straight from the showroom." }
    ],
    hasSL: { "ceramic-coating": true, "graphene-coating": true, "ppf": true, "car-painting": true, "paint-correction": true, "scratch-dent-repair": true, "foam-wash": true, "interior-detailing": false, "restoration": true },
  },
  {
    slug: "tripunithura",
    name: "Tripunithura",
    shortContext: "6–8 km from the workshop via SH-15. Common pickup area, weekly bookings.",
    paragraphs: [
      "Tripunithura is the historic seat of the Cochin royal family — home to the Hill Palace Museum (Kerala's largest archaeological museum, 54 acres, 49 traditional buildings) and the Sree Poornathrayeesa Temple, which hosts the annual Vrishchikoltsawam festival every November. Our Udayamperoor workshop is six to eight kilometres from Tripunithura town centre — most customers drive in via SH-15 (the Ernakulam–Ettumanoor state highway) or down NH-85 from the Karingachira side.",
      "Tripunithura's car-owner base is mixed: established families in colonial-era homes around the palace, professionals in newer apartments along Hill Palace Road, and the steady commuter flow on SH-15 toward Ernakulam. The Tripunithura metro station opened in March 2024, which has shifted some commuter behaviour but hasn't reduced the demand for owned-car care.",
      "Our weekly bookings here run heavy on ceramic and graphene coating for newer SUVs — Hill Palace Road and the Karingachira corridor see plenty of Innovas, Fortuners, Hyundai Vernas, and BMW 3-Series sedans dropping in. Pre-monsoon coating bookings spike in late May.",
      "Drop your car at our Udayamperoor workshop or WhatsApp us photos for a same-day quote. The drive over takes 12–18 minutes during off-peak hours."
    ],
    driveRoute: "From Tripunithura town centre: 6–8 km. Take SH-15 south, or come via Hill Palace Road and join NH-85 toward Karingachira. 12–18 minutes off-peak, 25–30 minutes during evening rush.",
    landmarks: [
      "Hill Palace Museum (Kerala's largest archaeological museum)",
      "Sree Poornathrayeesa Temple",
      "Tripunithura Railway Station + Metro station (active since March 2024)",
      "SH-15 (Ernakulam–Ettumanoor State Highway)",
      "Karingachira Junction on NH-85"
    ],
    demographics: "Mixed: established royal-area families, professionals on Hill Palace Road, commuters on SH-15. Healthy mix of premium SUVs and family sedans.",
    areaFaqs: [
      { q: "How long is the drive from Tripunithura to your Udayamperoor workshop?", a: "12–18 minutes off-peak via SH-15. Add 10 minutes during evening rush hour (5–7 pm). Most Tripunithura customers drop the car in the morning and we WhatsApp updates through the day." },
      { q: "Can you handle older sedans being kept long-term in Tripunithura?", a: "Yes — Tripunithura has a fair mix of cars that have been in the family 8–15 years. We do paint correction, full repaint, and ceramic protection on these. The 5-year ceramic tier with annual decontamination is the typical recommendation for long-keep cars in this area." }
    ],
    hasSL: { "ceramic-coating": true, "ppf": true, "car-painting": true, "foam-wash": true, "interior-detailing": true },
  },
  {
    slug: "maradu",
    name: "Maradu",
    shortContext: "Luxury car territory. Inner suburb 6 km south of Kochi centre.",
    paragraphs: [
      "Maradu is an inner suburb of Kochi six kilometres south of the city centre, with a 2011 population of around 44,700 and an apartment market that averages ₹8,600 per square foot — making it one of Kochi's most concentrated high-AOV residential pockets. NH-66 (the Kochi bypass), NH-85 (Kochi–Madurai highway), and NH-966B all intersect at Kundannoor Junction, just north of central Maradu, putting the area at the centre of Kochi's premium-vehicle traffic.",
      "Forum Mall opened in Maradu in August 2023, anchored by Lulu Hypermarket, PVR Luxe, Marks & Spencer, and H&M. The mall, the gated communities along NH-66, and the apartment towers around Nettoor have changed the area's car profile — Range Rovers, BMW X-series, Audi Q-series, premium European SUVs, plus the occasional Phantom-class luxury vehicle. Royal Drive Care, a known luxury car service, operates from the NH-66 bypass at Nettoor.",
      "Pro Color Bodyshop dominates the head-term car painting search in Maradu with 440+ Google reviews — we don't compete on volume there. Where we win: specialist work on luxury cars where show-grade detailing matters more than speed. Premium ceramic application on a Range Rover is a different job from a generic respray, and that's the work we book here.",
      "WhatsApp us with photos of your luxury vehicle — we'll quote a specialist appointment, no shared bay during the work."
    ],
    driveRoute: "From Maradu (Kundannoor or Nettoor): 8–12 km via NH-66 south to Vyttila, then SH-15 east toward Udayamperoor. 18–25 minutes off-peak, 30–40 minutes in evening rush.",
    landmarks: [
      "Kundannoor Junction (NH-66 / NH-85 / NH-966B intersection)",
      "Forum Mall Kochi (opened August 2023, Lulu Hypermarket anchor)",
      "Maradu Bridge / Nettoor (luxury apartment corridor)",
      "Royal Drive Care service centre (NH-66 bypass)",
      "Centre Square Mall corridor"
    ],
    demographics: "High-AOV residential. Range Rovers, BMW X-series, Audi Q-series, Mercedes E/S-class, premium SUVs from gated communities.",
    areaFaqs: [
      { q: "Do you take luxury cars by appointment, not walk-in?", a: "For Maradu's Range Rovers, Phantoms, Mercedes S-class and similar — yes, we run booked appointments with no shared bay during the work. WhatsApp us with photos, we lock in the slot, and the car gets the dedicated workflow it needs. Walk-ins are fine for hatchback foam wash but not for show-grade detailing on a luxury vehicle." },
      { q: "How does the drive from Maradu to your workshop work during evening rush?", a: "Honest answer: NH-66 between Vyttila and Kundannoor backs up between 5 and 7 pm. Drop-off works best before 11 am or after 8 pm. We can also arrange WhatsApp pickup for premium clients in central Maradu — message us with your location." }
    ],
    hasSL: { "ceramic-coating": true, "ppf": true, "car-painting": true },
  },
  {
    slug: "mulanthuruthy",
    name: "Mulanthuruthy",
    shortContext: "Eight kilometres east of Tripunithura. Backwater-adjacent. Heritage area.",
    paragraphs: [
      "Mulanthuruthy is fifteen kilometres southeast of Kochi city centre and eight kilometres east of Tripunithura. The historic Marthoman church draws steady religious-tourism traffic, and the village sits along the eastern banks of the Vembanad Lake's Cochin Backwaters — the geography means humid air year-round and salt deposit risk for cars parked outside, both factors that affect coating durability.",
      "Mulanthuruthy is well-connected by road to Kanjiramattom (5 km), Piravom (13 km), Tripunithura, and Ernakulam. The drive to our Udayamperoor workshop runs about 12 kilometres via the Tripunithura road, taking 20–25 minutes off-peak. The car-owner base here skews toward family sedans, smaller SUVs, and a meaningful number of older cars kept long-term in the same family — precisely the cars that benefit most from ceramic with annual decontamination.",
      "Our current map-pack rank for car painting in Mulanthuruthy is #4 — there's an opportunity here to push to #1 with a focused review push, given the local competitor (DC Tec Colourz) only has 10 Google reviews. If you're a Mulanthuruthy customer who's used us, a Google review helps us help future customers find us in the local pack.",
      "Drop your car at our workshop or WhatsApp us photos — same-day quote, transparent pricing, written timeline before any work starts."
    ],
    driveRoute: "From Mulanthuruthy: 12 km via the Mulanthuruthy–Tripunithura road, then SH-15 north to Udayamperoor. 20–25 minutes off-peak.",
    landmarks: [
      "Marthoman Syrian Church (historic pilgrimage site)",
      "Vembanad Lake / Cochin Backwaters (eastern shore)",
      "Kanjiramattom (5 km away)",
      "Piravom (13 km, on the route to Kottayam)"
    ],
    demographics: "Family sedans, smaller SUVs, older long-keep family cars. Mix of working-age commuters and retirees. Some agricultural families in outer wards.",
    areaFaqs: [
      { q: "We live near the backwaters — does humidity affect the coating?", a: "Humidity itself doesn't degrade modern ceramic. What you actually need to watch in Mulanthuruthy is salt deposits from the backwater air on cars parked outside. Salt forms a film on top of the coating that mimics 'coating wearing off' — but it's just contamination. A monthly proper foam wash restores the hydrophobic feel. We recommend the 3-year tier with annual decontamination for backwater-adjacent locations." },
      { q: "Do you do work on older sedans? My car is 10+ years old.", a: "Yes — Mulanthuruthy has plenty of older long-keep cars and we love this work. Paint correction first (removes a decade of swirl marks and oxidation), then ceramic protection. Sometimes a full repaint if the clear coat is genuinely failing. Drop the car in for a free inspection, we'll tell you honestly what it needs." }
    ],
    hasSL: { "car-painting": true },
  },
  {
    slug: "thiruvankulam",
    name: "Thiruvankulam",
    shortContext: "On the eastern boundary of Tripunithura. NH-85 passes through.",
    paragraphs: [
      "Thiruvankulam sits on the easternmost boundary of Tripunithura along NH-85 (the Kochi–Madurai highway, also known as Old NH-49). The area rises to about 30 metres elevation, and the highway frontage means a high proportion of car owners who do long-distance highway driving — Madurai-route commuters, weekend Munnar-trip families, and businesses with delivery vehicles.",
      "The drive from Thiruvankulam to our Udayamperoor workshop runs 8–10 kilometres via the Tripunithura road, about 15–20 minutes. Highway-driving cars wear differently from city-only cars: more stone chips on the front-end (because of NH-85 traffic at speed), more bug residue in summer, more sustained UV exposure on long journeys. PPF on the front-end is the conversation we have with most Thiruvankulam customers — ceramic alone doesn't stop physical damage from highway debris.",
      "Foam wash on a regular schedule matters more here than in city-only driving — highway dust accumulates faster and locks in if not cleaned within a week. We see meaningful uplift in coating durability for Thiruvankulam customers who book quarterly maintenance washes.",
      "WhatsApp us your make and model — we'll recommend ceramic, PPF, or a combo based on how much highway driving you actually do."
    ],
    driveRoute: "From Thiruvankulam (NH-85 corridor): 8–10 km west to Tripunithura, then SH-15 south to Udayamperoor. 15–20 minutes off-peak.",
    landmarks: [
      "NH-85 (Kochi–Madurai highway)",
      "Eastern boundary of Tripunithura",
      "Karingachira Junction on NH-85 (5 km)",
      "Tripunithura town centre (5 km west)"
    ],
    demographics: "Highway commuters, long-distance drivers, families that take weekend trips toward Munnar / Madurai. Higher-than-average front-end stone-chip damage on cars.",
    areaFaqs: [
      { q: "I drive a lot on NH-85 toward Madurai. What protection do I need?", a: "For sustained highway driving, ceramic alone won't stop stone chips on the front-end. The honest answer for Thiruvankulam customers is partial PPF on the front bumper, hood, and fender edges (the impact zones), with ceramic on the rest of the body for gloss and chemical protection. The combination handles both the physical and the chemical wear." },
      { q: "How often should I wash my car if I'm on the highway daily?", a: "Highway-driven cars accumulate dust and bug residue faster than city cars. We recommend a proper foam wash every 7–10 days, or our monthly subscription if you'd rather just hand it to us. Skipping washes for 3+ weeks lets residue lock in and accelerates coating wear." }
    ],
    hasSL: { "ppf": true, "foam-wash": true },
  },
  {
    slug: "chottanikkara",
    name: "Chottanikkara",
    shortContext: "Famous Bhagavathy temple, 15 km from Ernakulam Junction. Pilgrim corridor.",
    paragraphs: [
      "Chottanikkara is best known for the Chottanikkara Bhagavathy Temple — one of Kerala's most-visited Devi temples, where the goddess is worshipped in three forms: Saraswati in the morning, Bhadrakali at noon, and Durga in the evening. The temple is fifteen kilometres from Ernakulam Junction (South), and the surrounding area sees steady pilgrim-driven traffic, especially during Makam Thozhal and the annual festival.",
      "We currently hold the #1 map-pack rank for car painting in Chottanikkara — held by proximity. The drive from Chottanikkara to our Udayamperoor workshop runs about 6–8 kilometres via the Tripunithura road, 12–15 minutes off-peak. The local car-owner base is mixed: pilgrimage-route businesses (taxi operators, tour vehicle owners), residents in newer plots developed around the temple corridor, and the steady commuter flow into Ernakulam.",
      "Cars that do pilgrim-route work — taxis, tour Innovas, contract cars taking families to the temple — have specific wear patterns: heavy door-handle scuffs, interior wear from constant family use, and accumulated washer-fluid residue on the bonnet. Most of our Chottanikkara bookings are quarterly maintenance: foam wash, interior detailing, paint correction on the bonnet and door panels.",
      "WhatsApp us with your make and model — we'll quote based on your actual usage pattern, not a generic price list."
    ],
    driveRoute: "From Chottanikkara: 6–8 km via the Tripunithura road, then SH-15 to Udayamperoor. 12–15 minutes off-peak.",
    landmarks: [
      "Chottanikkara Bhagavathy Temple",
      "Annual Makam Thozhal festival site",
      "15 km from Ernakulam Junction (South)",
      "Tripunithura corridor"
    ],
    demographics: "Mix of pilgrim-route taxi/tour operators, residential families, and commuters. High-usage vehicles with characteristic wear.",
    areaFaqs: [
      { q: "I run a tour-Innova for the temple route — what protection makes sense?", a: "For a tour vehicle that takes families daily, the priority is durability over premium aesthetics. We recommend the 3-year ceramic tier on the body (handles weekly washes well) plus an aggressive interior detailing schedule — quarterly leather treatment and dashboard care because constant family use wears interiors fast. PPF on the front bumper if you're doing highway runs." },
      { q: "How long does ceramic last on a high-mileage taxi?", a: "Ceramic durability scales down on high-mileage cars not because of the coating itself but because of wash frequency and chemistry. A taxi washed at petrol pumps with brushes 3 times a week will see real-world ceramic life closer to 18 months than the rated 3 years. Switch to a proper foam wash routine and ceramic holds well." }
    ],
    hasSL: { "car-painting": true },
  },
  {
    slug: "irumpanam",
    name: "Irumpanam",
    shortContext: "Industrial corridor 8 km from Kochi centre. BPCL/IOC/HPCL installations.",
    paragraphs: [
      "Irumpanam is one of Kochi's industrial belts, eight kilometres from the city centre, housing major fuel installations from BPCL, Indian Oil Corporation, and Hindustan Petroleum. The BPCL installation here is connected to the Kochi Refinery (Ambalamugal) via pipeline and is the major distribution centre for the refinery's products. The Cochin Special Economic Zone is nearby, and the Kochi Seaport-Airport Road runs through the corridor.",
      "Cars in Irumpanam fall into a clear pattern: company-issued sedans for refinery/SEZ executives, factory-commute hatchbacks for shift workers, and a fair concentration of fleet vehicles owned by logistics companies. Industrial-zone cars carry a particular wear: more atmospheric particulate, occasional fuel-vapour exposure, and the heavier dust loads that come with proximity to operational refineries and the seaport-airport road.",
      "The drive from Irumpanam to our Udayamperoor workshop runs about 10–12 kilometres via the Vyttila bypass and SH-15. About 20–25 minutes off-peak. Industrial-zone cars benefit disproportionately from ceramic coating's resistance to chemical contamination — the hydrophobic surface makes industrial dust easier to wash off, and prevents the kind of stuck-on contamination that develops on uncoated paint over months.",
      "WhatsApp us your make and model — particularly useful if you have a fleet of company cars to coat in batch."
    ],
    driveRoute: "From Irumpanam (BPCL corridor): 10–12 km via Vyttila bypass and SH-15 east. 20–25 minutes off-peak. NH-85 also viable from the southern Irumpanam wards.",
    landmarks: [
      "BPCL installation (major fuel distribution centre)",
      "Kochi Refinery, Ambalamugal (5 km)",
      "Cochin Special Economic Zone",
      "Kochi Seaport-Airport Road",
      "Vyttila Junction (NH-66 entry)"
    ],
    demographics: "Refinery and SEZ executives, factory-commute shift workers, logistics company fleet vehicles. Higher-than-average atmospheric particulate exposure.",
    areaFaqs: [
      { q: "Can you handle a fleet of company cars from the refinery / SEZ?", a: "Yes — we batch fleet bookings outside peak hours so we can dedicate the spray booth and bays to your fleet. Typical fleet pricing is per-car at standard tier rates, with a small discount on volumes of 5+ cars. WhatsApp us with the count, makes/models, and intended tier and we'll quote a batch schedule." },
      { q: "Industrial dust accumulates fast on my car. Will ceramic actually help?", a: "It helps significantly. Ceramic doesn't prevent dust landing on the car — nothing can — but it dramatically reduces dust adhesion. A weekly rinse on a ceramic-coated car restores the surface; a weekly rinse on uncoated paint just smears the dust around. Industrial-zone cars in Kochi see the biggest practical difference from coating." }
    ],
    hasSL: { "ceramic-coating": true, "foam-wash": true },
  },
  {
    slug: "amballoor",
    name: "Amballoor",
    shortContext: "20 km from Kochi, 4.8 km from Udayamperoor. Southern Ernakulam edge.",
    paragraphs: [
      "Amballoor is on the southern edge of Ernakulam district along the Ernakulam–Thalayolaparambu main road, with a 2011 population of around 11,400. It's part of the Amballoor Panchayath and sits adjacent to Perumpilly, Arakkunnam, Kanjiramattom, and Edakkattuvayal. The pin code is 682315 and the post office is at Kanjiramattom.",
      "The drive from Amballoor to our Udayamperoor workshop is one of the shortest in our coverage area — just 4.8 kilometres. About 10–12 minutes door-to-door via the Mulanthuruthy road. Most Amballoor customers come for car painting and full repaint work; we currently hold the #1 map-pack rank for car painting in Amballoor by proximity.",
      "The car-owner base in Amballoor leans toward family hatchbacks, smaller sedans, and a notable number of agricultural-family vehicles — pickup trucks, older Mahindra Boleros, working SUVs that see field roads as well as town. These cars wear differently: more body-panel scuffs, more underbody dust, and more frequent dent-and-scratch work than ceramic coating.",
      "Drop your car in for a free inspection — we're a 10-minute drive away. Or WhatsApp photos of any specific damage and we'll quote upfront."
    ],
    driveRoute: "From Amballoor: 4.8 km via the Mulanthuruthy road north to Udayamperoor. 10–12 minutes — one of the shortest drives in our coverage.",
    landmarks: [
      "Ernakulam–Thalayolaparambu main road",
      "Kanjiramattom (3 km, where the post office is)",
      "Perumpilly, Arakkunnam, Edakkattuvayal (adjacent panchayats)",
      "Southern boundary of Ernakulam district"
    ],
    demographics: "Family hatchbacks, smaller sedans, agricultural-family vehicles (Boleros, working SUVs). More dent/scratch work than coating volume.",
    areaFaqs: [
      { q: "My Bolero takes a lot of field-road abuse. Is ceramic worth it?", a: "Honestly, no — for a working vehicle that goes off-road, scratch resistance matters more than gloss. The right answer is borophine coating (the hard-shell tech designed for daily city/rural traffic) or PPF on the front-end and lower panels. We can talk through which fits when you bring the car in." },
      { q: "How quick is it to drive over from Amballoor?", a: "10–12 minutes via the Mulanthuruthy road. One of the shortest drives in our coverage area. Most Amballoor customers drop the car morning, do their other errands in Udayamperoor or Tripunithura, and pick up by evening." }
    ],
    hasSL: { "car-painting": true },
  },
  {
    slug: "thiruvaniyoor",
    name: "Thiruvaniyoor",
    shortContext: "Eastern Kochi suburb. 10 km from Tripunithura, 15 km from Kochi centre.",
    paragraphs: [
      "Thiruvaniyoor is an eastern suburb of Kochi in Kunnathunad Taluka, fifteen kilometres southeast of the city centre and ten kilometres from Tripunithura. The Gram Panchayat has a population of around 25,300 spread across 2,677 hectares (pin code 682308). The area is twenty kilometres from the district headquarters at Kakkanad and twenty-five kilometres from the sub-district headquarters at Perumbavoor.",
      "Thiruvaniyoor's car-owner base is primarily residential — working-age commuters who drive to Kakkanad's IT corridor and SmartCity for work, families with second cars, and a noticeable share of younger drivers in newer apartments along the Tripunithura road. The area's growth has tracked Kakkanad's IT-driven expansion through the 2020s.",
      "The drive from Thiruvaniyoor to our Udayamperoor workshop runs about 12–14 kilometres via Tripunithura, taking 22–28 minutes off-peak. Most Thiruvaniyoor customers we book are in the 25–40 age bracket with newer cars (Hyundai Creta, Kia Seltos, Mahindra XUV700, Toyota Innova) — typical pre-monsoon ceramic and quarterly foam wash demand.",
      "WhatsApp us photos and we'll quote the same day. Drop-off works best — we can also arrange pickup for premium clients."
    ],
    driveRoute: "From Thiruvaniyoor: 12–14 km via Tripunithura road, then SH-15 to Udayamperoor. 22–28 minutes off-peak. Adds 8–10 minutes during evening rush.",
    landmarks: [
      "Kunnathunad Taluka",
      "Kakkanad IT corridor (20 km)",
      "Perumbavoor (25 km)",
      "Tripunithura (10 km)"
    ],
    demographics: "Working-age IT-corridor commuters (Kakkanad, SmartCity). Newer cars — Creta, Seltos, XUV700, Innova. Younger driver demographic.",
    areaFaqs: [
      { q: "I commute to Kakkanad daily. Worth ceramic on a 2-year-old Creta?", a: "Yes — at the 3-year tier. A Creta on the Kakkanad commute sees daily highway exposure, parking-lot scuffs, monsoon humidity, and regular washes. The 3-year ceramic tier with annual decontamination handles all of that and resells the car better when you upgrade." },
      { q: "Can you arrange pickup from Thiruvaniyoor for service appointments?", a: "For booked appointments at premium tier (3-year ceramic, full PPF, restoration projects), we can arrange WhatsApp pickup. Drop-off at the workshop is fastest for everything else. Message us your location and we'll let you know what's possible." }
    ],
    hasSL: { "ceramic-coating": true, "foam-wash": true },
  },
];

export function getArea(slug: string): Area | undefined {
  return areas.find((a) => a.slug === slug);
}

export const longContext = (a: Area) => a.paragraphs.join(" ");
